import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Kamila! Gostaria de agendar uma consulta. Pode me informar os horários disponíveis?"
);

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Kamila King Pinheiro - Psicóloga" 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Atendimento psicológico humanizado, baseado em princípios científicos
              da Análise do Comportamento.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/psi.kamilapinheiro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-soft-orange-light rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-soft-orange-light rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </Link>
              <Link to="/conteudos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Conteúdos
              </Link>
              <Link to="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (27) 99987-2710
              </a>
              <a
                href="mailto:kamila.pinheiropsi@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                kamila.pinheiropsi@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Affinity Consultórios<br />R. Ten. Mário Francisco Brito, 200<br />Loja 06 – Enseada do Suá</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Seg - Sex: 08:00 às 18:00
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Agende sua consulta
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Entre em contato pelo WhatsApp e vamos conversar sobre como posso ajudar.
            </p>
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a
                href={`https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Kamila King Pinheiro. Todos os direitos reservados.
              </p>
              <div className="flex gap-4 text-sm">
                <Link to="/politica-privacidade" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacidade
                </Link>
                <Link to="/termos-uso" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos
                </Link>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/70 text-center md:text-right max-w-md">
              O atendimento psicológico não substitui acompanhamento médico quando necessário.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
