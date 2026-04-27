import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kamila King Pinheiro | Psicóloga Clínica em Vitória - ES</title>
        <meta
          name="description"
          content="Psicóloga clínica especializada em Análise do Comportamento. Atendimento humanizado para ansiedade, depressão, autoestima, luto e burnout. Presencial e online."
        />
        <meta
          name="keywords"
          content="psicóloga, terapia, ansiedade, depressão, autoestima, luto, burnout, análise do comportamento, Vitória, ES, online"
        />
        <link rel="canonical" href="https://www.kamilakingpinheiro.com.br" />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
