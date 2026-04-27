import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Sobre o Atendimento",
    questions: [
      {
        question: "O atendimento online funciona de verdade?",
        answer: "Sim! Pesquisas científicas demonstram que a terapia online é tão eficaz quanto a presencial para a maioria das demandas. O importante é ter um ambiente reservado onde você se sinta confortável para falar, uma boa conexão com a internet e disposição para se engajar no processo terapêutico.",
      },
      {
        question: "Qual a duração de cada sessão?",
        answer: "Cada sessão tem duração de 50 minutos. Esse tempo é planejado para permitir um aprofundamento adequado das questões trabalhadas, respeitando seu ritmo e necessidades. Em casos específicos, podemos combinar sessões mais longas.",
      },
      {
        question: "Com que frequência devo fazer terapia?",
        answer: "A frequência recomendada é semanal, especialmente no início do processo. Isso permite manter a continuidade do trabalho terapêutico e promover mudanças mais consistentes. Com o tempo, podemos avaliar juntos se há necessidade de ajustar a frequência.",
      },
      {
        question: "Quanto tempo dura um processo terapêutico?",
        answer: "Não existe uma resposta única, pois cada pessoa e cada demanda são diferentes. O tempo do processo depende dos seus objetivos, da complexidade das questões trabalhadas e do seu engajamento. Conversamos sobre isso ao longo do caminho, sem pressão.",
      },
    ],
  },
  {
    category: "Primeira Sessão",
    questions: [
      {
        question: "Como funciona a primeira sessão?",
        answer: "A primeira sessão é um momento de acolhimento e conhecimento mútuo. Conversamos sobre o que te trouxe até a terapia, suas expectativas e aspectos importantes da sua história. Não existe pressão para falar sobre tudo de uma vez – vamos no seu tempo.",
      },
      {
        question: "Preciso me preparar para a primeira sessão?",
        answer: "Não precisa se preparar de forma especial. Apenas venha como você está, com suas dúvidas e expectativas. Se quiser, pode anotar previamente algumas coisas que gostaria de falar, mas isso não é obrigatório.",
      },
      {
        question: "Preciso de encaminhamento médico para iniciar?",
        answer: "Não é necessário encaminhamento médico para iniciar a psicoterapia. Você pode buscar atendimento psicológico por conta própria. Porém, em alguns casos, a psicoterapia pode ser complementar a um tratamento médico.",
      },
    ],
  },
  {
    category: "Logística e Pagamento",
    questions: [
      {
        question: "Como funciona o agendamento?",
        answer: "O agendamento pode ser feito pelo WhatsApp ou formulário de contato. Conversamos sobre os horários disponíveis e escolhemos juntos o que melhor se adapta à sua rotina. Após o agendamento, você recebe uma confirmação com todas as informações necessárias.",
      },
      {
        question: "Atende por convênio?",
        answer: "Atualmente trabalho apenas com atendimento particular. Porém, alguns convênios oferecem reembolso para sessões de psicoterapia. Recomendo verificar diretamente com seu plano de saúde sobre essa possibilidade.",
      },
      {
        question: "Qual a política de cancelamento?",
        answer: "Peço que cancelamentos ou remarcações sejam comunicados com pelo menos 24 horas de antecedência. Isso permite reorganizar a agenda e oferecer o horário para outra pessoa que possa precisar. Cancelamentos em cima da hora podem ser cobrados.",
      },
      {
        question: "Quais as formas de pagamento?",
        answer: "Aceito pagamento via PIX, transferência bancária ou dinheiro (para atendimento presencial). O pagamento é realizado antes ou imediatamente após a sessão, conforme combinado.",
      },
    ],
  },
  {
    category: "Público e Abordagem",
    questions: [
      {
        question: "Atende crianças?",
        answer: "Atualmente atendo apenas adolescentes (a partir de 12 anos) e adultos. Para crianças menores, recomendo buscar um profissional especializado em psicologia infantil.",
      },
      {
        question: "Como funciona o atendimento para adolescentes?",
        answer: "O atendimento a adolescentes segue os mesmos princípios de acolhimento e sigilo. É comum que pais ou responsáveis participem de uma sessão inicial para entender o processo. O sigilo com o adolescente é mantido, sendo compartilhadas com os responsáveis apenas informações que envolvam risco.",
      },
      {
        question: "O que é Análise do Comportamento?",
        answer: "A Análise do Comportamento é uma ciência que estuda como nossos comportamentos se desenvolvem e se modificam ao longo do tempo, considerando a relação entre a pessoa e seu ambiente. É uma abordagem baseada em evidências científicas, focada em promover mudanças práticas e significativas na vida.",
      },
    ],
  },
  {
    category: "Sigilo e Ética",
    questions: [
      {
        question: "O atendimento é sigiloso?",
        answer: "Sim, o sigilo profissional é garantido pelo Código de Ética do Psicólogo. Tudo o que é conversado em sessão permanece confidencial. Existem exceções previstas em lei, como situações que envolvam risco à vida do paciente ou de terceiros, que são discutidas previamente.",
      },
      {
        question: "Posso indicar meu psicólogo para conhecidos?",
        answer: "Você pode indicar, mas mantenho sigilo absoluto sobre quem são meus pacientes. Portanto, não confirmarei se atendo ou não determinada pessoa, mesmo que ela mencione ter sido indicada por você. Isso faz parte da ética profissional.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <Helmet>
        <title>Perguntas Frequentes | Kamila King Pinheiro - Psicóloga</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre psicoterapia, atendimento online, primeira sessão, valores e muito mais. FAQ completo sobre o atendimento psicológico."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-orange-light/30 to-background">
        <div className="container max-w-3xl text-center">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            FAQ
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground">
            Reunimos aqui as dúvidas mais comuns sobre o processo terapêutico. 
            Se sua pergunta não estiver aqui, entre em contato.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible>
                  {section.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${section.category}-${index}`}>
                      <AccordionTrigger className="text-left font-medium hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato que terei prazer em esclarecer qualquer questão 
            sobre o processo terapêutico.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a
              href="https://wa.me/5527999872710?text=Olá! Tenho uma dúvida sobre o atendimento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
