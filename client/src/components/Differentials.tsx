/*
 * Diferenciais Section — Executive Minimalism v2
 * Editorial layout: numbered list with side-by-side text
 * Breaks the repetitive card pattern
 */
import { useReveal } from "@/hooks/useReveal";

const differentials = [
  {
    num: "01",
    title: "Atendimento direto comigo",
    desc: "Sem intermediários. Você fala direto com a desenvolvedora que vai executar o projeto. Cada dúvida, cada decisão — comigo.",
  },
  {
    num: "02",
    title: "Projetos personalizados",
    desc: "Nada de templates genéricos. Cada solução é pensada exclusivamente para o seu negócio e suas necessidades.",
  },
  {
    num: "03",
    title: "Documentação completa",
    desc: "Todos os projetos são entregues com documentação clara e organizada para facilitar manutenções futuras.",
  },
  {
    num: "04",
    title: "Código organizado",
    desc: "Código limpo, estruturado e fácil de entender — mesmo para outros desenvolvedores que possam assumir o projeto.",
  },
  {
    num: "05",
    title: "Comunicação transparente",
    desc: "Você acompanha cada etapa. Sem mistério, sem surpresa. Tudo claro, alinhado e dentro do combinado.",
  },
  {
    num: "06",
    title: "Compromisso com qualidade",
    desc: "Entrego projetos testados, funcionais e prontos para uso. Qualidade não é opcional — é padrão.",
  },
];

export default function Differentials() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-slate-50">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left column - heading */}
          <div className={`reveal ${isVisible ? "visible" : ""} lg:sticky lg:top-28`}>
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
              Diferenciais
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Por que trabalhar comigo
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Atendimento PJ direto com a desenvolvedora — sem camada comercial no meio.
            </p>
          </div>

          {/* Right column - numbered list */}
          <div
            className={`stagger-children space-y-6 ${isVisible ? "visible" : ""}`}
          >
            {differentials.map((item) => (
              <div
                key={item.num}
                className="flex gap-5 items-start group"
              >
                <span
                  className="text-2xl font-bold text-blue-200 group-hover:text-blue-400 transition-colors duration-300 shrink-0 pt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.num}
                </span>
                <div className="border-b border-slate-100 pb-6 group-hover:border-blue-100 transition-colors duration-300 flex-1">
                  <h3 className="text-base font-semibold text-slate-800 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
