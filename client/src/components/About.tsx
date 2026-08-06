/*
 * Sobre Section — perfil público Suellen Miranda Amorim
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
            Oi! Eu sou a{" "}
            <strong className="text-slate-800">{site.legalName}</strong>, {site.role.toLowerCase()}{" "}
            e responsável pela <strong className="text-slate-800">SuellenDev</strong>.{" "}
            {site.education}. Atuo em {site.location.split(" · ")[0]} construindo aplicações web e
            mobile, APIs REST e integrações — inclusive no ecossistema SAP (ABAP e Fiori).
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Já passei por consultoria SAP (Megawork), desenvolvimento web e cloud (PVT Software),
            saúde digital (Jade Autism) e VR para treinamentos industriais (Vale/UVV). Atendo como{" "}
            <strong className="text-slate-800">PJ</strong> (nota fiscal) ou como{" "}
            <strong className="text-slate-800">PF / autônoma</strong> (RPA) — o que fizer mais
            sentido para a sua empresa. Conduzo projetos de ponta a ponta — do levantamento de
            requisitos à implantação — com projetos como a plataforma{" "}
            <a
              href={site.social.ligav}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              ligav.com.br
            </a>
            .
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Cada projeto é acompanhado diretamente por mim. Sem intermediários: você fala com quem
            entende o negócio e escreve o código. Stack principal:{" "}
            {site.stackHighlight.join(" · ")}.
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
              desc: "Boas práticas, arquitetura organizada e mentalidade de desenvolvimento seguro — sem atalhos que cobram depois.",
            },
            {
              icon: Heart,
              title: "Atendimento humano",
              desc: "Comunicação direta e transparente. Você acompanha cada etapa e decide junto o que priorizar.",
            },
            {
              icon: Lightbulb,
              title: "Soluções sob medida",
              desc: "Nada de template genérico. Cada entrega é pensada para o fluxo real do seu negócio.",
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
