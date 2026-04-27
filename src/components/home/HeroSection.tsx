import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-orange-light/30 via-background to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.span 
              className="inline-block text-sm font-medium text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Psicóloga Clínica | CRP 16/7259
            </motion.span>
            
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Um espaço seguro para cuidar da sua{" "}
              <span className="text-primary">saúde emocional</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Atendimento psicológico humanizado para adolescentes e adultos, 
              fundamentado na Análise do Comportamento. Aqui você encontra 
              acolhimento, ciência e respeito ao seu processo individual.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="cta" size="xl" asChild>
                <Link to="/conteudos">
                  <BookOpen className="w-5 h-5" />
                  Blog
                </Link>
              </Button>
              
              <Button variant="cta-outline" size="xl" asChild>
                <Link to="/sobre">
                  Conhecer Mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Atendimento Online
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Atendimento Presencial
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Sigilo Profissional
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={profilePhoto}
                  alt="Kamila King Pinheiro - Psicóloga Clínica"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div 
                className="absolute -bottom-4 -left-4 md:-left-8 bg-background p-4 rounded-xl shadow-medium border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-xs text-muted-foreground mb-1">Abordagem</p>
                <p className="font-display text-sm font-semibold text-foreground">
                  Análise do Comportamento
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
