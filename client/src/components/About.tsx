/*
 * Sobre Section — Executive Minimalism
 * Clean, centered, with subtle illustration
 */
import { useReveal } from "@/hooks/useReveal";
import { Code, Heart, Lightbulb } from "lucide-react";

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-3xl mx-auto text-center`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Sobre
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Quem está por trás do código
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Oi! Eu sou a <strong className="text-slate-800">Suellen Miranda</strong>, desenvolvedora de
            software e fundadora desta empresa. Trabalho desenvolvendo soluções tecnológicas
            que fazem a diferença no dia a dia de empresas e empreendedores.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Cada projeto é acompanhado diretamente por mim — desde a conversa inicial até a
            entrega final. Sem intermediários, sem frustrações. Você fala direto com quem
            entende e resolve.
          </p>
        </div>

        <div
          className={`stagger-children grid md:grid-cols-3 gap-8 mt-8 ${
            isVisible ? "visible" : ""
          }`}
        >
          {[
            {
              icon: Code,
              title: "Código de qualidade",
              desc: "Cada projeto é desenvolvido com boas práticas, código limpo e documentação clara.",
            },
            {
              icon: Heart,
              title: "Atendimento humano",
              desc: "Comunicação direta e transparente. Você acompanha cada etapa do projeto.",
            },
            {
              icon: Lightbulb,
              title: "Soluções sob medida",
              desc: "Não uso templates prontos. Cada solução é pensada para o seu negócio.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-blue-600" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
