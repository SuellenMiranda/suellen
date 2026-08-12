import { Globe, Moon, Sun } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/types";
import { useTheme } from "@/contexts/ThemeContext";

const localeOrder: Locale[] = ["pt-BR", "pt-PT", "en"];

export default function SiteControls({ compact = false }: { compact?: boolean }) {
  const { locale, t, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${compact ? "" : "ml-2"}`}>
      <label className="sr-only" htmlFor="site-locale">
        {t.controls.language}
      </label>
      <div className="relative">
        <Globe
          size={14}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          aria-hidden
        />
        <select
          id="site-locale"
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className="h-9 appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-8 pr-7 text-xs font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {localeOrder.map((code) => (
            <option key={code} value={code}>
              {t.controls.locales[code]}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
        aria-label={theme === "dark" ? t.controls.themeLight : t.controls.themeDark}
        title={theme === "dark" ? t.controls.themeLight : t.controls.themeDark}
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
}
