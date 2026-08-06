/*
 * Contato Section — Executive Minimalism
 * Form + social links, clean layout
 */
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Instagram, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20desenvolvimento.",
    color: "hover:bg-green-50 hover:border-green-200 hover:text-green-600",
    iconColor: "text-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/suellenmiranda.dev",
    color: "hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600",
    iconColor: "text-pink-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/suellenmiranda",
    color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:contato@suellendev.com",
    color: "hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600",
    iconColor: "text-amber-600",
  },
];

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
            Me envie uma mensagem ou preencha o formulário abaixo.
            Respondo em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Social Links */}
          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-2`}>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Me encontre em:
            </h3>
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
                  <span className="text-sm font-medium text-slate-700">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`reveal ${isVisible ? "visible" : ""} lg:col-span-3`}>
            {submitted ? (
              <div className="bg-white rounded-xl border border-blue-200 p-8 text-center">
                <CheckCircle2 className="text-blue-500 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-slate-500 text-sm">
                  Obrigada pelo contato. Respondo em até 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-100 p-6 lg:p-8 space-y-4">
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
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
                >
                  <Send size={16} className="mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
