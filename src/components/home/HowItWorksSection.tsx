import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Video, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre em Contato",
    description: "Envie uma mensagem pelo WhatsApp ou formulário. Respondo o mais breve possível para esclarecer dúvidas.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Agende sua Sessão",
    description: "Escolhemos juntos o melhor horário para você. Atendimento presencial no Affinity Consultórios ou online.",
  },
  {
    number: "03",
    icon: Video,
    title: "Inicie o Processo",
    description: "Na primeira sessão, conversamos sobre suas demandas e expectativas. Sem pressa, com todo o acolhimento.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-card">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Seu primeiro passo é simples
          </h2>
          <p className="text-muted-foreground">
            Dar o primeiro passo pode parecer difícil, mas estou aqui para tornar 
            esse processo o mais acolhedor possível.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center p-8"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft mb-6">
                <step.icon className="w-7 h-7" />
              </div>

              {/* Number */}
              <span className="absolute top-4 right-8 font-display text-5xl font-bold text-primary/10">
                {step.number}
              </span>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 bg-background rounded-xl border border-border">
            <h4 className="font-medium text-foreground mb-1">Duração da Sessão</h4>
            <p className="text-sm text-muted-foreground">50 minutos</p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h4 className="font-medium text-foreground mb-1">Frequência</h4>
            <p className="text-sm text-muted-foreground">Semanal (recomendado)</p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h4 className="font-medium text-foreground mb-1">Modalidades</h4>
            <p className="text-sm text-muted-foreground">Presencial ou Online</p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h4 className="font-medium text-foreground mb-1">Público</h4>
            <p className="text-sm text-muted-foreground">Adolescentes e Adultos</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta-outline" size="lg" asChild>
            <Link to="/como-funciona">
              Entenda mais sobre o processo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
