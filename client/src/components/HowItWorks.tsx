/*
 * Como Funciona Section — Executive Minimalism v2
 * Horizontal timeline layout, editorial feel
 */
import { useReveal } from "@/hooks/useReveal";
import { MessageSquare, ClipboardList, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Conversamos",
    desc: "Você me conta o que precisa e eu entendo seu cenário para propor a melhor abordagem.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Planejo",
    desc: "Desenho a solução ideal com escopo, prazo e orçamento definidos — sem surpresas.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Desenvolvo",
    desc: "Coloco a mão na massa e construo o projeto com qualidade, acompanhando cada detalhe.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Entrego e acompanho",
    desc: "Entrego o projeto pronto, com suporte e acompanhamento para garantir que tudo funcione.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-16`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Como funciona
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Do problema à solução em 4 passos
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Um processo simples e transparente, sem burocracia.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className={`hidden lg:block stagger-children ${isVisible ? "visible" : ""}`}>
          <div className="relative flex items-start justify-between max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-7 left-16 right-16 h-px bg-slate-200" />
            <div className="absolute top-7 left-16 w-[calc(100%-8rem)] h-px bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300" />

            {steps.map((step) => (
              <div key={step.num} className="relative flex-1 text-center px-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-600/20 relative z-10">
                  <step.icon className="text-white" size={22} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2 block">
                  Passo {step.num}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stacked */}
        <div className={`lg:hidden stagger-children space-y-6 max-w-md mx-auto ${isVisible ? "visible" : ""}`}>
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 bg-blue-600 rounded-full flex items-center justify-center shadow-md shadow-blue-600/20">
                <step.icon className="text-white" size={18} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block mb-1">
                  Passo {step.num}
                </span>
                <h3 className="text-base font-semibold text-slate-800 mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
