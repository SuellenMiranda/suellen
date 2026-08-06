/*
 * FAQ Section — Executive Minimalism
 * Accordion with clean borders
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "O valor depende do tipo de projeto, complexidade e prazo. Cada orçamento é feito sob medida. Use o pré-orçamento do site (e-mail) ou fale no WhatsApp — sem compromisso.",
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo varia conforme o escopo. Um site simples pode ficar pronto em 2 a 4 semanas; um sistema completo, de 1 a 3 meses. Na conversa inicial definimos um cronograma realista com marcos de entrega.",
  },
  {
    question: "Você faz manutenção de sistemas existentes?",
    answer:
      "Sim. Faço manutenção corretiva e evolutiva em sistemas já existentes: correções, novas funcionalidades e melhorias de desempenho.",
  },
  {
    question: "Posso contratar só uma melhoria pontual?",
    answer:
      "Claro. Você não precisa contratar um projeto inteiro. Se precisa de uma funcionalidade específica ou ajuste pontual, podemos trabalhar só nisso.",
  },
  {
    question: "Como funciona o pagamento — PJ ou PF?",
    answer:
      "Atendo nas duas modalidades: PJ (Pessoa Jurídica, com nota fiscal/CNPJ) ou PF (Pessoa Física / autônoma, com RPA). No pré-orçamento você indica a preferência; o pagamento em geral é entrada + parcelas por etapa entregue, tudo alinhado por escrito antes de começar.",
  },
  {
    question: "Como peço um orçamento?",
    answer:
      "Use o formulário de pré-orçamento no site: ele pergunta o essencial sobre o projeto e abre um e-mail pronto para enviar. Também respondo pelo WhatsApp ou Instagram @devnosbastidores.",
  },
  {
    question: "Você entrega documentação?",
    answer:
      "Sim. Os projetos saem com documentação técnica clara, facilitando manutenções futuras e a continuidade por outros profissionais, se precisar.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto text-center mb-12`}>
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Perguntas frequentes
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Tire suas dúvidas
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            As perguntas mais comuns sobre os serviços da SuellenDev.
          </p>
        </div>

        <div className={`reveal ${isVisible ? "visible" : ""} max-w-2xl mx-auto`}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-slate-50 rounded-xl px-6 border border-slate-100"
              >
                <AccordionTrigger className="text-left text-slate-800 font-semibold text-base hover:text-blue-600 data-[state=open]:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
