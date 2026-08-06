/*
 * Projetos em destaque — evidências públicas
 */
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

const projects = [
  {
    title: "Ligav",
    role: "Full Stack · Freelance",
    desc: "Plataforma web com arquitetura, implementação e evolução contínua sob responsabilidade integral — do levantamento de requisitos à publicação.",
    href: site.social.ligav,
    tag: "Cliente",
  },
  {
    title: "Liga Feminina de TI",
    role: "Desenvolvedora Web · Voluntária",
    desc: "Evolução do site institucional com foco em qualidade técnica, componentes reutilizáveis e presença digital da organização.",
    href: "https://www.linkedin.com/company/liga-feminina-de-ti",
    tag: "Impacto",
  },
  {
    title: "JobMatch",
    role: "TCC · Mobile Full Stack",
    desc: "App de recrutamento com React Native, API Node.js, Prisma e MySQL — match, chat e gestão de perfis.",
    href: "https://github.com/SuellenMiranda/Job-Match",
    tag: "Acadêmico",
  },
  {
    title: "Portfólio técnico",
    role: "GitHub Pages",
    desc: "Vitrine de projetos, competências e trajetória — React, Node, SAP e estudos em cibersegurança.",
    href: site.social.portfolio,
    tag: "Pessoal",
  },
];

export default function Portfolio() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-white">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mb-14`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Projetos
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Trabalho com resultados reais
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Alguns trabalhos públicos e entregas que representam minha atuação de ponta a ponta.
          </p>
        </div>

        <div
          className={`stagger-children grid sm:grid-cols-2 gap-6 ${isVisible ? "visible" : ""}`}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {project.tag}
                </span>
                <ExternalLink
                  size={16}
                  className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">{project.title}</h3>
              <p className="text-sm text-blue-600/80 font-medium mb-3">{project.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
