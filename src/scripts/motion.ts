// Global motion: smooth scroll, reveal, magnetic, ripple, counters,
// custom cursor, 3D tilt, cursor spotlight, scroll progress.
// All respect prefers-reduced-motion and pointer capability.

import Lenis from 'lenis';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// ---- Scroll reveal (Intersection Observer, staggered siblings) ----
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Reveal anything already in (or near) the viewport on load — don't wait on IO.
  const vh = window.innerHeight || document.documentElement.clientHeight;
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('is-visible');
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay ? parseInt(el.dataset.delay) : (i % 6) * 60;
          window.setTimeout(() => el.classList.add('is-visible'), delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  els.forEach((el) => { if (!el.classList.contains('is-visible')) io.observe(el); });

  // Safety net: nothing should ever stay hidden if IO misbehaves.
  window.setTimeout(() => {
    document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh) el.classList.add('is-visible');
    });
  }, 1600);
}

// ---- Magnetic buttons ----
function initMagnetic() {
  if (reduced || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.16;
      const y = (e.clientY - r.top - r.height / 2) * 0.16;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// ---- Ripple ----
function initRipple() {
  document.querySelectorAll<HTMLElement>('[data-ripple]').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (reduced) return;
      const r = el.getBoundingClientRect();
      const span = document.createElement('span');
      const size = Math.max(r.width, r.height);
      span.className = 'ripple';
      span.style.width = span.style.height = `${size}px`;
      span.style.left = `${e.clientX - r.left - size / 2}px`;
      span.style.top = `${e.clientY - r.top - size / 2}px`;
      el.appendChild(span);
      window.setTimeout(() => span.remove(), 650);
    });
  });
}

// ---- Stat count-up ----
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!els.length) return;
  const run = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.counter || '0');
    const decimal = el.dataset.decimal === 'true';
    const suffix = el.dataset.suffix || '';
    if (reduced) {
      el.textContent = (decimal ? target.toFixed(1) : Math.round(target).toString()) + suffix;
      return;
    }
    const dur = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (decimal ? val.toFixed(1) : Math.round(val).toString()) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.classList.add('counter-done');
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
}

// ---- Hero parallax ----
function initParallax() {
  if (reduced) return;
  const els = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!els.length) return;
  const onScroll = () => {
    const y = window.scrollY;
    els.forEach((el) => {
      const ratio = parseFloat(el.dataset.parallax || '0.2');
      el.style.transform = `translateY(${y * ratio * 0.1}px)`;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---- Lenis smooth scroll ----
function initSmoothScroll() {
  if (reduced) return;
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  (window as any).__lenis = lenis;

  // Scroll-velocity skew on tagged elements (marquees)
  const skewEls = document.querySelectorAll<HTMLElement>('[data-velocity]');
  if (skewEls.length) {
    lenis.on('scroll', ({ velocity }: { velocity: number }) => {
      const sk = Math.max(-2.4, Math.min(2.4, velocity * 0.06));
      skewEls.forEach((el) => el.style.setProperty('--skew', `${sk}deg`));
    });
  }
  // In-page anchor links route through Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const t = document.querySelector(id);
        if (t) { e.preventDefault(); lenis.scrollTo(t as HTMLElement, { offset: -90 }); }
      }
    });
  });
}

// ---- Custom cursor ----
function initCursor() {
  if (!finePointer) return;
  const ring = document.createElement('div');
  const dot = document.createElement('div');
  ring.className = 'cursor-ring';
  const label = document.createElement('span');
  label.className = 'cursor-label';
  ring.appendChild(label);
  dot.className = 'cursor-dot';
  document.body.append(ring, dot);
  document.body.classList.add('has-cursor');

  let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
  let mx = rx, my = ry;
  const lerp = reduced ? 1 : 0.2;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  }, { passive: true });

  const loop = () => {
    rx += (mx - rx) * lerp;
    ry += (my - ry) * lerp;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();

  const interactive = 'a, button, [data-magnetic], [data-tilt], input, textarea, select, summary, label, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    const t = e.target as Element;
    if (t.closest?.(interactive)) ring.classList.add('is-hover');
    const labelled = t.closest?.('[data-cursor]') as HTMLElement | null;
    if (labelled) {
      label.textContent = labelled.dataset.cursor || '';
      ring.classList.add('is-label');
    }
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target as Element;
    if (t.closest?.(interactive)) ring.classList.remove('is-hover');
    if (t.closest?.('[data-cursor]')) ring.classList.remove('is-label');
  });
  window.addEventListener('mouseleave', () => { ring.style.opacity = '0'; dot.style.opacity = '0'; });
  window.addEventListener('mouseenter', () => { ring.style.opacity = '1'; dot.style.opacity = '1'; });
}

// ---- Hero mouse-parallax (uses `translate` property so it composes with transforms) ----
function initHeroParallax() {
  if (reduced || !finePointer) return;
  const hero = document.querySelector<HTMLElement>('[data-hero-parallax]');
  if (!hero) return;
  const layers = hero.querySelectorAll<HTMLElement>('[data-depth]');
  if (!layers.length) return;
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach((l) => {
      const d = parseFloat(l.dataset.depth || '12');
      l.style.translate = `${-x * d}px ${-y * d}px`;
    });
  });
  hero.addEventListener('mouseleave', () => {
    layers.forEach((l) => { l.style.translate = ''; });
  });
}

// ---- 3D tilt on cards ----
function initTilt() {
  if (reduced || !finePointer) return;
  const max = 8;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform 0.1s linear';
      el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateY(-5px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.55s var(--ease-out-expo)';
      el.style.transform = '';
    });
  });
}

// ---- Cursor spotlight on dark sections ----
function initSpotlight() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((sec) => {
    const layer = document.createElement('div');
    layer.className = 'spotlight-layer';
    layer.setAttribute('aria-hidden', 'true');
    sec.prepend(layer);
    sec.addEventListener('mousemove', (e) => {
      const r = sec.getBoundingClientRect();
      sec.style.setProperty('--mx', `${e.clientX - r.left}px`);
      sec.style.setProperty('--my', `${e.clientY - r.top}px`);
      sec.classList.add('spotlight-on');
    });
    sec.addEventListener('mouseleave', () => sec.classList.remove('spotlight-on'));
  });
}

// ---- Scroll progress bar ----
function initProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
    bar.style.transform = `scaleX(${p})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

// ---- Pinned scrollytelling (Your first visit) ----
function initScrollytell() {
  const sec = document.querySelector<HTMLElement>('[data-pin]');
  if (!sec) return;
  const steps = Array.from(sec.querySelectorAll<HTMLElement>('[data-pin-step]'));
  const dots = Array.from(sec.querySelectorAll<HTMLElement>('[data-pin-dot]'));
  const fill = sec.querySelector<HTMLElement>('[data-pin-fill]');
  const n = steps.length;
  if (!n) return;
  const desktop = () => window.matchMedia('(min-width: 768px)').matches;
  const update = () => {
    if (!desktop()) {
      steps.forEach((s) => s.classList.add('is-active'));
      dots.forEach((d) => d.classList.add('is-active'));
      if (fill) fill.style.transform = 'scaleY(1)';
      return;
    }
    const r = sec.getBoundingClientRect();
    const total = sec.offsetHeight - window.innerHeight;
    const prog = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;
    const idx = Math.min(Math.floor(prog * n * 0.999), n - 1);
    steps.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    if (fill) fill.style.transform = `scaleY(${prog})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function init() {
  initSmoothScroll();
  initScrollytell();
  initReveal();
  initMagnetic();
  initRipple();
  initCounters();
  initParallax();
  initCursor();
  initTilt();
  initSpotlight();
  initProgress();
  initHeroParallax();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
