export type Locale = "pt-BR" | "pt-PT" | "en";

export type Messages = {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    projects: string;
    howItWorks: string;
    differentials: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
  };
  site: {
    role: string;
    tagline: string;
    location: string;
    education: string;
    stackHighlight: string[];
    contracting: { pj: string; pf: string; pjShort: string; pfShort: string };
    contractingFooter: string;
  };
  hero: {
    taglineSuffix: string;
    title1: string;
    title2: string;
    intro: string;
    ctaQuote: string;
    ctaEmail: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    ligaLink: string;
    p3: string;
    cards: { title: string; desc: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string; featured?: boolean }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    impact: { title: string; role: string; desc: string; tag: string };
    items: { title: string; role: string; desc: string; tag: string }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    steps: { title: string; desc: string }[];
  };
  differentials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  forWhom: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { label: string; desc: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    ctaText: string;
    ctaButton: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    introSuffix: string;
    findMe: string;
    sidebarNote: string;
    successTitle: string;
    successText: string;
    fillAnother: string;
    steps: [string, string, string];
    labels: {
      name: string;
      company: string;
      phone: string;
      email: string;
      projectType: string;
      description: string;
      timeline: string;
      budget: string;
      contract: string;
      extras: string;
    };
    placeholders: {
      name: string;
      company: string;
      phone: string;
      email: string;
      description: string;
      extras: string;
    };
    minChars: string;
    consent: string;
    contractOptions: {
      pj: { title: string; desc: string };
      pf: { title: string; desc: string };
    };
    summary: { project: string; timeline: string; budget: string; dash: string };
    errorFallback: string;
    errorEmail: string;
    back: string;
    continue: string;
    submitting: string;
    submit: string;
    projectTypes: string[];
    timelines: string[];
    budgets: string[];
    email: {
      subject: string;
      header: string;
      contactSection: string;
      name: string;
      company: string;
      phone: string;
      requesterEmail: string;
      projectSection: string;
      type: string;
      desiredTimeline: string;
      investment: string;
      description: string;
      contractSection: string;
      modality: string;
      observations: string;
      consentSection: string;
      consentText: string;
      footer: string;
    };
    sendError: string;
  };
  footer: {
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    description: string;
    infoTitle: string;
    socialTitle: string;
    rights: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    heading: string;
    line1: string;
    line2: string;
    home: string;
  };
  controls: {
    language: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    locales: Record<Locale, string>;
  };
};
