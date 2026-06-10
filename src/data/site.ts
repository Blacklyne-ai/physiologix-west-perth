// ============================================================
// Central site data — PhysioLogix Physiotherapy + Pilates, West Perth
// AHPRA-compliant copy. No outcome guarantees, no "specialist",
// no comparative claims. en-AU spelling throughout.
// ============================================================

export const site = {
  name: 'PhysioLogix',
  legalName: 'PhysioLogix Physiotherapy + Pilates',
  motto: 'Physiotherapy at the Speed of Life',
  founded: 2017,
  tagline:
    'Founder-led physiotherapy, reformer pilates, dry needling and rehabilitation in West Perth.',
  phoneDisplay: '0450 075 955',
  phoneHref: '+61450075955',
  email: 'bookings@physiologix.com.au',
  abn: '', // set when provided — footer shows it only when non-empty
  booking: 'https://physiologix.cliniko.com/bookings',
  reviewsUrl: 'https://www.google.com/maps/search/physiologix+west+perth',
  rating: '5.0',
  reviewCount: 81,
  address: {
    suite: '6/567 Newcastle St',
    locality: 'West Perth',
    region: 'WA',
    postcode: '6005',
    country: 'AU',
    full: '6/567 Newcastle St, West Perth WA 6005',
    mapsQuery: 'PhysioLogix+6/567+Newcastle+St+West+Perth+WA+6005',
  },
  hours: [
    { day: 'Monday', time: '1:30pm – 6:30pm', open: true },
    { day: 'Tuesday', time: '9:30am – 6:30pm', open: true },
    { day: 'Wednesday', time: 'Closed', open: false },
    { day: 'Thursday', time: '9:30am – 6:30pm', open: true },
    { day: 'Friday', time: '1:30pm – 5:30pm', open: true },
    { day: 'Saturday', time: '9:00am – 12:00pm', open: true },
    { day: 'Sunday', time: 'Closed', open: false },
  ],
  areasServed: [
    'West Perth', 'Northbridge', 'Leederville', 'Subiaco', 'Perth CBD',
    'East Perth', 'Mount Lawley', 'North Perth', 'Wembley', 'Floreat',
  ],
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing-rebates' },
  { label: 'Contact', href: '/contact' },
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  short: string;
  intro: string;
  body: string[];
  bullets: string[];
  icon: string; // matches a key in ServiceIcon.astro
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy',
    eyebrow: 'Founder-led · The starting point for most patients',
    short:
      'Diagnostic-first physiotherapy. We find the real cause, then build a plan that fits your condition.',
    intro:
      'Diagnostic-first physiotherapy with Vincent Harvey, an AHPRA-registered physiotherapist with 10+ years of clinical experience.',
    body: [
      'Most patients start here. Your initial assessment is conducted by Vincent personally — a thorough history, hands-on examination and movement screening designed to find the real cause of your pain rather than label the symptom.',
      'From there we build a treatment plan around your condition, lifestyle and goals. That usually combines hands-on techniques, exercise prescription and patient education so you understand what you are doing and why.',
      'We keep the clinic deliberately small. No call centres, no bouncing between locums. The person who assesses you is the person who treats you.',
    ],
    bullets: [
      'Initial consultation and assessment (allow 45–60 minutes)',
      'Standard follow-up treatments',
      'Treatment of musculoskeletal conditions',
      'Exercise prescription and patient education',
      'One-on-one care with an AHPRA-registered physiotherapist',
    ],
    icon: 'physio',
    image: '/photos/clinic/physio-treatment.jpg',
    imageAlt: 'Physiotherapist performing a gentle neck mobilisation on a patient',
    featured: true,
  },
  {
    slug: 'reformer-pilates',
    title: 'Clinical Reformer Pilates',
    eyebrow: 'Our differentiator · One-on-one with a physio',
    short:
      'Reformer pilates delivered by an AHPRA-registered physiotherapist, tied to your rehabilitation goals.',
    intro:
      'Reformer pilates delivered by an AHPRA-registered physiotherapist — prescribed for your rehabilitation goals, not group fitness with a label.',
    body: [
      'Most reformer pilates studios are fitness studios. We are a physiotherapy clinic that uses reformer pilates clinically — delivered one-on-one by an AHPRA-registered physiotherapist and prescribed specifically for your rehabilitation goals.',
      'Vincent holds advanced training in clinical reformer pilates and is a qualified pilates instructor. That means each session is targeted, evidence-based and progressed at the pace your body is ready for.',
    ],
    bullets: [
      'One-on-one reformer pilates with a physiotherapist',
      'Group reformer pilates classes',
      'Mat pilates',
      'Targeted post-injury rehabilitation through pilates',
      'Pre-natal and post-natal pilates',
    ],
    icon: 'pilates',
    image: '/photos/services/reformer-pilates.jpg',
    imageAlt: 'Reformer pilates equipment in the PhysioLogix studio',
    featured: true,
  },
  {
    slug: 'dry-needling',
    title: 'Dry Needling',
    eyebrow: 'Effective for chronic pain',
    short:
      'Advanced dry needling for trigger point release, chronic pain and acute injuries.',
    intro:
      'Advanced dry needling for trigger point release, chronic pain and acute injuries — often combined with exercise prescription for durable results.',
    body: [
      'Vincent holds advanced training in dry needling. It can be particularly useful for trigger point release, chronic pain and certain acute injuries.',
      'We rarely use dry needling in isolation. It is most effective combined with exercise prescription and the rest of your treatment plan — addressing the cause alongside the symptom.',
    ],
    bullets: [
      'Trigger point release',
      'Management of chronic pain',
      'Support for acute injuries',
      'Combined with exercise prescription',
    ],
    icon: 'needle',
  },
  {
    slug: 'manual-therapy',
    title: 'Manual Therapy',
    eyebrow: 'Hands-on physiotherapy',
    short: 'Soft tissue manipulation, joint mobilisation and trigger point release.',
    intro:
      'Hands-on physiotherapy techniques — soft tissue manipulation, joint mobilisation and trigger point release.',
    body: [
      'Manual therapy is hands-on physiotherapy: techniques applied directly to joints and soft tissue to reduce pain, restore movement and support recovery.',
      'It is one part of a broader plan. We pair manual therapy with exercise and education so improvements hold rather than fade between sessions.',
    ],
    bullets: [
      'Soft tissue manipulation',
      'Joint mobilisation',
      'Trigger point release',
      'Combined with exercise rehabilitation',
    ],
    icon: 'hands',
  },
  {
    slug: 'pre-post-op-rehabilitation',
    title: 'Pre & Post-Operative Rehabilitation',
    eyebrow: 'Surgical preparation and recovery',
    short: 'Programmes for knee, hip, ACL, spinal and shoulder procedures.',
    intro:
      'Structured surgical preparation and recovery programmes for knee, hip, ACL, spinal and shoulder procedures.',
    body: [
      'Going into surgery stronger tends to help you come out of it better. We build pre-operative programmes to prepare your body, then guide your post-operative rehabilitation through each stage of recovery.',
      'We work alongside your surgeon and follow their protocols, progressing you carefully toward your return-to-life or return-to-sport goals.',
    ],
    bullets: [
      'Knee and hip replacement rehabilitation',
      'ACL reconstruction recovery',
      'Spinal surgery recovery',
      'Shoulder surgery recovery',
    ],
    icon: 'recovery',
    image: '/photos/services/exercise-rehab-squat.jpg',
    imageAlt: 'Exercise rehabilitation under physiotherapist supervision',
  },
  {
    slug: 'hydrotherapy',
    title: 'Hydrotherapy',
    eyebrow: 'Pool-based rehabilitation',
    short: 'Water-based rehabilitation with a qualified hydrotherapy instructor.',
    intro:
      'Pool-based rehabilitation led by a qualified hydrotherapy instructor — gentle on joints, effective for recovery.',
    body: [
      'Water reduces load on the joints while still letting you build strength and movement. It can be a valuable option early in recovery or for conditions where land-based exercise is painful.',
      'Vincent is a qualified hydrotherapy instructor. Speak with us about whether hydrotherapy suits your stage of recovery.',
    ],
    bullets: [
      'Pool-based rehabilitation',
      'Reduced joint loading',
      'Suitable for early-stage recovery',
      'Led by a qualified hydrotherapy instructor',
    ],
    icon: 'water',
  },
  {
    slug: 'exercise-rehabilitation',
    title: 'Exercise Rehabilitation',
    eyebrow: 'Strength under physio supervision',
    short:
      'Structured exercise programmes, return-to-sport protocols and strength training.',
    intro:
      'Structured exercise programmes, return-to-sport protocols and strength training under physiotherapist supervision.',
    body: [
      'Exercise is the backbone of durable recovery. We design structured programmes tailored to your condition and goals, then progress them as you get stronger.',
      'For athletes and gym enthusiasts, that includes return-to-sport protocols and performance work — Vincent has a particular focus on this group, drawing on his own sporting background.',
    ],
    bullets: [
      'Structured exercise programmes',
      'Return-to-sport protocols',
      'Strength training under supervision',
      'Athletic performance support',
    ],
    icon: 'dumbbell',
    image: '/photos/services/exercise-rehab-squat.jpg',
    imageAlt: 'Patient performing a supervised squat for exercise rehabilitation',
  },
  {
    slug: 'remedial-massage',
    title: 'Remedial Massage',
    eyebrow: 'With Alan Mahmood',
    short: 'Soft tissue release, sports massage and recovery work.',
    intro:
      'Remedial massage with Alan Mahmood — soft tissue release, sports massage and recovery work.',
    body: [
      'Remedial massage with Alan complements physiotherapy beautifully. It can ease muscle tension, support recovery and help you feel ready to train or simply move more comfortably.',
      'Massage works well alongside an active treatment plan — addressing tightness while exercise builds resilience.',
    ],
    bullets: [
      'Soft tissue release',
      'Sports massage',
      'Pre-event and recovery massage',
      'Muscle tension and stress relief',
    ],
    icon: 'massage',
  },
  {
    slug: 'podiatry',
    title: 'Podiatry',
    eyebrow: 'Foot and lower limb care',
    short: 'Foot and lower limb assessment, custom orthotics and sports podiatry.',
    intro:
      'Podiatry care covering foot and lower limb assessment, custom orthotics and sports podiatry.',
    body: [
      'Foot and lower limb problems often sit behind pain further up the chain. Our podiatry care covers assessment, custom orthotics and sports podiatry.',
      'Please confirm current podiatry availability with the clinic when booking.',
    ],
    bullets: [
      'Foot and lower limb assessment',
      'Custom orthotics',
      'Sports podiatry',
      'Plantar fasciitis treatment',
    ],
    icon: 'foot',
  },
];

export type Condition = {
  slug: string;
  name: string;
  short: string;
  what: string;
  symptoms: string[];
  causes: string[];
  treat: string;
  related: string[]; // service slugs
  priority?: boolean;
};

export const conditions: Condition[] = [
  {
    slug: 'lower-back-pain',
    name: 'Lower Back Pain',
    short: 'One of the most common reasons people see a physiotherapist.',
    what: 'Lower back pain describes discomfort anywhere across the lumbar spine. It is extremely common and, in most cases, not caused by anything sinister — but it can be stubborn and disruptive without the right plan.',
    symptoms: ['Aching or stiffness across the lower back', 'Pain that worsens with sitting, bending or lifting', 'Referred pain into the buttock or leg', 'Muscle spasm or guarding'],
    causes: ['Postural and desk-bound load', 'Muscle and joint strain', 'Disc-related irritation', 'Weakness or movement patterns that overload the area'],
    treat: 'We start by finding what is actually driving your pain. From there, treatment usually combines hands-on work, a tailored exercise programme and education on load management. Lower back pain is one of Vincent\'s specialised-interest areas.',
    related: ['physiotherapy', 'dry-needling', 'reformer-pilates', 'exercise-rehabilitation'],
    priority: true,
  },
  {
    slug: 'neck-pain',
    name: 'Neck Pain',
    short: 'Common in desk-based professionals and after whiplash.',
    what: 'Neck pain covers discomfort across the cervical spine and surrounding muscles. It is especially common in desk-based professionals and after motor vehicle accidents.',
    symptoms: ['Stiffness and reduced range of movement', 'Pain with prolonged sitting or screen use', 'Referred pain into the shoulder or arm', 'Associated headaches'],
    causes: ['Sustained postures and screen time', 'Joint and muscle strain', 'Whiplash and trauma', 'Stress-related muscle tension'],
    treat: 'We assess the neck alongside the upper back and shoulders, then build a plan combining hands-on treatment, exercise and ergonomic advice. Neck pain is one of Vincent\'s specialised-interest areas.',
    related: ['physiotherapy', 'manual-therapy', 'dry-needling'],
    priority: true,
  },
  {
    slug: 'headaches',
    name: 'Headaches',
    short: 'Many headaches have a treatable neck-related component.',
    what: 'Some headaches are driven or worsened by the joints and muscles of the neck — known as cervicogenic headaches. Physiotherapy can help where the neck is involved.',
    symptoms: ['Headache that starts at the base of the skull', 'Pain linked to neck stiffness or posture', 'One-sided head pain', 'Headache aggravated by sustained positions'],
    causes: ['Neck joint and muscle dysfunction', 'Postural and desk-based load', 'Muscle tension', 'Stress'],
    treat: 'We assess whether your headache has a neck-related component and, where it does, treat with hands-on techniques, exercise and posture advice. Headaches are one of Vincent\'s specialised-interest areas.',
    related: ['physiotherapy', 'manual-therapy', 'dry-needling'],
    priority: true,
  },
  {
    slug: 'upper-back-pain',
    name: 'Upper Back Pain',
    short: 'Often linked to posture, breathing and desk-based work.',
    what: 'Upper back (thoracic) pain affects the area between the neck and lower back. It is frequently tied to posture and prolonged sitting.',
    symptoms: ['Aching between the shoulder blades', 'Stiffness with rotation or deep breathing', 'Pain that builds through the workday', 'Associated neck or shoulder tightness'],
    causes: ['Sustained desk postures', 'Joint stiffness', 'Muscle fatigue and weakness', 'Stress and tension'],
    treat: 'Treatment combines hands-on mobilisation, targeted exercise and practical posture and workstation advice to reduce the daily load on the area.',
    related: ['physiotherapy', 'manual-therapy', 'reformer-pilates'],
  },
  {
    slug: 'sciatica',
    name: 'Sciatica',
    short: 'Pain that travels along the sciatic nerve into the leg.',
    what: 'Sciatica describes pain that radiates along the path of the sciatic nerve — from the lower back into the buttock and down the leg. It is usually a symptom of an underlying issue irritating the nerve.',
    symptoms: ['Pain radiating into the buttock and leg', 'Pins and needles or numbness', 'Pain with sitting, standing or walking', 'Weakness in the leg or foot'],
    causes: ['Disc-related nerve irritation', 'Tightness or compression along the nerve path', 'Lower back joint dysfunction', 'Postural and load factors'],
    treat: 'We work to settle the irritation and address the underlying cause with a combination of hands-on treatment, dry needling where appropriate, and a structured exercise programme to help you return to walking, sitting and sleeping comfortably.',
    related: ['physiotherapy', 'dry-needling', 'exercise-rehabilitation'],
    priority: true,
  },
  {
    slug: 'shoulder-bursitis',
    name: 'Shoulder Bursitis',
    short: 'Inflammation of the bursa causing shoulder pain.',
    what: 'Shoulder bursitis is irritation of the bursa — a small fluid-filled sac that cushions the shoulder. It often sits alongside rotator cuff irritation.',
    symptoms: ['Pain on the outside of the shoulder', 'Pain lifting the arm or reaching overhead', 'Night pain when lying on the shoulder', 'Weakness with shoulder movements'],
    causes: ['Repetitive overhead activity', 'Rotator cuff irritation', 'Poor shoulder mechanics', 'Sudden increase in load'],
    treat: 'We settle the irritation and rebuild shoulder control with hands-on treatment and a graded exercise programme that restores strength and movement.',
    related: ['physiotherapy', 'manual-therapy', 'exercise-rehabilitation'],
  },
  {
    slug: 'plantar-fasciitis',
    name: 'Plantar Fasciitis',
    short: 'Heel and arch pain, often worst with the first steps of the day.',
    what: 'Plantar fasciitis is irritation of the plantar fascia — the band of tissue along the sole of the foot. It is a common cause of heel pain.',
    symptoms: ['Sharp heel pain with first steps in the morning', 'Pain after long periods of standing', 'Pain at the start of activity that eases then returns', 'Tenderness under the heel or arch'],
    causes: ['Sudden increase in walking or running', 'Footwear and foot mechanics', 'Calf tightness', 'Load and weight factors'],
    treat: 'Treatment addresses load, foot mechanics and calf flexibility with a structured exercise programme, hands-on work and footwear advice. Podiatry input and orthotics can help in some cases.',
    related: ['physiotherapy', 'podiatry', 'exercise-rehabilitation'],
  },
  {
    slug: 'tennis-elbow',
    name: 'Tennis Elbow',
    short: 'Pain on the outside of the elbow from tendon overload.',
    what: 'Tennis elbow (lateral epicondylalgia) is irritation of the tendons on the outside of the elbow. Despite the name, most cases have nothing to do with tennis.',
    symptoms: ['Pain on the outside of the elbow', 'Pain gripping or lifting', 'Tenderness over the bony point of the elbow', 'Weak or painful grip'],
    causes: ['Repetitive gripping or wrist use', 'Sudden increase in load', 'Work and hobby demands', 'Tendon overload'],
    treat: 'Tendons respond to the right kind of loading. We build a progressive strengthening programme alongside hands-on treatment and activity advice to settle pain and rebuild capacity.',
    related: ['physiotherapy', 'exercise-rehabilitation', 'dry-needling'],
  },
  {
    slug: 'knee-pain',
    name: 'Knee Pain',
    short: 'From runners\' knee to post-surgical recovery.',
    what: 'Knee pain has many causes — from overload in runners and gym-goers, to ligament and cartilage injuries, to post-surgical recovery. The right plan starts with an accurate diagnosis.',
    symptoms: ['Pain with squatting, stairs or running', 'Swelling or stiffness', 'Giving way or instability', 'Pain at the front, sides or back of the knee'],
    causes: ['Training load and biomechanics', 'Ligament or cartilage injury', 'Muscle weakness or imbalance', 'Post-surgical recovery'],
    treat: 'We assess the whole lower limb to find what is loading your knee, then build a strengthening and movement programme to settle symptoms and get you back to activity.',
    related: ['physiotherapy', 'exercise-rehabilitation', 'pre-post-op-rehabilitation'],
  },
  {
    slug: 'hip-bursitis',
    name: 'Hip Bursitis',
    short: 'Pain on the outside of the hip, often worse at night.',
    what: 'Hip bursitis (greater trochanteric pain) is irritation around the outside of the hip. It is often related to tendon overload in the gluteal muscles.',
    symptoms: ['Pain on the outside of the hip', 'Night pain when lying on the side', 'Pain with walking or stairs', 'Tenderness over the bony point of the hip'],
    causes: ['Gluteal tendon overload', 'Hip and pelvic mechanics', 'Sudden increase in activity', 'Muscle weakness'],
    treat: 'We address load and hip control with a graded strengthening programme, hands-on treatment and practical advice on positions and activity to settle the irritation.',
    related: ['physiotherapy', 'exercise-rehabilitation', 'manual-therapy'],
  },
];

export type Member = {
  slug: string;
  name: string;
  role: string;
  short: string;
  bio: string[];
  credentials?: string[];
  image?: string;
  imageAlt?: string;
  placeholder?: boolean;
};

export const team: Member[] = [
  {
    slug: 'vincent-harvey',
    name: 'Vincent Harvey',
    role: 'Senior Physiotherapist + Founder',
    short: 'AHPRA-registered physiotherapist with 10+ years of clinical experience.',
    bio: [
      'Vincent graduated from Curtin University with a Bachelor of Science in Physiotherapy, then spent the next decade working across private practice and hospital settings throughout Perth — building the diagnostic depth that PhysioLogix is now known for.',
      'He founded PhysioLogix in 2017 with a specific intent: to elevate the standard of physiotherapy in West Perth. The clinic stays deliberately small. Vincent still personally conducts every initial assessment. Treatment plans are built individually — not from a template. Patients learn what they are doing and why.',
      'His specialised-interest areas are lower back pain, neck pain, headaches and sports injuries. He has particular experience with gym enthusiasts and high-performance athletes — drawing on his own sporting life in field hockey, squash and body building to understand how athletes think about their bodies.',
      'Beyond his physiotherapy degree, Vincent holds advanced training in clinical reformer pilates and dry needling, and is a qualified hydrotherapy instructor and pilates instructor.',
    ],
    credentials: [
      'BSc Physiotherapy (Curtin)',
      'AHPRA Registered',
      'Dry Needling Certified',
      'Clinical Reformer Pilates',
      'Hydrotherapy Instructor',
      'Pilates Instructor',
    ],
    image: '/photos/team/vincent-harvey.jpg',
    imageAlt: 'Vincent Harvey, Senior Physiotherapist and Founder of PhysioLogix',
  },
  {
    slug: 'alan-mahmood',
    name: 'Alan Mahmood',
    role: 'Remedial Masseuse',
    short: 'Soft tissue release, sports and recovery massage.',
    bio: [
      'Alan provides remedial massage at PhysioLogix — soft tissue release, sports massage and recovery work that complements the clinic\'s physiotherapy care.',
      'His work pairs naturally with an active treatment plan: easing muscle tension and supporting recovery while exercise builds lasting resilience.',
    ],
    image: '/photos/team/alan-mahmood.png',
    imageAlt: 'Alan Mahmood, Remedial Masseuse at PhysioLogix',
  },
  {
    slug: 'mohangi-bhatt',
    name: 'Mohangi Bhatt',
    role: 'Podiatrist',
    short: 'Foot and lower limb assessment, orthotics and sports podiatry.',
    bio: [
      'Mohangi provides podiatry care at PhysioLogix, covering foot and lower limb assessment, custom orthotics and sports podiatry.',
      'She works closely with the physiotherapy team, so issues further up the chain — knees, hips and lower back — are considered alongside what is happening at your feet.',
    ],
  },
];

export type Review = {
  text: string;
  author: string;
  context?: string;
  long?: boolean;
};

export const reviews: Review[] = [
  {
    text: 'Vincent is an excellent physio – knowledgeable, clear in his explanations, and focused on finding the real cause rather than a quick fix. He listens carefully, makes sure you understand each exercise, and has helped get rid of my lower back/hip pain.',
    author: 'Google review',
    context: 'Lower back / hip pain',
  },
  {
    text: 'Vince was absolutely amazing! He was very thorough with his assessment and came up with a great stretching and exercise program that really helped with my hip and back pain. Would highly recommend him to anyone looking for a physio.',
    author: 'Google review',
    context: 'Hip and back pain',
  },
  {
    text: "Vince is a very knowledgeable, professional and gentle-mannered physio. I've seen significant improvements with my sternoclavicular pain in my time with Vince; he is very encouraging, takes the time to explain everything and pays great attention to detail. Vince is an absolute legend and I highly recommend him to anyone seeking an excellent physio who knows their stuff. I've recommended a few friends to Vince and they all agree that he's amazing!",
    author: 'Google review',
    context: 'Sternoclavicular pain',
  },
  {
    text: 'Sciatica resolved! I first went to visit Vince at PhysioLogix after being to a range of different practitioners to help me resolve my sciatica that I had been suffering from for almost 2 months. I had seen other Physios, Chiropractors, Remedial massage therapist, Spinal Flow therapist, all of who only temporarily solved the problem if at all. I literally could not walk, sit, stand or sleep without being in pain. When I saw Vince I got huge relief from him through dry needling, he got a FULL extensive exercise program that allowed me to return to walking, sitting, standing and sleeping without pain.',
    author: 'Google review',
    context: 'Sciatica',
    long: true,
  },
  {
    text: "Was having some issues with my hip when doing long distance running. I followed Vincent's advice and introduced some exercises and technique changes and now I'm back on track. Very happy with the results!",
    author: 'Google review',
    context: 'Running / hip pain',
  },
];

export const reviewDisclaimer =
  'Individual results vary. Treatment outcomes depend on multiple factors including condition, history, and adherence to treatment plan.';

export const insurers = ['NIB', 'HBF', 'Medibank', 'Bupa', 'HCF', 'Westfund'];

export const faqs = [
  {
    q: 'Do I need a referral to see a physiotherapist?',
    a: 'No. Physiotherapy is a primary-contact profession in Australia — you can book directly without a GP referral. Referrals are required for some funding schemes such as Medicare EPC plans, DVA and certain insurance claims.',
  },
  {
    q: 'What should I expect at my first appointment?',
    a: 'Your initial assessment is conducted by Vincent personally. Allow 45–60 minutes for a thorough history, hands-on examination and movement screening. You will leave with an understanding of what is driving your pain and a plan for what comes next.',
  },
  {
    q: 'Can I claim physiotherapy through my private health fund?',
    a: 'Yes, if you hold extras cover that includes physiotherapy. We are an NIB Preferred Provider with a HICAPS terminal, so you can claim your rebate on the spot. We also process claims for HBF, Medibank, Bupa, HCF and Westfund — please confirm your individual cover with your fund.',
  },
  {
    q: 'Do you treat Workers Compensation and motor vehicle claims?',
    a: 'Yes. We treat WorkCover WA claims and motor vehicle (ICWA / CTP) claims, and we handle the associated paperwork so you can focus on recovery.',
  },
  {
    q: 'Do you see NDIS and DVA patients?',
    a: 'Yes. We support NDIS participants (NDIA-managed, plan-managed and self-managed) and welcome DVA cardholders. Get in touch and we will walk you through the claiming process for your situation.',
  },
  {
    q: 'What is clinical reformer pilates, and how is it different from a studio class?',
    a: 'Our reformer pilates is delivered one-on-one by an AHPRA-registered physiotherapist and prescribed specifically for your rehabilitation goals. It is physiotherapy that uses the reformer clinically — not group fitness with a label.',
  },
  {
    q: 'How do I book?',
    a: 'The fastest way is online through our Cliniko booking system. You can also call us on 0450 075 955.',
  },
  {
    q: 'Where are you located and is there parking?',
    a: 'We are at 6/567 Newcastle St, West Perth WA 6005, on the Newcastle Street artery between West Perth and Northbridge. There is on-street parking nearby, and we are a short walk from bus routes along Newcastle Street.',
  },
];

export const stats = [
  { value: 8, suffix: '+', label: 'Years PhysioLogix has been open' },
  { value: 10, suffix: '+', label: "Years of Vincent's clinical experience" },
  { value: 5.0, suffix: '★', label: 'Average Google rating', decimal: true },
  { value: 81, suffix: '+', label: 'Verified Google reviews' },
];

export const processSteps = [
  {
    n: '01',
    title: 'Book online',
    body: 'Cliniko-powered online booking. Pick your time and get a confirmation. We will send a pre-appointment form to gather your history.',
  },
  {
    n: '02',
    title: 'Initial assessment',
    body: 'Vincent personally conducts every initial assessment. We diagnose the real cause — not just label symptoms. Allow 45–60 minutes.',
  },
  {
    n: '03',
    title: 'Tailored plan',
    body: 'A treatment plan built specifically for your condition, lifestyle and goals. You will know what we are doing and why.',
  },
  {
    n: '04',
    title: 'Recovery',
    body: 'Follow-up sessions, exercise prescription and a return-to-life or return-to-sport pathway. We do not keep you longer than you need.',
  },
];
