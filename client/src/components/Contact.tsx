/*
 * Contato + Pré-orçamento (perguntas essenciais → envio por e-mail)
 */
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Instagram,
  Linkedin,
  Mail,
  Github,
  Send,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { sendQuoteRequest, site } from "@/lib/site";
import FormSubmitActivation from "@/components/FormSubmitActivation";

const socialLinks = [
  {
    icon: Mail,
    label: site.email,
    href: `mailto:${site.email}`,
    color: "hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600",
    iconColor: "text-amber-600",
  },
  {
    icon: Instagram,
    label: site.social.instagramHandle,
    href: site.social.instagram,
    color: "hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600",
    iconColor: "text-pink-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: site.social.linkedin,
    color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
    iconColor: "text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: site.social.github,
    color: "hover:bg-slate-100 hover:border-slate-300 hover:text-slate-800",
    iconColor: "text-slate-700",
  },
];

const projectTypes = [
  "Sistema personalizado",
  "Site / landing page",
  "Aplicativo (web ou mobile)",
  "Automação / integração",
  "API / backend",
  "Manutenção / melhoria",
  "Consultoria",
  "Outro",
] as const;

const timelines = [
  "O quanto antes (urgente)",
  "Até 1 mês",
  "1 a 3 meses",
  "Sem prazo definido",
] as const;

const budgets = [
  "Ainda não sei",
  "Até R$ 2.000",
  "R$ 2.000 a R$ 5.000",
  "R$ 5.000 a R$ 15.000",
  "Acima de R$ 15.000",
] as const;

const steps = ["Você", "Projeto", "Envio"] as const;

type FormState = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  tipoProjeto: string;
  descricao: string;
  prazo: string;
  orcamento: string;
  contratacao: "pj" | "pf" | "";
  detalhesExtras: string;
  aceitaVariacaoValor: boolean;
};

const emptyForm: FormState = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  tipoProjeto: "",
  descricao: "",
  prazo: "",
  orcamento: "",
  contratacao: "",
  detalhesExtras: "",
  aceitaVariacaoValor: false,
};

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-slate-700">
        {label}
        {required ? " *" : ""}
      </Label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`text-sm px-3 py-2 rounded-lg border transition-all duration-200 text-left ${
                selected
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set =
    <K extends keyof FormState>(key: K) =>
    (value: FormState[K]) =>
      setForm((prev) => ({ ...prev, [key]: value }));

  const canNextStep0 =
    form.nome.trim() && form.telefone.trim() && form.email.trim();
  const canNextStep1 =
    form.tipoProjeto &&
    form.descricao.trim().length >= 20 &&
    form.prazo &&
    form.orcamento &&
    form.aceitaVariacaoValor;
  const canSubmit = form.contratacao !== "" && !submitting;

  const buildEmailBody = () => {
    const contratoLabel =
      form.contratacao === "pj" ? site.contracting.pj : site.contracting.pf;
    return [
      "Pré-orçamento — SuellenDev",
      "",
      "— Contato —",
      `Nome: ${form.nome}`,
      form.empresa ? `Empresa: ${form.empresa}` : null,
      `Telefone para retorno: ${form.telefone}`,
      `E-mail do solicitante: ${form.email}`,
      "",
      "— Projeto —",
      `Tipo: ${form.tipoProjeto}`,
      `Prazo desejado: ${form.prazo}`,
      `Faixa de investimento: ${form.orcamento}`,
      "",
      "Descrição:",
      form.descricao,
      "",
      "— Contratação —",
      `Modalidade: ${contratoLabel}`,
      form.detalhesExtras ? `\nObservações:\n${form.detalhesExtras}` : null,
      "",
      "— Ciência —",
      "Cliente declarou: entende que, de acordo com o que pedir, o valor pode se alterar para mais ou para menos do valor estimado.",
      "",
      "—",
      "Enviado pelo formulário de pré-orçamento do site.",
    ]
      .filter((line) => line !== null)
      .join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || form.contratacao === "") return;

    setError(null);
    setSubmitting(true);

    const subject = `Pré-orçamento SuellenDev — ${form.tipoProjeto} (${form.nome})`;
    const contratoLabel =
      form.contratacao === "pj" ? site.contracting.pj : site.contracting.pf;

    try {
      await sendQuoteRequest({
        subject,
        nome: form.nome.trim(),
        empresa: form.empresa.trim() || undefined,
        telefone: form.telefone.trim(),
        email: form.email.trim(),
        tipoProjeto: form.tipoProjeto,
        descricao: form.descricao.trim(),
        prazo: form.prazo,
        orcamento: form.orcamento,
        contratacao: contratoLabel,
        detalhesExtras: form.detalhesExtras.trim() || undefined,
        message: buildEmailBody(),
      });
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar. Tente de novo ou escreva direto no e-mail.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 lg:py-32 bg-slate-50">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-12`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Orçamento
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Peça um pré-orçamento
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Prefere falar direto? Escreva para{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-slate-700 font-medium hover:text-blue-600 underline underline-offset-2"
            >
              {site.email}
            </a>
            . Ou preencha o pré-orçamento abaixo — em ambos os casos eu retorno, e se fizer sentido
            continuo pelo WhatsApp.
          </p>
        </div>

        <FormSubmitActivation />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-2`}>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Me encontre em:</h3>
            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-100 bg-white transition-all duration-300 ${link.color}`}
                >
                  <link.icon size={18} className={link.iconColor} strokeWidth={1.5} />
                  <span className="text-sm font-medium text-slate-700 break-all">{link.label}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Atendo como <strong className="text-slate-700">PJ</strong> (nota fiscal) ou como{" "}
              <strong className="text-slate-700">PF / autônoma</strong> (RPA), conforme o que
              funcionar melhor para você. O contato inicial é por e-mail ou pelo formulário — se
              precisar, eu retorno pelo WhatsApp.
            </p>
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-3`}>
            {sent ? (
              <div className="bg-white rounded-xl border border-blue-200 p-8 text-center">
                <CheckCircle2 className="text-blue-500 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Pré-orçamento enviado
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Recebi seu pedido. Em breve retorno pelo e-mail — e, se fizer sentido, também pelo
                  WhatsApp no telefone que você informou.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setError(null);
                    setStep(0);
                    setForm(emptyForm);
                  }}
                >
                  Preencher outro
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-slate-100 p-6 lg:p-8 space-y-6"
              >
                {/* Steps */}
                <div className="flex items-center gap-2">
                  {steps.map((label, i) => (
                    <div key={label} className="flex items-center gap-2 flex-1">
                      <div
                        className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                          i <= step ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:inline ${
                          i <= step ? "text-slate-800" : "text-slate-400"
                        }`}
                      >
                        {label}
                      </span>
                      {i < steps.length - 1 && (
                        <div
                          className={`h-px flex-1 ${i < step ? "bg-blue-300" : "bg-slate-100"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {step === 0 && (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="nome">Nome *</Label>
                        <Input
                          id="nome"
                          required
                          value={form.nome}
                          onChange={(e) => set("nome")(e.target.value)}
                          placeholder="Seu nome"
                          className="border-slate-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input
                          id="empresa"
                          value={form.empresa}
                          onChange={(e) => set("empresa")(e.target.value)}
                          placeholder="Opcional"
                          className="border-slate-200"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="telefone">Telefone (para retorno) *</Label>
                        <Input
                          id="telefone"
                          required
                          value={form.telefone}
                          onChange={(e) => set("telefone")(e.target.value)}
                          placeholder="(00) 00000-0000"
                          className="border-slate-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Seu e-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => set("email")(e.target.value)}
                          placeholder="seu@email.com"
                          className="border-slate-200"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <ChoiceGroup
                      label="Que tipo de projeto você precisa?"
                      options={projectTypes}
                      value={form.tipoProjeto}
                      onChange={set("tipoProjeto")}
                      required
                    />
                    <div className="space-y-1.5">
                      <Label htmlFor="descricao">
                        Descreva o problema ou o que precisa ser feito *
                      </Label>
                      <Textarea
                        id="descricao"
                        required
                        rows={4}
                        value={form.descricao}
                        onChange={(e) => set("descricao")(e.target.value)}
                        placeholder="Ex.: preciso de um sistema para controlar agenda e pagamentos dos clientes..."
                        className="border-slate-200 resize-none"
                      />
                      <p className="text-xs text-slate-400">Mínimo de cerca de 20 caracteres.</p>
                    </div>
                    <ChoiceGroup
                      label="Qual o prazo ideal?"
                      options={timelines}
                      value={form.prazo}
                      onChange={set("prazo")}
                      required
                    />
                    <ChoiceGroup
                      label="Faixa de investimento estimada"
                      options={budgets}
                      value={form.orcamento}
                      onChange={set("orcamento")}
                      required
                    />
                    <label className="flex items-start gap-3 cursor-pointer rounded-lg border border-slate-200 bg-slate-50 p-4 hover:border-blue-200 transition-colors">
                      <input
                        type="checkbox"
                        checked={form.aceitaVariacaoValor}
                        onChange={(e) => set("aceitaVariacaoValor")(e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span className="text-sm text-slate-600 leading-relaxed">
                        Eu entendo que, de acordo com o que eu pedir, o valor pode se alterar para
                        mais ou para menos do valor estimado. *
                      </span>
                    </label>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-700">
                        Como prefere contratar? *
                      </Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {(
                          [
                            {
                              id: "pj" as const,
                              title: "PJ",
                              desc: "Pessoa Jurídica — emissão de nota fiscal com CNPJ.",
                            },
                            {
                              id: "pf" as const,
                              title: "PF / Autônoma",
                              desc: "Pessoa Física — recibo (RPA) como profissional autônoma.",
                            },
                          ] as const
                        ).map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => set("contratacao")(opt.id)}
                            className={`text-left p-4 rounded-xl border transition-all ${
                              form.contratacao === opt.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300"
                            }`}
                          >
                            <p className="font-semibold text-slate-800 mb-1">{opt.title}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{opt.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="extras">Algo mais que eu precise saber?</Label>
                      <Textarea
                        id="extras"
                        rows={3}
                        value={form.detalhesExtras}
                        onChange={(e) => set("detalhesExtras")(e.target.value)}
                        placeholder="Referências, integrações, restrições, etc. (opcional)"
                        className="border-slate-200 resize-none"
                      />
                    </div>
                    <div className="rounded-lg bg-slate-50 border border-slate-100 p-4 text-sm text-slate-600 space-y-1">
                      <p>
                        <span className="font-medium text-slate-800">Projeto:</span>{" "}
                        {form.tipoProjeto || "—"}
                      </p>
                      <p>
                        <span className="font-medium text-slate-800">Prazo:</span>{" "}
                        {form.prazo || "—"}
                      </p>
                      <p>
                        <span className="font-medium text-slate-800">Investimento:</span>{" "}
                        {form.orcamento || "—"}
                      </p>
                    </div>
                    {error && (
                      <div
                        role="alert"
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      >
                        {error} Se preferir, escreva direto para{" "}
                        <a
                          href={`mailto:${site.email}`}
                          className="font-medium underline underline-offset-2"
                        >
                          {site.email}
                        </a>
                        .
                      </div>
                    )}
                  </div>
                )}
                <div className="flex gap-3 pt-2">
                  {step > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      <ArrowLeft size={16} className="mr-2" />
                      Voltar
                    </Button>
                  )}
                  {step < 2 ? (
                    <Button
                      type="button"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={step === 0 ? !canNextStep0 : !canNextStep1}
                      onClick={() => setStep((s) => s + 1)}
                    >
                      Continuar
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={!canSubmit}
                    >
                      <Send size={16} className="mr-2" />
                      {submitting ? "Enviando..." : "Enviar pré-orçamento"}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
