/*
 * Header — Executive Minimalism v2
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleContext";
import SiteControls from "@/components/SiteControls";
import { headerShell, text } from "@/lib/theme-classes";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#servicos", label: t.nav.services },
    { href: "#projetos", label: t.nav.projects },
    { href: "#como-funciona", label: t.nav.howItWorks },
    { href: "#diferenciais", label: t.nav.differentials },
    { href: "#faq", label: t.nav.faq },
    { href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${headerShell.base} ${scrolled ? headerShell.scrolled : headerShell.top}`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18 gap-3">
        <a href="#hero" className="flex items-center gap-2.5 shrink-0">
          <img src={site.assets.logo} alt={site.brand} className="h-8 w-8 rounded-md" />
          <span
            className={`font-bold text-lg tracking-tight ${text.heading}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Suellen<span className={text.accent}>Dev</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={headerShell.link}>
              {link.label}
            </a>
          ))}
          <SiteControls />
          <a href="#contato">
            <Button
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/15"
              size="sm"
            >
              {t.nav.cta}
            </Button>
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <SiteControls compact />
          <button
            className={`p-2 ${text.heading}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.menu}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={headerShell.mobile}>
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={headerShell.mobileLink}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setMobileOpen(false)} className="mt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold" size="sm">
                {t.nav.cta}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
