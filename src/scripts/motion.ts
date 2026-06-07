// Global motion: scroll reveal, magnetic buttons, ripple, stat count-up.
// All respect prefers-reduced-motion.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.1;
      const y = (e.clientY - r.top - r.height / 2) * 0.1;
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

function init() {
  initReveal();
  initMagnetic();
  initRipple();
  initCounters();
  initParallax();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
