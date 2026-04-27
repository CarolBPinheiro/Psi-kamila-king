import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Award, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const values = [
  {
    icon: Heart,
    title: "Acolhimento",
    description: "Um espaço seguro onde você pode ser você mesmo.",
  },
  {
    icon: GraduationCap,
    title: "Base Científica",
    description: "Intervenções fundamentadas na Análise do Comportamento.",
  },
  {
    icon: Award,
    title: "Ética Profissional",
    description: "Compromisso com o Código de Ética da Psicologia.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
              <img
                src={profilePhoto}
                alt="Kamila King Pinheiro"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Sobre a Profissional
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Kamila King Pinheiro
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Sou psicóloga clínica com formação em Psicologia pela FAESA e 
                atualmente pós-graduanda em Neuropsicologia. Minha abordagem 
                é a Análise do Comportamento, uma perspectiva científica que 
                busca compreender o comportamento humano e promover mudanças 
                significativas na vida das pessoas.
              </p>
              <p>
                Acredito que cada pessoa carrega uma história única, e o processo 
                terapêutico deve respeitar essa individualidade. Meu objetivo é 
                oferecer um espaço de escuta genuína, onde você possa se sentir 
                acolhido para falar, refletir e se organizar emocionalmente.
              </p>
            </div>

            {/* Formation */}
            <div className="bg-card p-5 rounded-xl border border-border mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                Formação Acadêmica
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Bacharelado em Psicologia – FAESA
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Pós-graduanda em Neuropsicologia
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-4">
                  <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-lg bg-soft-orange-light text-primary mb-2">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium text-sm text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="cta-outline" size="lg" asChild>
              <Link to="/sobre">
                Conheça mais sobre mim
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
