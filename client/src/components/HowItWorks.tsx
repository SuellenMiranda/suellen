/*
 * Como Funciona Section — Executive Minimalism v2
 * Horizontal timeline layout, editorial feel
 */
import { useReveal } from "@/hooks/useReveal";
import { MessageSquare, ClipboardList, Code2, Rocket } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

const stepIcons = [MessageSquare, ClipboardList, Code2, Rocket];
const stepNums = ["01", "02", "03", "04"];

export default function HowItWorks() {
  const { t } = useLocale();
  const { ref, isVisible } = useReveal();

  const steps = t.howItWorks.steps.map((step, index) => ({
    ...step,
    icon: stepIcons[index],
    num: stepNums[index],
  }));

  return (
    <section id="como-funciona" className={`py-24 lg:py-32 ${section.light}`}>
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-16`}>
          <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-4`}>
            {t.howItWorks.eyebrow}
          </p>
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.howItWorks.title}
          </h2>
          <p className={`text-lg leading-relaxed ${text.body}`}>{t.howItWorks.subtitle}</p>
        </div>

        <div className={`hidden lg:block stagger-children ${isVisible ? "visible" : ""}`}>
          <div className="relative flex items-start justify-between max-w-5xl mx-auto">
            <div className="absolute top-7 left-16 right-16 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="absolute top-7 left-16 w-[calc(100%-8rem)] h-px bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800" />

            {steps.map((step) => (
              <div key={step.num} className="relative flex-1 text-center px-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-600/20 relative z-10">
                  <step.icon className="text-white" size={22} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-blue-400 dark:text-blue-500 tracking-widest uppercase mb-2 block">
                  {t.howItWorks.stepLabel} {step.num}
                </span>
                <h3 className={`text-lg font-semibold mb-2 ${text.heading}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed max-w-[220px] mx-auto ${text.body}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`lg:hidden stagger-children space-y-6 max-w-md mx-auto ${isVisible ? "visible" : ""}`}>
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 bg-blue-600 rounded-full flex items-center justify-center shadow-md shadow-blue-600/20">
                <step.icon className="text-white" size={18} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 dark:text-blue-500 tracking-widest uppercase block mb-1">
                  {t.howItWorks.stepLabel} {step.num}
                </span>
                <h3 className={`text-base font-semibold mb-1 ${text.heading}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${text.body}`}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
