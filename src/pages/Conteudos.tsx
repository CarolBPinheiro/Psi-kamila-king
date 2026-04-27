import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PostCardSkeleton } from "@/components/ui/PostCardSkeleton";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image_url: string | null;
  created_at: string;
}

// Estimate read time based on content length
function estimateReadTime(excerpt: string): string {
  const wordsPerMinute = 200;
  const words = excerpt.split(/\s+/).length * 5; // Estimate full content is 5x excerpt
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Conteudos() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, image_url, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Conteúdos sobre Saúde Mental | Kamila King Pinheiro - Psicóloga</title>
        <meta
          name="description"
          content="Artigos e reflexões sobre saúde mental, ansiedade, autoestima, luto e bem-estar emocional. Conteúdo informativo e acolhedor."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-orange-light/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Conteúdos sobre Saúde Mental
            </h1>
            <p className="text-lg text-muted-foreground">
              Reflexões, informações e acolhimento para o seu dia a dia. 
              Aqui você encontra conteúdos pensados para ajudar você a 
              compreender melhor suas emoções e cuidar da sua saúde mental.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <PostCardSkeleton key={i} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Novos conteúdos em breve. Fique atento!
              </p>
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {posts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
                >
                  {post.image_url && (
                    <Link to={`/conteudos/${post.slug}`} className="block overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.created_at).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {estimateReadTime(post.excerpt)}
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/conteudos/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/conteudos/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Os conteúdos aqui apresentados têm caráter informativo e não substituem 
            atendimento psicológico profissional. Em caso de sofrimento significativo, 
            busque ajuda especializada.
          </p>
        </div>
      </section>
    </Layout>
  );
}
