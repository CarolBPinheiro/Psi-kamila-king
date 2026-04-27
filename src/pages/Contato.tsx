import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Kamila! Gostaria de agendar uma consulta. Pode me informar os horários disponíveis?"
);

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(27) 99987-2710",
    href: `https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "kamila.pinheiropsi@gmail.com",
    href: "mailto:kamila.pinheiropsi@gmail.com",
  },
  {
    icon: MapPin,
    label: "Atendimento Presencial",
    value: "Affinity Consultórios – R. Ten. Mário Francisco Brito, 200, Loja 06 – Enseada do Suá",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Seg - Sex: 08:00 às 18:00",
    href: null,
  },
];

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigada!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contato | Kamila King Pinheiro - Psicóloga Clínica</title>
        <meta
          name="description"
          content="Entre em contato para agendar sua consulta. Atendimento pelo WhatsApp (27) 99987-2710 ou e-mail. Respondo o mais breve possível."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-orange-light/30 to-background">
        <div className="container max-w-3xl text-center">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Contato
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Vamos conversar?
          </h1>
          <p className="text-lg text-muted-foreground">
            Estou aqui para tirar suas dúvidas e ajudar você a dar 
            o primeiro passo rumo ao cuidado com sua saúde emocional.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-4 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-soft-orange-light text-primary shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envie uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-me um pouco sobre o que te trouxe aqui..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <a href="/politica-privacidade" className="underline hover:text-foreground">
                    política de privacidade
                  </a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Placeholder */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
              Localização
            </h2>
            <p className="text-muted-foreground">
              Atendimento presencial no Affinity Consultórios
            </p>
          </div>

          <div className="aspect-video rounded-2xl bg-muted border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-display text-xl font-semibold text-foreground mb-2">
                Affinity Consultórios
              </p>
              <p className="text-muted-foreground mb-2">
                R. Ten. Mário Francisco Brito, 200<br />
                Loja 06 – Enseada do Suá
              </p>
              <p className="text-sm text-muted-foreground">
                Para informações sobre localização e estacionamento, 
                entre em contato pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
