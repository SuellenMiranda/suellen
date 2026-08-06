/** Dados públicos e de contato da SuellenDev */

const BASE = import.meta.env.BASE_URL;

export const site = {
  brand: "SuellenDev",
  legalName: "Suellen Miranda Amorim",
  shortName: "Suellen Miranda",
  role: "Desenvolvedora Full Stack",
  tagline: "Desenvolvimento de Software",
  location: "Vila Velha, ES · Brasil",
  cnpj: "67.894.209/0001-17",
  email: "suellen.dsredev@gmail.com",
  whatsappE164: "5527988479887",
  whatsappDisplay: "(27) 98847-9887",
  social: {
    instagram: "https://instagram.com/devnosbastidores",
    instagramHandle: "@devnosbastidores",
    linkedin: "https://linkedin.com/in/suellenmiranda",
    github: "https://github.com/SuellenMiranda",
    portfolio: "https://suellenmiranda.github.io/Portifolio/",
    ligaFemininaTi: "https://ligafemininadeti.com.br/",
  },
  assets: {
    logo: `${BASE}logo.svg`,
    photo: `${BASE}suellen-foto.jpg`,
  },
  education: "Formada em Ciência da Computação pela Universidade Vila Velha (UVV)",
  stackHighlight: ["sites e sistemas", "aplicativos", "automações", "sistemas empresariais"],
  /** PJ (nota fiscal) ou PF / autônoma (RPA) */
  contracting: {
    pj: "PJ — Pessoa Jurídica (nota fiscal / CNPJ)",
    pf: "PF — Pessoa Física / autônoma (RPA)",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const defaultWhatsappMessage =
  "Olá, Suellen! Vi o site da SuellenDev e gostaria de conversar sobre um projeto.";
