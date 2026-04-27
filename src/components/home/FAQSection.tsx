import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O atendimento online funciona de verdade?",
    answer: "Sim! Pesquisas científicas demonstram que a terapia online é tão eficaz quanto a presencial para a maioria das demandas. O importante é ter um ambiente reservado, boa conexão com a internet e disposição para o processo terapêutico.",
  },
  {
    question: "Qual a duração de cada sessão?",
    answer: "Cada sessão tem duração de 50 minutos. Esse tempo é planejado para permitir um aprofundamento adequado das questões trabalhadas, respeitando seu ritmo e necessidades.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é um momento de acolhimento e conhecimento mútuo. Conversamos sobre suas demandas, expectativas e histórico relevante. Não existe pressão – é um espaço para você se sentir à vontade.",
  },
  {
    question: "O atendimento é sigiloso?",
    answer: "Sim, o sigilo profissional é garantido pelo Código de Ética do Psicólogo. Tudo o que é conversado em sessão permanece confidencial, exceto em situações previstas em lei que envolvam risco à vida.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Perguntas Comuns
          </h2>
          <p className="text-muted-foreground">
            Algumas respostas para ajudar você a se sentir mais seguro(a) sobre o processo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="mb-10">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-display text-lg font-medium hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta-outline" size="lg" asChild>
            <Link to="/faq">
              Ver todas as perguntas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
