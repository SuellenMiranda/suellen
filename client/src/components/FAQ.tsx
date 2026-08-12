/*
 * FAQ Section — Executive Minimalism
 * Accordion with clean borders
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

export default function FAQ() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  return (
    <section id="faq" className={`py-24 lg:py-32 ${section.light}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-12`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.faq.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.faq.title}
          </h2>
          <p className={`text-lg leading-relaxed ${text.body}`}>{t.faq.subtitle}</p>
        </div>

        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto`}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {t.faq.items.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className={`rounded-xl px-6 border ${section.muted} border-slate-100 dark:border-slate-800`}
              >
                <AccordionTrigger
                  className={`text-left font-semibold text-base py-4 hover:text-blue-600 dark:hover:text-blue-400 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400 ${text.heading}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`text-sm leading-relaxed pb-5 ${text.body}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
