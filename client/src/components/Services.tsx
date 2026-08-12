/*
 * Serviços Section — Executive Minimalism v2
 * Grid with editorial variation, less repetitive card pattern
 */
import { useReveal } from "@/hooks/useReveal";
import {
  MonitorSmartphone,
  Smartphone,
  Globe,
  BarChart3,
  Cog,
  Link2,
  Plug,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const serviceIcons = [
  MonitorSmartphone,
  Smartphone,
  Globe,
  BarChart3,
  Cog,
  Link2,
  Plug,
  Lightbulb,
  Wrench,
];

export default function Services() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  return (
    <section id="servicos" className={`py-24 lg:py-32 ${section.muted}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} mb-14`}>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-28">
              <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
                {t.services.eyebrow}
              </p>
              <h2
                className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.services.title}
              </h2>
              <p className={`text-lg leading-relaxed ${text.body}`}>{t.services.subtitle}</p>
            </div>

            <div className={`stagger-children grid sm:grid-cols-2 gap-5 ${isVisible ? "visible" : ""}`}>
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div
                    key={service.title}
                    className={`rounded-xl p-5 border transition-all duration-300 group ${
                      service.featured
                        ? "bg-blue-600 border-blue-600 sm:col-span-2"
                        : `${section.cardSolid} hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md`
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                        service.featured
                          ? "bg-blue-500/30 group-hover:bg-blue-500/40"
                          : "bg-blue-50 dark:bg-blue-950/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/70"
                      }`}
                    >
                      <Icon
                        className={service.featured ? "text-blue-100" : text.accent}
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className={`text-base font-semibold mb-1.5 ${
                        service.featured ? "text-white" : text.heading
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        service.featured ? "text-blue-100" : text.body
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
