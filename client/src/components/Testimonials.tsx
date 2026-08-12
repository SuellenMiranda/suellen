/*
 * Credibilidade Section — Executive Minimalism
 * Instead of empty testimonials, show proof points and guarantees
 */
import { useReveal } from "@/hooks/useReveal";
import { Shield, Clock, FileCheck, HeadphonesIcon } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const proofIcons = [Shield, Clock, FileCheck, HeadphonesIcon];

export default function Testimonials() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  return (
    <section className={`py-20 lg:py-28 ${section.muted}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-14`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.testimonials.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.testimonials.title}
          </h2>
          <p className={`text-lg leading-relaxed ${text.body}`}>{t.testimonials.subtitle}</p>
        </div>

        <div className={`stagger-children grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto`}>
          {t.testimonials.items.map((item, index) => {
            const Icon = proofIcons[index];
            return (
              <div
                key={item.title}
                className={`rounded-xl p-6 border flex gap-4 items-start ${section.cardSolid}`}
              >
                <div className="w-11 h-11 shrink-0 bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-center">
                  <Icon className={text.accent} size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={`text-base font-semibold mb-1 ${text.heading}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${text.body}`}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`reveal ${isVisible ? "visible" : ""} text-center mt-14`}>
          <p className={`text-base mb-5 ${text.bodyStrong}`}>{t.testimonials.ctaText}</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.97] text-sm"
          >
            {t.testimonials.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
