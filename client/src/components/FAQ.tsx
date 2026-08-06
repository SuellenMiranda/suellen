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
      "O valor depende do tipo de projeto, complexidade e prazo. Cada orçamento é feito sob medida após entendermos suas necessidades. Entre em contato para solicitar um orçamento sem compromisso.",
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo varia conforme o escopo. Um site simples pode ficar pronto em 2 a 4 semanas, enquanto um sistema completo pode levar de 1 a 3 meses. Durante a conversa inicial, definimos um cronograma realista.",
  },
  {
    question: "Vocês fazem manutenção de sistemas existentes?",
    answer:
      "Sim! Fazemos manutenção corretiva e evolutiva em sistemas que já existem. Podemos corrigir erros, adicionar funcionalidades ou melhorar o desempenho do seu sistema atual.",
  },
  {
    question: "Posso contratar apenas uma melhoria no meu sistema?",
    answer:
      "Claro! Você não precisa contratar um projeto inteiro. Se precisa de uma funcionalidade específica ou de uma melhoria pontual, podemos trabalhar apenas nisso.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é combinado conforme o projeto. Geralmente trabalhamos com um valor inicial para dar início ao projeto e parcelas conforme as etapas são concluídas. Tudo é formalizado e transparente.",
  },
  {
    question: "Vocês fornecem documentação do projeto?",
    answer:
      "Sim. Todos os projetos são entregues com documentação técnica clara, facilitando manutenções futuras e a continuidade do trabalho mesmo por outros profissionais.",
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
            As perguntas mais comuns sobre nossos serviços.
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
