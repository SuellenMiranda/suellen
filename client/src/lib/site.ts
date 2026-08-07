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
  /**
   * FormSubmit: na 1ª vez o serviço pede ativação por e-mail.
   * Depois de ativar, mude needsActivation para false e publique de novo —
   * o aviso some do site.
   */
  formSubmit: {
    needsActivation: false,
    /** Cole aqui o link "Activate Form" do e-mail (opcional; também dá para colar no site). */
    activationUrl: "",
  },
} as const;

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
 * Serviço gratuito FormSubmit — destinatário: site.email
 */
export async function sendQuoteRequest(payload: QuoteRequestPayload): Promise<void> {
  const data = await postFormSubmit({
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    _replyto: payload.email,
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
  });

  const ok = data.success === true || data.success === "true";
  if (!ok) {
    throw new Error(
      data.message || "Não foi possível enviar o pré-orçamento. Tente de novo em instantes.",
    );
  }
}

/** Dispara o e-mail de ativação do FormSubmit (só precisa na 1ª configuração). */
export async function requestFormSubmitActivation(): Promise<string> {
  const data = await postFormSubmit({
    _subject: "Ativação do formulário SuellenDev (pode ignorar)",
    _captcha: "false",
    name: "SuellenDev — ativação",
    email: site.email,
    message:
      "Pedido de ativação do formulário de pré-orçamento. Abra o e-mail do FormSubmit e clique em Activate Form.",
  });

  if (data.success === true || data.success === "true") {
    return (
      data.message ||
      `Pedido enviado. Confira a caixa de entrada (e o spam) de ${site.email}.`
    );
  }
  throw new Error(
    data.message || "Não foi possível pedir a ativação. Tente de novo em instantes.",
  );
}

async function postFormSubmit(body: Record<string, string>) {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean | string;
    message?: string;
  };

  // FormSubmit devolve HTTP 200 mesmo em falha lógica (success: "false")
  if (!res.ok || data.success === false || data.success === "false") {
    throw new Error(
      data.message || "Falha na comunicação com o serviço de e-mail. Tente de novo.",
    );
  }

  return data;
}
