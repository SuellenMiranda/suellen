import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ptBR } from "./messages/pt-BR";
import { ptPT } from "./messages/pt-PT";
import { en } from "./messages/en";
import type { Locale, Messages } from "./types";

const STORAGE_KEY = "suellendev-locale";

const messagesByLocale: Record<Locale, Messages> = {
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  en,
};

function detectLocale(): Locale {
  if (typeof window === "undefined") return "pt-BR";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt-BR" || stored === "pt-PT" || stored === "en") return stored;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("pt-pt") || lang === "pt") return "pt-PT";
  if (lang.startsWith("en")) return "en";
  return "pt-BR";
}

type LocaleContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);
  const t = messagesByLocale[locale];

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [t]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
