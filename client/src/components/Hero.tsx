/*
 * Hero Section — Executive Minimalism v2
 * Light, premium feel with strong typography
 * Founder photo as refined brand asset
 */
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("/manus-storage/hero-bg_069a67a1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Blue accent gradient - top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16 lg:pt-28 lg:pb-20">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <img
                src="/manus-storage/logo_bf458adf.png"
                alt="SuellenDev"
                className="h-10 w-10"
              />
              <span
                className="text-2xl font-bold tracking-tight text-slate-800"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Suellen<span className="text-blue-600">Dev</span>
              </span>
            </div>

            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-5">
              Desenvolvimento de Software
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Seu problema,{" "}
              <span className="text-blue-600">nossa solução.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Desenvolvo sistemas, aplicativos e automações sob medida para o seu negócio.
              Sem complicação, sem enrolação — apenas tecnologia que funciona.
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
                href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20desenvolvimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-lg border border-slate-200 transition-all duration-200 active:scale-[0.97] text-sm"
              >
                <MessageCircle size={16} className="text-green-600" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Blue accent circle behind photo */}
              <div className="absolute -inset-6 bg-blue-100/50 rounded-[2rem] -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl -z-10 blur-sm" />

              <img
                src="/manus-storage/suellen-photo_9a1f0f7c.jpeg"
                alt="Suellen Miranda — Desenvolvedora de Software"
                className="relative w-64 h-80 sm:w-72 sm:h-[380px] lg:w-80 lg:h-[440px] object-cover rounded-2xl shadow-xl shadow-slate-200/50"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <img
                    src="/manus-storage/logo_bf458adf.png"
                    alt=""
                    className="w-5 h-5 brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-tight">Suellen Miranda</p>
                  <p className="text-xs text-slate-500 leading-tight">Desenvolvedora de Software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
