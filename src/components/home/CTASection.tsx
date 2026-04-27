import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import officeImage from "@/assets/therapy-office.jpg";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Kamila! Gostaria de agendar uma consulta. Pode me informar os horários disponíveis?"
);

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={officeImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Pronto(a) para dar o <span className="text-primary">primeiro passo</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Cuidar da sua saúde emocional é um ato de coragem. 
            Estou aqui para caminhar com você nesse processo.
          </p>

          <Button variant="cta" size="xl" asChild>
            <a
              href={`https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>

          <p className="mt-8 text-sm text-muted-foreground">
            Atendimento de Segunda a Sexta, das 08:00 às 18:00
          </p>
        </div>
      </div>
    </section>
  );
}
