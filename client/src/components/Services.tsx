/*
 * Serviços Section — Executive Minimalism v2
 * Grid with editorial variation, less repetitive card pattern
 */
import { useReveal } from "@/hooks/useReveal";
import {
  MonitorSmartphone,
  Smartphone,
  Globe,
  BarChart3,
  Cog,
  Link2,
  Plug,
  Lightbulb,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Sistemas Personalizados",
    desc: "Um sistema feito do zero para o seu negócio. Gerencia processos, dados e rotinas — tudo no lugar certo.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Aplicativos",
    desc: "Apps para celular ou tablet que facilitam o dia a dia da sua equipe ou dos seus clientes.",
  },
  {
    icon: Globe,
    title: "Sites Profissionais",
    desc: "Sites bonitos, rápidos e otimizados para aparecer bem no Google e converter visitantes em clientes.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    desc: "Painéis visuais com gráficos e indicadores para você tomar decisões com base em dados reais.",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    desc: "Automatize tarefas repetitivas e ganhe tempo. Exemplos: enviar e-mails, gerar relatórios, atualizar planilhas.",
  },
  {
    icon: Link2,
    title: "Integrações entre Sistemas",
    desc: "Conecto sistemas que não se comunicam, fazendo seus dados fluírem entre plataformas automaticamente.",
  },
  {
    icon: Plug,
    title: "APIs",
    desc: "Criamos pontes de comunicação entre seus sistemas e serviços externos, como gateways de pagamento ou CRMs.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria em Tecnologia",
    desc: "Não sabe por onde começar? Eu te ajudo a escolher a melhor solução tecnológica para o seu momento.",
  },
  {
    icon: Wrench,
    title: "Manutenção de Sistemas",
    desc: "Já tem um sistema? Fazemos correções, melhorias e atualizações para manter tudo funcionando.",
  },
];

export default function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-slate-50">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} mb-14`}>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
            {/* Left column */}
            <div className="lg:sticky lg:top-28">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
                Serviços
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                O que posso desenvolver para você
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Soluções tecnológicas completas, pensadas para o seu negócio.
              </p>
            </div>

            {/* Right column - service grid */}
            <div className={`stagger-children grid sm:grid-cols-2 gap-5 ${isVisible ? "visible" : ""}`}>
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-xl p-5 border transition-all duration-300 group ${
                    service.featured
                      ? "bg-blue-600 border-blue-600 sm:col-span-2"
                      : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                      service.featured
                        ? "bg-blue-500/30 group-hover:bg-blue-500/40"
                        : "bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >
                    <service.icon
                      className={service.featured ? "text-blue-100" : "text-blue-600"}
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className={`text-base font-semibold mb-1.5 ${
                      service.featured ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      service.featured ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
