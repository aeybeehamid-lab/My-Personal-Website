/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  YOUR WEBSITE CONTENT — edit this file to update the whole site.
 *  See src/content/HOW_TO_EDIT.md for a simple guide.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const siteContent = {
  // ─── Site-wide SEO (browser tab & Google preview) ───────────────────────
  site: {
    title: 'Abdulhamid Inuwa',
    description:
      'Engineer in Training — electrical & embedded systems, power electronics, installations, and fintech product development.',
  },

  // ─── Personal details ─────────────────────────────────────────────────────
  personal: {
    fullName: 'Abdulhamid Inuwa',
    title: 'Engineer in Training',
    tagline:
      'Building practical power, embedded, and integrated systems — from circuit bench to field installation.',
    location: 'Jos, Plateau State, Nigeria',
    email: 'Aeybeehamid@gmail.com',
    // Set showPhone to true only if you want your number on the public site
    phone: '08109979402',
    showPhone: false,
    languages: ['Hausa', 'English'],
    // Put your photo in: public/images/profile.jpg (then use path below)
    photo: '/images/profile.jpg',
    // Put your CV PDF in: public/cv/resume.pdf
    cvPdf: '/cv/resume.pdf',
    cvLabel: 'Download CV',
  },

  // ─── Social & professional links (leave "" until you have the URL) ────────
  social: {
    github: '',
    linkedin: '',
    twitter: '',
    // Paychat or other product links when ready
    paychat: '',
  },

  // ─── Hero section (home page top) ─────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    availableForWork: true,
    availabilityText: 'Open to engineering roles, internships & collaborations',
    ctaPrimary: { label: 'View projects', href: '/projects' },
    ctaSecondary: { label: 'Get in touch', href: '/contact' },
  },

  // ─── About page ─────────────────────────────────────────────────────────────
  about: {
    paragraphs: [
      'I am an engineer in training with strong hands-on experience in circuit design, power electronics, embedded systems, and electrical installations. I have practical exposure to circuit simulation using Proteus and microcontroller-based systems built with Arduino and Raspberry Pi.',
      'I have developed projects such as inverter systems, intelligent RC vehicles, and biometric authentication solutions. I am also actively involved in humanitarian and community development initiatives.',
      'Alongside my B.Eng in Electrical and Electronics Engineering, I am pursuing a B.Sc. in Cybersecurity — bridging hardware depth with modern digital systems thinking.',
    ],
    highlights: [
      { label: 'Focus', value: 'Power · Embedded · Installations' },
      { label: 'Tools', value: 'Proteus · Arduino · Python · C' },
      { label: 'Also', value: 'Paychat co-founder · ITF-trained' },
    ],
  },

  // ─── Professional summary (short — used on home) ──────────────────────────
  summary:
    'Engineer in training with hands-on work in circuits, power electronics, embedded systems, and residential electrical installations — plus co-founding experience on a fintech product.',

  // ─── Featured project slugs (must match `projects[].slug` below) ───────────
  featuredProjectSlugs: ['inverter-system', 'intelligent-rc', 'paychat'],

  // ─── Projects — add images to public/images/projects/ ─────────────────────
  projects: [
    {
      slug: 'inverter-system',
      title: 'Inverter & Power Systems',
      status: 'completed', // completed | ongoing | research
      shortDescription:
        'Renewable-oriented power conversion — solar, battery storage, and inverter implementation.',
      description:
        'Hands-on development and testing of inverter-related power systems including solar integration, battery storage, and DC-DC conversion workflows.',
      tags: ['Power electronics', 'Solar', 'DC-DC', 'Prototyping'],
      image: '/images/projects/inverter.jpg', // optional — hides if missing
      links: { demo: '', github: '', writeup: '' },
      highlights: [
        'System assembly and testing',
        'Renewable energy integration',
        'Hardware troubleshooting',
      ],
    },
    {
      slug: 'intelligent-rc',
      title: 'Intelligent RC Vehicle',
      status: 'completed',
      shortDescription:
        'Microcontroller-driven RC platform with embedded control and sensor integration.',
      description:
        'Built an intelligent radio-controlled vehicle leveraging embedded systems principles, sensor integration, and system testing.',
      tags: ['Arduino', 'Embedded', 'Robotics', 'Sensors'],
      image: '/images/projects/rc-vehicle.jpg',
      links: { demo: '', github: '', writeup: '' },
      highlights: ['Embedded control', 'System integration', 'Field testing'],
    },
    {
      slug: 'biometric-auth',
      title: 'Biometric Authentication Solution',
      status: 'completed',
      shortDescription:
        'Hardware authentication using biometric and camera module integration.',
      description:
        'Developed a biometric authentication approach combining sensor modules and embedded logic for secure access use cases.',
      tags: ['Biometrics', 'Sensors', 'Embedded', 'Security'],
      image: '/images/projects/biometric.jpg',
      links: { demo: '', github: '', writeup: '' },
      highlights: ['Sensor integration', 'Prototype validation'],
    },
    {
      slug: 'paychat',
      title: 'Paychat',
      status: 'ongoing',
      shortDescription:
        'Fintech platform integrating payments and messaging — co-founded and in active development.',
      description:
        'Co-developing a financial communication platform that combines payments and messaging. Involved in product design, system planning, feature development, and architecture discussions with the team.',
      tags: ['Fintech', 'Product', 'System design'],
      image: '/images/projects/paychat.jpg',
      links: { demo: '', github: '', writeup: '' },
      highlights: ['Co-founder', 'Product & architecture', 'Team collaboration'],
    },
    {
      slug: 'energy-harvesting',
      title: 'Energy Harvesting from Earth’s EM Field',
      status: 'research',
      shortDescription:
        'Ongoing research on ambient energy extraction — concept development and feasibility analysis.',
      description:
        'Research into energy harvesting from the Earth’s electromagnetic field, including feasibility analysis and concept development for ambient energy extraction systems.',
      tags: ['Research', 'Energy', 'Feasibility'],
      image: '/images/projects/energy-research.jpg',
      links: { demo: '', github: '', writeup: '' },
      highlights: ['Concept development', 'Feasibility analysis'],
    },
  ],

  // ─── Work experience ──────────────────────────────────────────────────────
  experience: [
    {
      role: 'Site Engineer (Electrical Installation – Residential)',
      company: 'Freelance — Anarock City Hub Estate, Katampe, Abuja',
      period: 'Dec 2025 – Mar 2026',
      bullets: [
        'Supervised and coordinated electrical piping and wiring for multiple residential buildings.',
        'Oversaw conduit systems, cable routing, lighting circuits, and socket outlet installations.',
      ],
    },
    {
      role: 'Engineering Intern (Electronics & Technical Training)',
      company: 'Industrial Training Fund — Model Skills Training Centre, Abuja',
      period: 'May 2024 – Nov 2024',
      bullets: [
        'Worked with electronic components, circuits, and system testing.',
        'Hands-on training in embedded systems and electronic device applications.',
        'Taught participants fundamentals of robotics, electronics, and embedded systems.',
      ],
    },
    {
      role: 'Electrical Maintenance Intern',
      company: 'Industrial Training Fund Headquarters, Jos',
      period: '2023',
      bullets: [
        'Assisted troubleshooting electrical faults in office equipment and power lines.',
        'Supported routine electrical inspections and repairs with the facility team.',
      ],
    },
    {
      role: 'Co-Founder',
      company: 'Paychat (Fintech application)',
      period: 'Ongoing',
      bullets: [
        'Co-developing a financial communication platform integrating payments and messaging.',
        'Product design, system planning, and feature development.',
        'Collaborating on architecture and implementation strategy.',
      ],
    },
  ],

  // ─── Skills (grouped) ───────────────────────────────────────────────────────
  skills: [
    {
      category: 'Engineering & Technical',
      items: [
        'Circuit design and analysis',
        'Embedded systems (Arduino, Raspberry Pi)',
        'Power systems (solar, DC-DC conversion)',
        'Electronics prototyping and testing',
        'Sensor integration (biometric, camera modules)',
      ],
    },
    {
      category: 'Systems & Field',
      items: [
        'Hardware implementation and troubleshooting',
        'System integration (hardware + software)',
        'Technical documentation and reporting',
        'House wiring & conduit installation',
      ],
    },
    {
      category: 'Data & Tools',
      items: [
        'Basic data analysis and reporting',
        'System monitoring and testing',
        'Microsoft Word & PowerPoint',
        'Proteus (circuit simulation)',
        'Python & C programming',
      ],
    },
    {
      category: 'Project & Team',
      items: [
        'Team collaboration',
        'Problem-solving and critical thinking',
        'Project planning and execution',
        'Morse code communication',
      ],
    },
  ],

  // ─── Education ──────────────────────────────────────────────────────────────
  education: [
    {
      degree: 'B.Eng — Electrical and Electronics Engineering',
      school: 'Abubakar Tafawa Balewa University, Bauchi',
      period: '2018 – 2025',
    },
    {
      degree: 'B.Sc. — Cybersecurity',
      school: 'Miva Open University, Abuja',
      period: '2026 – Ongoing',
    },
    {
      degree: 'Secondary education',
      school: 'Ulul-Albab Science Secondary School, Katsina · ITF Staff School, Jos',
      period: '2013 – 2018',
    },
    {
      degree: 'Primary education',
      school: 'Plateau Tenderfoot Private School, Jos',
      period: '2003 – 2012',
    },
  ],

  // ─── Certifications ─────────────────────────────────────────────────────────
  certifications: [
    'Electronics Circuit Design and Microcontroller Technology Skills Training — ITF',
    'Domestic Electrical Wiring and Installation — ITF',
    'Child Rights Toolkit: Integrating Child Rights in International Partnerships — UNICEF',
    'A Toolkit to Improve Community Engagement in Emergencies — UNICEF',
  ],

  // ─── Practical / field experience (bullet list) ─────────────────────────────
  practicalExperience: [
    'Electronics prototyping and testing',
    'Circuit assembly (breadboard & PCB methods)',
    'Renewable energy setup (solar + battery + inverter)',
    'Hardware troubleshooting and maintenance',
    'House wiring & conduit installation projects',
    'Humanitarian and community development initiatives',
  ],

  // ─── Contact page extras ────────────────────────────────────────────────────
  contact: {
    headline: 'Let’s build something useful.',
    subtext:
      'Open to engineering opportunities, collaborations, and conversations about power, embedded systems, or product work.',
    // Optional: Formspree or similar — paste your form endpoint when ready
    formEndpoint: '',
  },

  // ─── Navigation (paths must match routes in App.jsx) ────────────────────────
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ],
}

/** Helper: get project by slug */
export function getProjectBySlug(slug) {
  return siteContent.projects.find((p) => p.slug === slug)
}

/** Helper: featured projects for home page */
export function getFeaturedProjects() {
  return siteContent.featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean)
}
