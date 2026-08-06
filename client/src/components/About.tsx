/*
 * Sobre Section — linguagem simples, para quem não é de TI
 */
import { useReveal } from "@/hooks/useReveal";
import { Code, Heart, Lightbulb } from "lucide-react";
import { site } from "@/lib/site";

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
            Oi! Eu sou a <strong className="text-slate-800">{site.legalName}</strong>, a pessoa
            por trás da <strong className="text-slate-800">SuellenDev</strong>. {site.education} e
            trabalho em {site.location.split(" · ")[0]} criando sites, sistemas e aplicativos para
            o dia a dia de empresas e empreendedores.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Já ajudei em projetos de empresas de tecnologia, saúde e indústria — sempre com o
            mesmo jeito de trabalhar: ouvir o problema com calma, traduzir isso em uma solução
            prática e acompanhar até ficar pronto. Também atuo como voluntária no site da{" "}
            <a
              href={site.social.ligaFemininaTi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Liga Feminina de TI
            </a>
            .
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Você fala direto comigo — sem intermediário e sem conversa enrolada. Posso emitir
            nota como <strong className="text-slate-800">empresa (PJ)</strong> ou atender como{" "}
            <strong className="text-slate-800">profissional autônoma (PF)</strong>, o que for
            mais simples para o seu caso. Trabalho com {site.stackHighlight.join(", ")}.
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
              title: "Feito com cuidado",
              desc: "Entrego um trabalho organizado, fácil de manter e pensado para durar — sem gambiarra.",
            },
            {
              icon: Heart,
              title: "Atendimento humano",
              desc: "Explico cada etapa em português claro. Você acompanha o andamento e decide junto.",
            },
            {
              icon: Lightbulb,
              title: "Sob medida para você",
              desc: "Nada de modelo genérico. A solução é montada para o jeito que o seu negócio funciona.",
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
