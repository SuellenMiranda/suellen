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
import { useLocale } from "@/i18n/LocaleContext";
import FormSubmitActivation from "@/components/FormSubmitActivation";
import { section, text } from "@/lib/theme-classes";

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
      <Label className={`text-sm font-medium ${text.bodyStrong}`}>
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
                  : `${section.cardSolid} ${text.bodyStrong} hover:border-blue-300 dark:hover:border-blue-700`
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
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: Mail,
      label: site.email,
      href: `mailto:${site.email}`,
      color: "hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:border-amber-200 dark:hover:border-amber-800 hover:text-amber-600",
      iconColor: "text-amber-600",
    },
    {
      icon: Instagram,
      label: site.social.instagramHandle,
      href: site.social.instagram,
      color: "hover:bg-pink-50 dark:hover:bg-pink-950/30 hover:border-pink-200 dark:hover:border-pink-800 hover:text-pink-600",
      iconColor: "text-pink-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: site.social.linkedin,
      color: "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-800 hover:text-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: site.social.github,
      color: "hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-800 dark:hover:text-slate-100",
      iconColor: "text-slate-700 dark:text-slate-300",
    },
  ];

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
    const e = t.contact.email;
    const contratoLabel =
      form.contratacao === "pj" ? t.site.contracting.pj : t.site.contracting.pf;
    return [
      e.header,
      "",
      e.contactSection,
      `${e.name}: ${form.nome}`,
      form.empresa ? `${e.company}: ${form.empresa}` : null,
      `${e.phone}: ${form.telefone}`,
      `${e.requesterEmail}: ${form.email}`,
      "",
      e.projectSection,
      `${e.type}: ${form.tipoProjeto}`,
      `${e.desiredTimeline}: ${form.prazo}`,
      `${e.investment}: ${form.orcamento}`,
      "",
      `${e.description}:`,
      form.descricao,
      "",
      e.contractSection,
      `${e.modality}: ${contratoLabel}`,
      form.detalhesExtras ? `\n${e.observations}:\n${form.detalhesExtras}` : null,
      "",
      e.consentSection,
      e.consentText,
      "",
      "—",
      e.footer,
    ]
      .filter((line) => line !== null)
      .join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || form.contratacao === "") return;

    setError(null);
    setSubmitting(true);

    const subject = t.contact.email.subject
      .replace("{type}", form.tipoProjeto)
      .replace("{name}", form.nome);
    const contratoLabel =
      form.contratacao === "pj" ? t.site.contracting.pj : t.site.contracting.pf;

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
        errorMessage: t.contact.sendError,
      });
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : t.contact.errorFallback,
      );
    } finally {
      setSubmitting(false);
    }
  };

  const contractOptions = [
    { id: "pj" as const, ...t.contact.contractOptions.pj },
    { id: "pf" as const, ...t.contact.contractOptions.pf },
  ];

  return (
    <section id="contato" className={`py-16 lg:py-32 ${section.muted}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-12`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.contact.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.contact.title}
          </h2>
          <p className={`text-lg leading-relaxed ${text.body}`}>
            {t.contact.intro}{" "}
            <a
              href={`mailto:${site.email}`}
              className={`${text.heading} font-medium hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2`}
            >
              {site.email}
            </a>
            {t.contact.introSuffix}
          </p>
        </div>

        <FormSubmitActivation />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-2`}>
            <h3 className={`text-lg font-semibold mb-4 ${text.heading}`}>{t.contact.findMe}</h3>
            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300 ${section.cardSolid} ${link.color}`}
                >
                  <link.icon size={18} className={link.iconColor} strokeWidth={1.5} />
                  <span className={`text-sm font-medium break-all ${text.bodyStrong}`}>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
            <p className={`text-sm leading-relaxed ${text.body}`}>{t.contact.sidebarNote}</p>
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-3`}>
            {sent ? (
              <div className={`rounded-xl border border-blue-200 dark:border-blue-800 p-8 text-center ${section.cardSolid}`}>
                <CheckCircle2 className="text-blue-500 mx-auto mb-4" size={40} />
                <h3 className={`text-lg font-semibold mb-2 ${text.heading}`}>
                  {t.contact.successTitle}
                </h3>
                <p className={`text-sm mb-6 ${text.body}`}>{t.contact.successText}</p>
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
                  {t.contact.fillAnother}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`rounded-xl border p-6 lg:p-8 space-y-6 ${section.cardSolid}`}
              >
                <div className="flex items-center gap-2">
                  {t.contact.steps.map((label, i) => (
                    <div key={label} className="flex items-center gap-2 flex-1">
                      <div
                        className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                          i <= step
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:inline ${
                          i <= step ? text.heading : text.muted
                        }`}
                      >
                        {label}
                      </span>
                      {i < t.contact.steps.length - 1 && (
                        <div
                          className={`h-px flex-1 ${i < step ? "bg-blue-300 dark:bg-blue-700" : "bg-slate-100 dark:bg-slate-800"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {step === 0 && (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="nome">{t.contact.labels.name} *</Label>
                        <Input
                          id="nome"
                          required
                          value={form.nome}
                          onChange={(e) => set("nome")(e.target.value)}
                          placeholder={t.contact.placeholders.name}
                          className={section.input}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="empresa">{t.contact.labels.company}</Label>
                        <Input
                          id="empresa"
                          value={form.empresa}
                          onChange={(e) => set("empresa")(e.target.value)}
                          placeholder={t.contact.placeholders.company}
                          className={section.input}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="telefone">{t.contact.labels.phone} *</Label>
                        <Input
                          id="telefone"
                          required
                          value={form.telefone}
                          onChange={(e) => set("telefone")(e.target.value)}
                          placeholder={t.contact.placeholders.phone}
                          className={section.input}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">{t.contact.labels.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => set("email")(e.target.value)}
                          placeholder={t.contact.placeholders.email}
                          className={section.input}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <ChoiceGroup
                      label={t.contact.labels.projectType}
                      options={t.contact.projectTypes}
                      value={form.tipoProjeto}
                      onChange={set("tipoProjeto")}
                      required
                    />
                    <div className="space-y-1.5">
                      <Label htmlFor="descricao">{t.contact.labels.description} *</Label>
                      <Textarea
                        id="descricao"
                        required
                        rows={4}
                        value={form.descricao}
                        onChange={(e) => set("descricao")(e.target.value)}
                        placeholder={t.contact.placeholders.description}
                        className={`${section.input} resize-none`}
                      />
                      <p className={`text-xs ${text.muted}`}>{t.contact.minChars}</p>
                    </div>
                    <ChoiceGroup
                      label={t.contact.labels.timeline}
                      options={t.contact.timelines}
                      value={form.prazo}
                      onChange={set("prazo")}
                      required
                    />
                    <ChoiceGroup
                      label={t.contact.labels.budget}
                      options={t.contact.budgets}
                      value={form.orcamento}
                      onChange={set("orcamento")}
                      required
                    />
                    <label className={`flex items-start gap-3 cursor-pointer rounded-lg border p-4 hover:border-blue-200 dark:hover:border-blue-800 transition-colors ${section.muted} border-slate-200 dark:border-slate-700`}>
                      <input
                        type="checkbox"
                        checked={form.aceitaVariacaoValor}
                        onChange={(e) => set("aceitaVariacaoValor")(e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span className={`text-sm leading-relaxed ${text.bodyStrong}`}>
                        {t.contact.consent} *
                      </span>
                    </label>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label className={`text-sm font-medium ${text.bodyStrong}`}>
                        {t.contact.labels.contract} *
                      </Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {contractOptions.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => set("contratacao")(opt.id)}
                            className={`text-left p-4 rounded-xl border transition-all ${
                              form.contratacao === opt.id
                                ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40"
                                : `${section.cardSolid} hover:border-blue-300 dark:hover:border-blue-700`
                            }`}
                          >
                            <p className={`font-semibold mb-1 ${text.heading}`}>{opt.title}</p>
                            <p className={`text-xs leading-relaxed ${text.body}`}>{opt.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="extras">{t.contact.labels.extras}</Label>
                      <Textarea
                        id="extras"
                        rows={3}
                        value={form.detalhesExtras}
                        onChange={(e) => set("detalhesExtras")(e.target.value)}
                        placeholder={t.contact.placeholders.extras}
                        className={`${section.input} resize-none`}
                      />
                    </div>
                    <div className={`rounded-lg border p-4 text-sm space-y-1 ${section.muted} ${text.bodyStrong}`}>
                      <p>
                        <span className={`font-medium ${text.heading}`}>
                          {t.contact.summary.project}:
                        </span>{" "}
                        {form.tipoProjeto || t.contact.summary.dash}
                      </p>
                      <p>
                        <span className={`font-medium ${text.heading}`}>
                          {t.contact.summary.timeline}:
                        </span>{" "}
                        {form.prazo || t.contact.summary.dash}
                      </p>
                      <p>
                        <span className={`font-medium ${text.heading}`}>
                          {t.contact.summary.budget}:
                        </span>{" "}
                        {form.orcamento || t.contact.summary.dash}
                      </p>
                    </div>
                    {error && (
                      <div
                        role="alert"
                        className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm text-red-700 dark:text-red-300"
                      >
                        {error} {t.contact.errorEmail}{" "}
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
                    <Button type="button" variant="outline" className="flex-1" onClick={() => setStep((s) => s - 1)}>
                      <ArrowLeft size={16} className="mr-2" />
                      {t.contact.back}
                    </Button>
                  )}
                  {step < 2 ? (
                    <Button
                      type="button"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={step === 0 ? !canNextStep0 : !canNextStep1}
                      onClick={() => setStep((s) => s + 1)}
                    >
                      {t.contact.continue}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={!canSubmit}
                    >
                      <Send size={16} className="mr-2" />
                      {submitting ? t.contact.submitting : t.contact.submit}
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
