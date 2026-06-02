/** Cover letter text — replace bracketed text per job before printing. */

export const coverLetterPlaceholders = {
  company: '[Company Name]',
  role: '[Job Title]',
  why: '[Why this company — mission, sector, or projects]',
  address: '[Company Address — City, Country]',
  roleHint: '[Role type]',
}

export const coverLetters = {
  general: {
    label: 'General',
    roleHint: 'Job Title / Role Name',
    paragraphs: [
      'I am writing to apply for the position of [Job Title] at [Company Name]. I am an Engineer in Training with a B.Eng in Electrical and Electronics Engineering and hands-on experience across power electronics, embedded systems, residential electrical installations, and technical training. I am motivated by [Why this company], and I believe my background aligns strongly with your team\'s needs.',
      'In my recent role as Site Engineer on residential electrical installations at Anarock City Hub Estate, Abuja, I supervised conduit, cabling, lighting, and socket installations across multiple buildings. At the ITF Model Skills Training Centre, I strengthened my electronics and embedded systems skills and gained experience delivering technical instruction. These roles complement my project work, including inverter and solar–battery power systems, intelligent RC and biometric embedded prototypes, and ongoing energy-harvesting research.',
      'As co-founder of Paychat, a fintech platform integrating payments and messaging, I contribute to product design, system planning, and implementation strategy. I am also pursuing a B.Sc. in Cybersecurity. I bring strong problem-solving, clear documentation, and a commitment to professional and community impact.',
      'I would welcome the opportunity to discuss how I can contribute to [Company Name]\'s objectives. Thank you for considering my application. My resume is attached and I am available for an interview at your convenience.',
    ],
  },
  engineering: {
    label: 'Engineering',
    roleHint: 'Graduate Electrical Engineer / Site Engineer / Embedded Systems Intern',
    paragraphs: [
      'I am writing to apply for the position of [Job Title] at [Company Name]. I hold a B.Eng in Electrical and Electronics Engineering from Abubakar Tafawa Balewa University and bring proven field and laboratory experience in power electronics, embedded systems, circuit design, and residential electrical installations. I am drawn to [Company Name] because [Why this company], and I am confident I can contribute from day one with both technical skill and on-site discipline.',
      'As Site Engineer on residential electrical installations at Anarock City Hub Estate, Abuja, I supervised conduit, cable routing, lighting circuits, and socket outlets across multiple buildings. At the ITF Model Skills Training Centre, I strengthened electronics fundamentals, embedded systems practice, and training delivery in robotics and circuit work. At ITF Headquarters Jos, I assisted electrical maintenance, fault finding, and routine inspections.',
      'My project experience includes inverter and solar–battery power systems, intelligent RC platforms, and biometric authentication prototypes. I am proficient with Proteus, Arduino, Raspberry Pi, and hands-on prototyping. I am also conducting feasibility work on ambient energy harvesting concepts.',
      'I would welcome the opportunity to discuss how my engineering background can support [Company Name]\'s objectives. Thank you for your consideration; my resume is attached.',
    ],
  },
  fintech: {
    label: 'Fintech',
    roleHint: "Product Associate / Operations Analyst / Technical Founder's Associate",
    paragraphs: [
      'I am writing to apply for the position of [Job Title] at [Company Name]. I am an Engineer in Training and co-founder of Paychat, a fintech platform integrating digital payments with messaging. I bring product thinking, cross-functional planning, and structured feature development—supported by a B.Eng and ongoing B.Sc. in Cybersecurity. I am excited about [Company Name] because [Why this company], and I believe my blend of technical depth and startup execution fits your team well.',
      'At Paychat, I work with the founding team on product design, feature prioritization, system planning, and implementation strategy. My engineering background helps me contribute to feasible roadmaps, clear documentation, and risk-aware product decisions.',
      'I also bring Python and C, systems integration experience, and operational discipline from engineering and site work. Cybersecurity studies reinforce my focus on trust and secure workflows in financial technology.',
      'I would value the opportunity to discuss how I can support [Company Name]\'s product and business goals. Thank you for reviewing my application; my resume is attached.',
    ],
  },
}
