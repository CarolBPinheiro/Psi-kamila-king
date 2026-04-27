import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Sun, Cloud, Flame, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  {
    id: "ansiedade",
    icon: Brain,
    title: "Ansiedade",
    shortDesc: "Apoio para compreender e lidar com preocupações excessivas.",
    forWhom: "Para pessoas que experimentam pensamentos acelerados, preocupação constante, dificuldade para relaxar, sintomas físicos como taquicardia e tensão muscular, ou medo intenso de situações futuras.",
    howHelps: "Na terapia, trabalhamos para identificar os gatilhos da ansiedade, desenvolver estratégias de enfrentamento e construir um repertório mais amplo de respostas diante de situações desafiadoras. O objetivo é ajudar você a retomar o controle sobre sua vida.",
  },
  {
    id: "autoestima",
    icon: Heart,
    title: "Autoestima",
    shortDesc: "Trabalho focado no autoconhecimento e valorização pessoal.",
    forWhom: "Para pessoas que se sentem constantemente inseguras, têm dificuldade em reconhecer suas qualidades, comparam-se frequentemente aos outros ou sentem que não são 'boas o suficiente'.",
    howHelps: "No processo terapêutico, exploramos suas experiências de vida, identificamos crenças limitantes e trabalhamos para construir uma relação mais compassiva consigo mesmo(a). A autoestima saudável é construída gradualmente, respeitando seu ritmo.",
  },
  {
    id: "luto",
    icon: Cloud,
    title: "Luto",
    shortDesc: "Espaço de acolhimento para elaborar perdas.",
    forWhom: "Para pessoas que enfrentam a perda de alguém querido, o fim de um relacionamento, perda de emprego, mudanças significativas de vida ou qualquer experiência de perda que gere sofrimento.",
    howHelps: "A terapia oferece um espaço seguro para expressar sua dor sem julgamentos. Trabalhamos para processar os sentimentos associados à perda, respeitar seu tempo de luto e, gradualmente, encontrar formas de seguir em frente mantendo as memórias significativas.",
  },
  {
    id: "depressao",
    icon: Sun,
    title: "Depressão",
    shortDesc: "Acompanhamento para enfrentar sintomas depressivos.",
    forWhom: "Para pessoas que experimentam tristeza persistente, perda de interesse em atividades que antes eram prazerosas, alterações no sono e apetite, dificuldade de concentração ou sentimentos de desesperança.",
    howHelps: "Na terapia, trabalhamos para compreender os fatores que mantêm os sintomas depressivos e gradualmente reativar comportamentos que trazem satisfação e sentido. O foco é ajudar você a reconectar-se consigo mesmo(a) e com o mundo ao redor.",
  },
  {
    id: "burnout",
    icon: Flame,
    title: "Burnout",
    shortDesc: "Apoio para lidar com o esgotamento profissional.",
    forWhom: "Para pessoas que se sentem exaustas física e emocionalmente pelo trabalho, experimentam despersonalização, têm baixa realização profissional ou dificuldade em estabelecer limites saudáveis.",
    howHelps: "O trabalho terapêutico foca em identificar os fatores que levaram ao esgotamento, desenvolver estratégias de autocuidado e estabelecer limites mais saudáveis. Juntos, buscamos formas de recuperar seu equilíbrio e qualidade de vida.",
  },
];

const Servicos = () => {
  return (
    <Layout>
      <Helmet>
        <title>Áreas de Atuação | Kamila King Pinheiro - Psicóloga Clínica</title>
        <meta
          name="description"
          content="Atendimento especializado em ansiedade, depressão, autoestima, luto e burnout. Psicoterapia baseada em Análise do Comportamento."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-orange-light/30 to-background">
        <div className="container max-w-3xl text-center">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Áreas de Atuação
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Como posso ajudar você
          </h1>
          <p className="text-lg text-muted-foreground">
            Atendimento especializado em demandas emocionais que afetam 
            a qualidade de vida, sempre com acolhimento e base científica.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Icon Card */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-card p-8 rounded-2xl border border-border">
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-soft-orange-light text-primary mb-6">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        Para quem é
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.forWhom}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        Como a terapia pode ajudar
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.howHelps}
                      </p>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-16 border-b border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card">
        <div className="container max-w-3xl">
          <div className="p-6 bg-background rounded-xl border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Nota importante:</strong> O acompanhamento psicológico não substitui 
              tratamento médico quando necessário. Em casos de urgência ou emergência, 
              procure atendimento especializado ou ligue para o CVV (188).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Reconheceu alguma dessas demandas?
          </h2>
          <p className="text-muted-foreground mb-8">
            Se você se identificou com alguma dessas situações, saiba que buscar 
            ajuda é um passo importante. Estou aqui para te acolher.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a
              href="https://wa.me/5527999872710?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5" />
              Agendar Atendimento
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
