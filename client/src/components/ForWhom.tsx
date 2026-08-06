/*
 * Para Quem É Section — Executive Minimalism v2
 * Grid with larger icons, more editorial feel
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Building2,
  Stethoscope,
  Briefcase,
  Store,
  Rocket,
  UserCheck,
  RefreshCw,
} from "lucide-react";

const audiences = [
  { icon: Building2, label: "Empresas", desc: "Gestão, automação e sistemas internos" },
  { icon: Stethoscope, label: "Clínicas", desc: "Agendamento, prontuários e controle" },
  { icon: Briefcase, label: "Escritórios", desc: "Processos, documentos e produtividade" },
  { icon: Store, label: "Pequenos Negócios", desc: "Vendas, estoque e organização" },
  { icon: Rocket, label: "Startups", desc: "MVPs, plataformas e soluções escaláveis" },
  { icon: UserCheck, label: "Empreendedores", desc: "Automação e presença digital" },
  { icon: RefreshCw, label: "Digitalização", desc: "Quem quer modernizar seus processos" },
];

export default function ForWhom() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-14`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Para quem é
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Feito para quem quer evoluir
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Se o seu negócio precisa de tecnologia, este serviço é para você.
          </p>
        </div>

        <div
          className={`stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto`}
        >
          {audiences.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group bg-white"
            >
              <div className="w-11 h-11 shrink-0 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                <item.icon
                  className="text-blue-600"
                  size={20}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-800 block mb-0.5">
                  {item.label}
                </span>
                <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
