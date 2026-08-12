/*
 * Sobre Section — linguagem simples, para quem não é de TI
 */
import { useReveal } from "@/hooks/useReveal";
import { Code, Heart, Lightbulb } from "lucide-react";
import { site } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const cardIcons = [Code, Heart, Lightbulb];

export default function About() {
  const { t, locale } = useLocale();
  const { ref, isVisible } = useReveal();
  const stackLead =
    locale === "en" ? "I work with" : locale === "pt-PT" ? "Trabalho com" : "Trabalho com";
  const stackSuffix = ` ${stackLead} ${t.site.stackHighlight.join(", ")}.`;

  return (
    <section id="sobre" className={`py-24 lg:py-32 ${section.light}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-3xl mx-auto text-center`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.about.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-8 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.about.title}
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${text.bodyStrong}`}>{t.about.p1}</p>
          <p className={`text-lg leading-relaxed mb-6 ${text.bodyStrong}`}>
            {t.about.p2}{" "}
            <a
              href={site.social.ligaFemininaTi}
              target="_blank"
              rel="noopener noreferrer"
              className={`${text.accent} hover:underline font-medium`}
            >
              {t.about.ligaLink}
            </a>
            .
          </p>
          <p className={`text-lg leading-relaxed mb-12 ${text.bodyStrong}`}>
            {t.about.p3}
            {stackSuffix}
          </p>
        </div>

        <div
          className={`stagger-children grid md:grid-cols-3 gap-8 mt-8 ${
            isVisible ? "visible" : ""
          }`}
        >
          {t.about.cards.map((item, index) => {
            const Icon = cardIcons[index];
            return (
              <div
                key={item.title}
                className={`rounded-xl p-6 border transition-all duration-300 hover:shadow-md hover:shadow-blue-50 dark:hover:shadow-blue-950/20 ${section.card}`}
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className={text.accent} size={22} strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${text.heading}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${text.body}`}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
