import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Award, Heart, Sparkles, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePhoto from "@/assets/profile-photo.png";

const values = [
  {
    icon: Heart,
    title: "Acolhimento",
    description: "Cada pessoa é única e merece ser ouvida com respeito e empatia. O espaço terapêutico é para você se sentir seguro(a).",
  },
  {
    icon: Sparkles,
    title: "Base Científica",
    description: "Trabalho com a Análise do Comportamento, uma abordagem fundamentada em evidências científicas.",
  },
  {
    icon: Shield,
    title: "Ética Profissional",
    description: "Compromisso total com o Código de Ética da Psicologia, garantindo sigilo e respeito em todas as interações.",
  },
  {
    icon: Users,
    title: "Respeito Individual",
    description: "Cada processo terapêutico é único. Respeito seu tempo, suas vivências e seu ritmo de mudança.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sobre | Kamila King Pinheiro - Psicóloga Clínica</title>
        <meta
          name="description"
          content="Conheça Kamila King Pinheiro, psicóloga clínica com formação em Análise do Comportamento. Atendimento humanizado e ético."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-soft-orange-light/30 to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={profilePhoto}
                  alt="Kamila King Pinheiro"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-medium text-primary mb-3">
                Sobre Mim
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Kamila King Pinheiro
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                Psicóloga Clínica | CRP 16/7259
              </p>

              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Olá! Sou psicóloga clínica apaixonada pelo cuidado com a saúde emocional. 
                  Minha jornada na Psicologia começou com o desejo de ajudar pessoas a 
                  compreenderem melhor a si mesmas e a construírem vidas mais significativas.
                </p>
                <p>
                  Formada em Psicologia pela FAESA e atualmente pós-graduanda em Neuropsicologia, 
                  trabalho com a Análise do Comportamento – uma abordagem científica que me permite 
                  entender o comportamento humano em sua complexidade e propor intervenções 
                  personalizadas para cada pessoa.
                </p>
                <p>
                  Acredito que a terapia é um espaço de encontro, onde você pode falar abertamente 
                  sobre suas dificuldades, medos e sonhos. Meu papel é oferecer escuta qualificada, 
                  acolhimento genuíno e ferramentas para que você possa lidar melhor com os 
                  desafios do dia a dia.
                </p>
              </div>

              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://wa.me/5527999872710?text=Olá! Gostaria de saber mais sobre o atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar em Contato
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Formação
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Formação Acadêmica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-soft-orange-light text-primary mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Bacharelado em Psicologia
              </h3>
              <p className="text-muted-foreground">FAESA</p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-soft-orange-light text-primary mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Pós-graduação em Neuropsicologia
              </h3>
              <p className="text-muted-foreground">Em andamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Abordagem
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Análise do Comportamento
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              A Análise do Comportamento é uma ciência que estuda como o comportamento 
              humano se desenvolve e se modifica ao longo do tempo, considerando a 
              relação entre a pessoa e seu ambiente.
            </p>
            <p>
              Diferente de abordagens que focam apenas em pensamentos ou emoções isoladamente, 
              a Análise do Comportamento compreende que nossos comportamentos, pensamentos 
              e sentimentos estão interligados e são influenciados pelo contexto em que vivemos.
            </p>
            <p>
              Isso significa que, na terapia, trabalhamos não apenas para entender "o que" 
              você sente, mas "por que" você sente, identificando padrões e construindo 
              novas formas de lidar com situações desafiadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Valores
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              O que guia meu trabalho
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-background rounded-xl border border-border text-center">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-soft-orange-light text-primary mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Se você sente que chegou o momento de buscar ajuda profissional, 
            estou aqui para te acolher nesse processo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://wa.me/5527999872710?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Atendimento
              </a>
            </Button>
            <Button variant="cta-outline" size="lg" asChild>
              <Link to="/servicos">
                Ver Áreas de Atuação
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
