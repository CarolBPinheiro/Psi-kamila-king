import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, Calendar, Video, Clock, Shield, Heart, 
  Laptop, Building, Users, CheckCircle, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import officeImage from "@/assets/therapy-office.jpg";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre em Contato",
    description: "Envie uma mensagem pelo WhatsApp ou formulário de contato. Você pode tirar dúvidas antes de agendar, sem compromisso.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Agende sua Sessão",
    description: "Escolhemos juntos o melhor horário para você. Você pode optar por atendimento presencial no Affinity Consultórios ou online.",
  },
  {
    number: "03",
    icon: Video,
    title: "Primeira Sessão",
    description: "Na primeira sessão, conversamos sobre suas demandas, histórico e expectativas. É um momento de conhecimento mútuo.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Inicie o Processo",
    description: "A partir daí, construímos juntos o caminho terapêutico, respeitando seu ritmo e suas necessidades individuais.",
  },
];

const modalities = [
  {
    icon: Laptop,
    title: "Atendimento Online",
    description: "Sessões por videoconferência, com a mesma qualidade do presencial. Ideal para quem tem rotina corrida ou mora longe.",
    benefits: [
      "Conforto do seu ambiente",
      "Flexibilidade de horários",
      "Sem deslocamento",
      "Privacidade garantida",
    ],
  },
  {
    icon: Building,
    title: "Atendimento Presencial",
    description: "Sessões no Affinity Consultórios, em um ambiente acolhedor e preparado para garantir sua privacidade e conforto.",
    benefits: [
      "Ambiente dedicado",
      "Experiência presencial",
      "Localização acessível",
      "Estrutura completa",
    ],
  },
];

const details = [
  { icon: Clock, label: "Duração da Sessão", value: "50 minutos" },
  { icon: Calendar, label: "Frequência Recomendada", value: "Semanal" },
  { icon: Users, label: "Público Atendido", value: "Adolescentes e Adultos" },
  { icon: Shield, label: "Sigilo", value: "Garantido por lei" },
];

const ComoFunciona = () => {
  return (
    <Layout>
      <Helmet>
        <title>Como Funciona | Kamila King Pinheiro - Psicóloga Clínica</title>
        <meta
          name="description"
          content="Entenda como funciona o atendimento psicológico. Sessões de 50 minutos, presencial ou online. Saiba como agendar sua consulta."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-orange-light/30 to-background">
        <div className="container max-w-3xl text-center">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Como Funciona
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Seu primeiro passo é simples
          </h1>
          <p className="text-lg text-muted-foreground">
            Sei que dar o primeiro passo pode parecer difícil. Por isso, 
            tornei o processo o mais acolhedor e descomplicado possível.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center p-6">
                <span className="absolute top-0 right-4 font-display text-6xl font-bold text-primary/10">
                  {step.number}
                </span>
                <div className="relative z-10 w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft mb-6">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Modalidades
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Escolha a que melhor se adapta a você
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modalities.map((modality) => (
              <div key={modality.title} className="p-8 bg-background rounded-2xl border border-border">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-soft-orange-light text-primary mb-6">
                  <modality.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {modality.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {modality.description}
                </p>
                <ul className="space-y-2">
                  {modality.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Detalhes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Informações importantes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {details.map((detail) => (
              <div key={detail.label} className="p-5 bg-card rounded-xl border border-border text-center">
                <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-lg bg-soft-orange-light text-primary mb-3">
                  <detail.icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{detail.label}</p>
                <p className="font-display text-lg font-semibold text-foreground">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Session */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-medium">
              <img
                src={officeImage}
                alt="Espaço de atendimento"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-sm font-medium text-primary mb-3">
                A Primeira Sessão
              </span>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                O que esperar do primeiro encontro
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A primeira sessão é diferente das demais. É um momento de 
                  acolhimento e conhecimento mútuo, onde conversamos sobre:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>O que te trouxe até a terapia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Suas expectativas sobre o processo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Aspectos importantes da sua história</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Como funciona a terapia e tiramos dúvidas</span>
                  </li>
                </ul>
                <p>
                  Não existe certo ou errado, nem pressão para falar sobre 
                  tudo de uma vez. Vamos no seu tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="p-8 bg-soft-orange-light/50 rounded-2xl border border-primary/20 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Sigilo Profissional
            </h2>
            <p className="text-muted-foreground">
              Tudo o que é conversado em sessão permanece confidencial, 
              conforme previsto no Código de Ética do Psicólogo. Você pode 
              falar abertamente, sabendo que está em um ambiente seguro 
              e protegido.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Pronto(a) para começar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Se ficou alguma dúvida, entre em contato. 
            Terei prazer em esclarecer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button variant="cta-outline" size="lg" asChild>
              <Link to="/faq">
                Ver Perguntas Frequentes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComoFunciona;
