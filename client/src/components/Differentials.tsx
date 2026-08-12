/*
 * Diferenciais Section — Executive Minimalism v2
 * Editorial layout: numbered list with side-by-side text
 */
import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const nums = ["01", "02", "03", "04", "05", "06"];

export default function Differentials() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  return (
    <section id="diferenciais" className={`py-24 lg:py-32 ${section.muted}`}>
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          <div className={`reveal ${isVisible ? "visible" : ""} lg:sticky lg:top-28`}>
            <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
              {t.differentials.eyebrow}
            </p>
            <h2
              className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.differentials.title}
            </h2>
            <p className={`text-lg leading-relaxed ${text.body}`}>{t.differentials.subtitle}</p>
          </div>

          <div className={`stagger-children space-y-6 ${isVisible ? "visible" : ""}`}>
            {t.differentials.items.map((item, index) => (
              <div key={nums[index]} className="flex gap-5 items-start group">
                <span
                  className="text-2xl font-bold text-blue-200 dark:text-blue-900 group-hover:text-blue-400 dark:group-hover:text-blue-600 transition-colors duration-300 shrink-0 pt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {nums[index]}
                </span>
                <div className="border-b border-slate-100 dark:border-slate-800 pb-6 group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-colors duration-300 flex-1">
                  <h3 className={`text-base font-semibold mb-1.5 ${text.heading}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${text.body}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
