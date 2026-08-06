/*
 * Header — Executive Minimalism v2
 * Lighter background on hero, stronger brand presence
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/manus-storage/logo_bf458adf.png"
            alt="SuellenDev"
            className="h-8 w-8"
          />
          <span
            className="font-bold text-lg tracking-tight text-slate-800"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Suellen<span className="text-blue-600">Dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato">
            <Button
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/15"
              size="sm"
            >
              Solicitar Orçamento
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 font-medium py-2.5 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setMobileOpen(false)} className="mt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold" size="sm">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
