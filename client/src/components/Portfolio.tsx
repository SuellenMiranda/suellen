/*
 * Projetos em destaque — evidências públicas
 */
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

const impactProject = {
  title: "Liga Feminina de TI",
  role: "Site institucional · Voluntária",
  desc: "Ajudo no site da organização: páginas, conteúdo e melhorias para a Liga se comunicar melhor com a comunidade.",
  href: site.social.ligaFemininaTi,
  tag: "Impacto",
};

const projects = [
  {
    title: "JobMatch",
    role: "App de recrutamento · TCC",
    desc: "Aplicativo para conectar candidatos e empresas, com cadastro, conversa e gestão de perfis.",
    href: "https://www.canva.com/design/DAGIgROScjU/pI_dgAkL-cm6MNA-eXIisA/view",
    tag: "Acadêmico",
  },
  {
    title: "Portfólio técnico",
    role: "Site pessoal",
    desc: "Página com meus projetos e trajetória profissional — fácil de navegar no celular ou no computador.",
    href: site.social.portfolio,
    tag: "Pessoal",
  },
];

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    role: string;
    desc: string;
    href: string;
    tag: string;
  };
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-50 transition-all duration-300 h-full"
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
  );
}

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

        <div className={`stagger-children space-y-6 ${isVisible ? "visible" : ""}`}>
          <div className="max-w-xl mx-auto">
            <ProjectCard project={impactProject} />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
