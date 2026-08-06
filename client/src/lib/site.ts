/** Dados públicos e de contato da SuellenDev (PJ) */

const BASE = import.meta.env.BASE_URL;

export const site = {
  brand: "SuellenDev",
  legalName: "Suellen Miranda Amorim",
  shortName: "Suellen Miranda",
  role: "Desenvolvedora Full Stack",
  tagline: "Desenvolvimento de Software",
  location: "Vila Velha, ES · Brasil",
  cnpj: "67.894.209/0001-17",
  email: "suellen.org@gmail.com",
  whatsappE164: "5527988479887",
  whatsappDisplay: "(27) 98847-9887",
  social: {
    instagram: "https://instagram.com/suellenmiranda.dev",
    linkedin: "https://linkedin.com/in/suellenmiranda",
    github: "https://github.com/SuellenMiranda",
    portfolio: "https://suellenmiranda.github.io/Portifolio/",
    ligav: "https://ligav.com.br",
  },
  assets: {
    logo: `${BASE}logo.svg`,
    photo: `${BASE}suellen-foto.jpg`,
  },
  education: "Bacharel em Ciência da Computação — Universidade Vila Velha (UVV)",
  stackHighlight: ["React", "TypeScript", "Node.js", "APIs REST", "SAP ABAP/Fiori"],
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Olá, Suellen! Vi o site da SuellenDev e gostaria de conversar sobre um projeto.";
