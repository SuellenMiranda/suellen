/*
 * Footer — dados legais PJ + redes
 */
import { Github, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { site } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400">
      <div className="border-b border-slate-800 dark:border-slate-900">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-white text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.footer.ctaTitle}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{t.footer.ctaSubtitle}</p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm shrink-0"
          >
            {t.footer.ctaButton}
          </a>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={site.assets.logo} alt={site.brand} className="h-9 w-9 rounded-md" />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Suellen<span className="text-blue-400">Dev</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.infoTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>{site.legalName}</li>
              <li>{t.site.role}</li>
              <li>{t.site.contractingFooter}</li>
              <li>CNPJ: {site.cnpj}</li>
              <li>{t.site.location}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.socialTitle}
            </h4>
            <div className="flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-600 flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {site.legalName} · {site.brand}. {t.footer.rights}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
            aria-label={t.footer.backToTop}
          >
            <ArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
