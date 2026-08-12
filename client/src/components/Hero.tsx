/*
 * Hero Section — Executive Minimalism v2
 */
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

export default function Hero() {
  const { t, locale } = useLocale();
  const city = t.site.location.split(" · ")[0];
  const introLead =
    locale === "en"
      ? `I'm ${site.shortName}, ${t.site.role.toLowerCase()}. `
      : `Sou a ${site.shortName}, ${t.site.role.toLowerCase()}. `;

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${section.light}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(37,99,235,0.07),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(15,23,42,0.04),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_20%_20%,rgba(37,99,235,0.12),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(15,23,42,0.35),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-950/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 dark:bg-slate-900/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <img src={site.assets.logo} alt={site.brand} className="h-10 w-10 rounded-lg" />
              <span
                className={`text-2xl font-bold tracking-tight ${text.heading}`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Suellen<span className={text.accent}>Dev</span>
              </span>
            </div>

            <p className={`${text.accent} font-semibold text-sm tracking-wide uppercase mb-5`}>
              {t.site.tagline} · {t.hero.taglineSuffix} · {city}
            </p>

            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6 ${text.heading}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.hero.title1}{" "}
              <span className={text.accent}>{t.hero.title2}</span>
            </h1>

            <p className={`text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 ${text.body}`}>
              {introLead}
              {t.hero.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.97] text-sm"
              >
                {t.hero.ctaQuote}
                <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-lg border transition-all duration-200 active:scale-[0.97] text-sm ${section.cardSolid} ${text.heading} hover:bg-slate-50 dark:hover:bg-slate-800`}
              >
                <Mail size={16} className={text.accent} />
                {t.hero.ctaEmail}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-100/50 dark:bg-blue-950/30 rounded-[2rem] -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent dark:from-blue-900/20 rounded-2xl -z-10 blur-sm" />

              <img
                src={site.assets.photo}
                alt={`${site.shortName} — ${t.site.role}`}
                className="relative w-64 h-80 sm:w-72 sm:h-[380px] lg:w-80 lg:h-[440px] object-cover object-top rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/40"
              />

              <div className={`absolute -bottom-5 -left-5 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 ${section.cardSolid}`}>
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <img src={site.assets.logo} alt="" className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-sm font-bold leading-tight ${text.heading}`}>{site.shortName}</p>
                  <p className={`text-xs leading-tight ${text.body}`}>{t.site.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
