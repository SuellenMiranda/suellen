/*
 * Hero Section — Executive Minimalism v2
 * Light, premium feel with strong typography
 * Founder photo as refined brand asset
 */
import { ArrowRight, MessageCircle } from "lucide-react";
import { defaultWhatsappMessage, site, whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Atmosphere — soft mesh, no flat wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(37,99,235,0.07),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(15,23,42,0.04),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <img src={site.assets.logo} alt="SuellenDev" className="h-10 w-10 rounded-lg" />
              <span
                className="text-2xl font-bold tracking-tight text-slate-800"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Suellen<span className="text-blue-600">Dev</span>
              </span>
            </div>

            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-5">
              {site.tagline} · PJ ou PF · {site.location.split(" · ")[0]}
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Seu problema,{" "}
              <span className="text-blue-600">nossa solução.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Sou a <strong className="text-slate-700 font-semibold">{site.shortName}</strong>,{" "}
              {site.role.toLowerCase()}. Desenvolvo sistemas, apps e APIs sob medida — com
              atendimento direto, do briefing à entrega.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.97] text-sm"
              >
                Solicitar Orçamento
                <ArrowRight size={16} />
              </a>
              <a
                href={whatsappUrl(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-lg border border-slate-200 transition-all duration-200 active:scale-[0.97] text-sm"
              >
                <MessageCircle size={16} className="text-green-600" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-100/50 rounded-[2rem] -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl -z-10 blur-sm" />

              <img
                src={site.assets.photo}
                alt={`${site.shortName} — ${site.role}`}
                className="relative w-64 h-80 sm:w-72 sm:h-[380px] lg:w-80 lg:h-[440px] object-cover object-top rounded-2xl shadow-xl shadow-slate-200/50"
              />

              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <img src={site.assets.logo} alt="" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-tight">{site.shortName}</p>
                  <p className="text-xs text-slate-500 leading-tight">{site.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
