/*
 * Credibilidade Section — Executive Minimalism
 * Instead of empty testimonials, show proof points and guarantees
 */
import { useReveal } from "@/hooks/useReveal";
import { Shield, Clock, FileCheck, HeadphonesIcon } from "lucide-react";

const proofPoints = [
  {
    icon: Shield,
    title: "Projeto 100% seu",
    desc: "Todo o código e documentação são entregues ao cliente. Sem vínculo obrigatório para manutenções futuras.",
  },
  {
    icon: Clock,
    title: "Prazos definidos",
    desc: "Antes de começar, combinamos um cronograma claro com marcos de entrega e validação.",
  },
  {
    icon: FileCheck,
    title: "Código documentado",
    desc: "Entrego cada projeto com documentação técnica, facilitando a continuidade por qualquer profissional.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte pós-entrega",
    desc: "Após a entrega, ofereço suporte para ajustes e dúvidas — você não fica sozinho.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-14`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Compromisso
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            O que você pode esperar
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Princípios que guiam cada projeto que desenvolvo.
          </p>
        </div>

        <div
          className={`stagger-children grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto`}
        >
          {proofPoints.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-slate-100 flex gap-4 items-start"
            >
              <div className="w-11 h-11 shrink-0 bg-blue-50 rounded-lg flex items-center justify-center">
                <item.icon className="text-blue-600" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mt-14`}>
          <p className="text-slate-600 text-base mb-5">
            Quer saber como posso ajudar o seu negócio?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.97] text-sm"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
