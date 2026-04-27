import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Kamila! Gostaria de agendar uma consulta. Pode me informar os horários disponíveis?"
);

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

export default function ConteudoPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Carregando...</div>
        </div>
      </Layout>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/conteudos" replace />;
  }

  // Simple markdown-like parsing for the content
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="font-display text-xl font-semibold text-foreground mt-6 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("- ")) {
        currentList.push(trimmed.replace("- ", ""));
      } else if (trimmed.match(/^\d+\.\s/)) {
        flushList();
        elements.push(
          <p key={index} className="text-muted-foreground mb-2">
            {trimmed}
          </p>
        );
      } else if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
        flushList();
        elements.push(
          <p key={index} className="text-primary font-medium italic my-6">
            {trimmed.replace(/\*/g, "")}
          </p>
        );
      } else if (trimmed) {
        flushList();
        elements.push(
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Kamila King Pinheiro - Psicóloga</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              to="/conteudos"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para conteúdos
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.created_at).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {estimateReadTime(post.content)} de leitura
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                {post.title}
              </h1>
            </header>

            {/* Cover Image */}
            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
              />
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-soft-orange-light/30 rounded-2xl text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Precisa de acompanhamento profissional?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estou aqui para ajudar. Entre em contato e vamos conversar.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a
                  href={`https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-sm text-muted-foreground text-center">
              Este conteúdo tem caráter informativo e não substitui atendimento 
              psicológico profissional.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
