/*
 * Para Quem É Section — Executive Minimalism v2
 * Grid with larger icons, more editorial feel
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Building2,
  Stethoscope,
  Briefcase,
  Store,
  Rocket,
  UserCheck,
  RefreshCw,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const audienceIcons = [
  Building2,
  Stethoscope,
  Briefcase,
  Store,
  Rocket,
  UserCheck,
  RefreshCw,
];

export default function ForWhom() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  return (
    <section className={`py-20 lg:py-28 ${section.light}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-14`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.forWhom.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.forWhom.title}
          </h2>
          <p className={`text-lg leading-relaxed ${text.body}`}>{t.forWhom.subtitle}</p>
        </div>

        <div className={`stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto`}>
          {t.forWhom.items.map((item, index) => {
            const Icon = audienceIcons[index];
            return (
              <div
                key={item.label}
                className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 group hover:shadow-md ${section.cardSolid} hover:border-blue-200 dark:hover:border-blue-800`}
              >
                <div className="w-11 h-11 shrink-0 bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-950/70 transition-colors duration-300">
                  <Icon className={text.accent} size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={`text-sm font-semibold block mb-0.5 ${text.heading}`}>
                    {item.label}
                  </span>
                  <span className={`text-xs leading-relaxed ${text.muted}`}>{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
