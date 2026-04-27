import { Link } from "react-router-dom";
import { Brain, Heart, Sun, Cloud, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Apoio para compreender e lidar com pensamentos acelerados, preocupações excessivas e sintomas físicos da ansiedade.",
    href: "/servicos#ansiedade",
  },
  {
    icon: Heart,
    title: "Autoestima",
    description: "Trabalho terapêutico focado no autoconhecimento, valorização pessoal e construção de uma relação mais saudável consigo.",
    href: "/servicos#autoestima",
  },
  {
    icon: Cloud,
    title: "Luto",
    description: "Espaço de acolhimento para elaborar perdas, respeitar o tempo do luto e encontrar formas de seguir em frente.",
    href: "/servicos#luto",
  },
  {
    icon: Sun,
    title: "Depressão",
    description: "Acompanhamento para enfrentar sintomas depressivos, resgatar motivação e reconectar-se com atividades significativas.",
    href: "/servicos#depressao",
  },
  {
    icon: Flame,
    title: "Burnout",
    description: "Apoio para lidar com o esgotamento profissional, estabelecer limites saudáveis e recuperar o equilíbrio.",
    href: "/servicos#burnout",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Áreas de Atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Como posso ajudar você
          </h2>
          <p className="text-muted-foreground">
            Atendimento especializado em demandas emocionais que afetam a qualidade de vida, 
            sempre com acolhimento e base científica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-soft-orange-light text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta-outline" size="lg" asChild>
            <Link to="/servicos">
              Ver todas as áreas de atuação
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
