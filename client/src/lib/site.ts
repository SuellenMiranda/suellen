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

/** Payload do pré-orçamento enviado direto para o e-mail (FormSubmit, gratuito). */
export type QuoteRequestPayload = {
  subject: string;
  nome: string;
  empresa?: string;
  telefone: string;
  email: string;
  tipoProjeto: string;
  descricao: string;
  prazo: string;
  orcamento: string;
  contratacao: string;
  detalhesExtras?: string;
  message: string;
};

/**
 * Envia o pré-orçamento sem abrir o cliente de e-mail do visitante.
 * Serviço gratuito FormSubmit — na 1ª vez, confirme o e-mail em suellen.dsredev@gmail.com.
 */
export async function sendQuoteRequest(payload: QuoteRequestPayload): Promise<void> {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: payload.subject,
        _template: "table",
        _captcha: "false",
        _honey: "",
        name: payload.nome,
        email: payload.email,
        telefone: payload.telefone,
        empresa: payload.empresa?.trim() || "—",
        tipo_projeto: payload.tipoProjeto,
        prazo: payload.prazo,
        orcamento: payload.orcamento,
        contratacao: payload.contratacao,
        descricao: payload.descricao,
        observacoes: payload.detalhesExtras?.trim() || "—",
        message: payload.message,
      }),
    },
  );

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean | string;
    message?: string;
  };

  const ok = data.success === true || data.success === "true";
  if (!res.ok || !ok) {
    throw new Error(
      data.message || "Não foi possível enviar o pré-orçamento. Tente de novo em instantes.",
    );
  }
}

export const defaultWhatsappMessage =
  "Olá, Suellen! Vi o site da SuellenDev e gostaria de conversar sobre um projeto.";
