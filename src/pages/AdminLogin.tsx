import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import logo from "@/assets/logo.png";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido").max(255),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").max(100),
});

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn, user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user && isAdmin) {
      navigate("/admin");
    }
  }, [user, isAdmin, isLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate input
    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    const { error: authError } = await signIn(email, password);

    if (authError) {
      if (authError.message.includes("Invalid login credentials")) {
        setError("E-mail ou senha incorretos.");
      } else {
        setError("Ocorreu um erro ao fazer login. Tente novamente.");
      }
      setIsSubmitting(false);
      return;
    }

    // Wait a moment for the auth state to update
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Carregando...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Área Administrativa | Kamila King Pinheiro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="pt-32 pb-16 min-h-screen">
        <div className="container max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <img 
                  src={logo} 
                  alt="Kamila King Pinheiro - Psicóloga" 
                  className="h-20 w-auto"
                />
              </div>
              <h1 className="font-display text-2xl font-semibold text-foreground">
                Área Administrativa
              </h1>
              <p className="text-muted-foreground mt-2">
                Faça login para gerenciar seus conteúdos
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 mb-6 bg-destructive/10 text-destructive rounded-lg">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
