/*
 * Projetos em destaque — evidências públicas
 */
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const projectHrefs = [
  site.social.ligaFemininaTi,
  "https://www.canva.com/design/DAGIgROScjU/pI_dgAkL-cm6MNA-eXIisA/view",
  site.social.portfolio,
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
      className={`group block p-6 rounded-xl border transition-all duration-300 h-full hover:shadow-md hover:shadow-blue-50 dark:hover:shadow-blue-950/20 ${section.card}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`text-xs font-semibold uppercase tracking-wider ${text.accent}`}>
          {project.tag}
        </span>
        <ExternalLink
          size={16}
          className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0"
        />
      </div>
      <h3 className={`text-lg font-semibold mb-1 ${text.heading}`}>{project.title}</h3>
      <p className={`text-sm font-medium mb-3 ${text.accent} opacity-80`}>{project.role}</p>
      <p className={`text-sm leading-relaxed ${text.body}`}>{project.desc}</p>
    </a>
  );
}

export default function Portfolio() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  const impactProject = {
    ...t.portfolio.impact,
    href: projectHrefs[0],
  };

  const projects = t.portfolio.items.map((item, index) => ({
    ...item,
    href: projectHrefs[index + 1],
  }));

  return (
    <section id="projetos" className={`py-24 lg:py-32 ${section.light}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mb-14`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.portfolio.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.portfolio.title}
          </h2>
          <p className={`text-lg leading-relaxed ${text.body}`}>{t.portfolio.subtitle}</p>
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
