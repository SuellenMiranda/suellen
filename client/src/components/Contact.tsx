/*
 * Contato — WhatsApp real + redes públicas
 */
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Mail,
  Github,
  Send,
} from "lucide-react";
import { defaultWhatsappMessage, site, whatsappUrl } from "@/lib/site";

const socialLinks = [
  {
    icon: MessageCircle,
    label: `WhatsApp · ${site.whatsappDisplay}`,
    href: whatsappUrl(defaultWhatsappMessage),
    color: "hover:bg-green-50 hover:border-green-200 hover:text-green-600",
    iconColor: "text-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
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
  {
    icon: Mail,
    label: site.email,
    href: `mailto:${site.email}`,
    color: "hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600",
    iconColor: "text-amber-600",
  },
];

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Olá, Suellen! Vim pelo site da SuellenDev.",
      "",
      `Nome: ${nome}`,
      empresa ? `Empresa: ${empresa}` : null,
      `Telefone: ${telefone}`,
      `E-mail: ${email}`,
      "",
      mensagem,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="py-16 lg:py-32 bg-slate-50">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-12`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Contato
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Vamos conversar?
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Me chama no WhatsApp ou preencha o formulário — a mensagem abre direto no chat.
            Respondo em até 24 horas úteis.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-2`}>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Me encontre em:</h3>
            <div className="flex flex-col gap-3">
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
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-3`}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-slate-100 p-6 lg:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="nome" className="text-sm font-medium text-slate-700">
                    Nome *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="empresa" className="text-sm font-medium text-slate-700">
                    Empresa
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    placeholder="Nome da empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="telefone" className="text-sm font-medium text-slate-700">
                    Telefone *
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="mensagem" className="text-sm font-medium text-slate-700">
                  Mensagem *
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte o que você precisa..."
                  rows={4}
                  required
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="border-slate-200 focus:border-blue-400 focus:ring-blue-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
              >
                <Send size={16} className="mr-2" />
                Enviar pelo WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
