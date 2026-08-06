/*
 * Aviso temporário de ativação do FormSubmit.
 * Some quando site.formSubmit.needsActivation = false (após publicar)
 * ou quando você marca "Já ativei" neste navegador.
 */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Mail, CheckCircle2 } from "lucide-react";
import { requestFormSubmitActivation, site } from "@/lib/site";

const LS_URL = "suellendev_formsubmit_activation_url";
const LS_DONE = "suellendev_formsubmit_activated";

function isHttpUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

export default function FormSubmitActivation() {
  const [hidden, setHidden] = useState(true);
  const [linkDraft, setLinkDraft] = useState("");
  const [savedLink, setSavedLink] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!site.formSubmit.needsActivation) {
      setHidden(true);
      return;
    }
    const done = localStorage.getItem(LS_DONE) === "1";
    setHidden(done);
    const fromConfig = site.formSubmit.activationUrl.trim();
    const fromLs = localStorage.getItem(LS_URL)?.trim() || "";
    const initial = fromConfig || fromLs;
    if (initial) {
      setSavedLink(initial);
      setLinkDraft(initial);
    }
  }, []);

  if (!site.formSubmit.needsActivation || hidden) return null;

  const activeLink = savedLink && isHttpUrl(savedLink) ? savedLink : "";

  const saveLink = () => {
    const next = linkDraft.trim();
    if (!isHttpUrl(next)) {
      setError("Cole o link completo do e-mail (começa com https://).");
      return;
    }
    localStorage.setItem(LS_URL, next);
    setSavedLink(next);
    setError(null);
    setStatus("Link salvo neste navegador. Clique nele para ativar.");
  };

  const markActivated = () => {
    localStorage.setItem(LS_DONE, "1");
    setHidden(true);
  };

  const sendActivationEmail = async () => {
    setSending(true);
    setError(null);
    setStatus(null);
    try {
      const msg = await requestFormSubmitActivation();
      setStatus(
        `${msg} Abra o e-mail do FormSubmit em ${site.email}, copie o link “Activate Form” e cole abaixo.`,
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível pedir a ativação. Tente de novo.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-8">
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-5 text-left">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 mb-2">
          Configuração do formulário · só uma vez
        </p>
        <h3 className="text-base font-semibold text-slate-800 mb-2">
          Precisa ativar o envio de e-mail
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          O pré-orçamento usa o FormSubmit (gratuito). Na primeira vez, o serviço manda um link de
          ativação para <span className="font-medium text-slate-800">{site.email}</span>. Depois que
          você ativar, este aviso some.
        </p>

        <ol className="space-y-4 text-sm text-slate-700">
          <li className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span className="font-medium shrink-0">1. Pedir o e-mail</span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={sending}
              onClick={sendActivationEmail}
              className="bg-white border-amber-300 hover:bg-amber-100 w-fit"
            >
              <Mail size={14} className="mr-2" />
              {sending ? "Enviando..." : "Receber e-mail de ativação"}
            </Button>
          </li>

          <li className="space-y-2">
            <span className="font-medium">2. Colar o link do e-mail</span>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                value={linkDraft}
                onChange={(e) => setLinkDraft(e.target.value)}
                placeholder="https://formsubmit.co/confirm/..."
                className="bg-white border-amber-200"
              />
              <Button type="button" size="sm" onClick={saveLink} className="shrink-0">
                Mostrar no site
              </Button>
            </div>
          </li>

          {activeLink && (
            <li className="space-y-2">
              <span className="font-medium">3. Abrir o link de ativação</span>
              <a
                href={activeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 break-all"
              >
                <ExternalLink size={16} className="shrink-0" />
                Ativar formulário agora
              </a>
              <p className="text-xs text-slate-500 break-all">{activeLink}</p>
            </li>
          )}

          <li className="flex flex-col gap-2 sm:flex-row sm:items-center pt-1">
            <span className="font-medium shrink-0">
              {activeLink ? "4" : "3"}. Depois de ativar
            </span>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={markActivated}
              className="bg-white border-green-300 text-green-800 hover:bg-green-50 w-fit"
            >
              <CheckCircle2 size={14} className="mr-2" />
              Já ativei — ocultar este aviso
            </Button>
          </li>
        </ol>

        {status && (
          <p className="mt-4 text-sm text-slate-700 bg-white/70 border border-amber-100 rounded-lg px-3 py-2">
            {status}
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
