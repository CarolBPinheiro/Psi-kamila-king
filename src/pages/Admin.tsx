import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  FileText, 
  Eye, 
  EyeOff,
  Save,
  X,
  ExternalLink,
  ImagePlus,
  Loader2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export default function Admin() {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image_url: "" as string | null,
    published: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, isLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchPosts();
    }
  }, [user, isAdmin]);

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Erro ao carregar posts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
    setIsLoadingPosts(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Arquivo inválido",
        description: "Por favor, selecione uma imagem.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Arquivo muito grande",
        description: "A imagem deve ter no máximo 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      setFormData({ ...formData, image_url: urlData.publicUrl });

      toast({
        title: "Imagem enviada!",
        description: "A imagem foi carregada com sucesso.",
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao enviar imagem",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image_url: null });
  };

  const openNewPostDialog = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      image_url: null,
      published: false,
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.image_url,
      published: post.published,
    });
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos antes de salvar.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    if (editingPost) {
      // Update existing post
      const { error } = await supabase
        .from("blog_posts")
        .update({
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content,
          image_url: formData.image_url,
          published: formData.published,
        })
        .eq("id", editingPost.id);

      if (error) {
        toast({
          title: "Erro ao atualizar",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Post atualizado!",
          description: "As alterações foram salvas com sucesso.",
        });
        setIsDialogOpen(false);
        fetchPosts();
      }
    } else {
      // Create new post
      const slug = generateSlug(formData.title);
      const { error } = await supabase.from("blog_posts").insert({
        title: formData.title,
        slug,
        excerpt: formData.excerpt,
        content: formData.content,
        image_url: formData.image_url,
        published: formData.published,
        author_id: user?.id,
      });

      if (error) {
        if (error.message.includes("duplicate key")) {
          toast({
            title: "Título duplicado",
            description: "Já existe um post com este título. Escolha outro.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Erro ao criar post",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Post criado!",
          description: formData.published 
            ? "Seu post foi publicado e já está visível no site." 
            : "Seu post foi salvo como rascunho.",
        });
        setIsDialogOpen(false);
        fetchPosts();
      }
    }

    setIsSaving(false);
  };

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(`Tem certeza que deseja excluir "${post.title}"?`)) {
      return;
    }

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", post.id);

    if (error) {
      toast({
        title: "Erro ao excluir",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Post excluído",
        description: "O post foi removido permanentemente.",
      });
      fetchPosts();
    }
  };

  const togglePublish = async (post: BlogPost) => {
    const { error } = await supabase
      .from("blog_posts")
      .update({ published: !post.published })
      .eq("id", post.id);

    if (error) {
      toast({
        title: "Erro ao atualizar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: post.published ? "Post despublicado" : "Post publicado!",
        description: post.published 
          ? "O post não está mais visível no site."
          : "O post está agora visível no site.",
      });
      fetchPosts();
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
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

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <Layout>
      <Helmet>
        <title>Painel Administrativo | Kamila King Pinheiro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="pt-28 pb-16 min-h-screen bg-background">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl font-semibold text-foreground">
                Gerenciar Conteúdos
              </h1>
              <p className="text-muted-foreground mt-1">
                Crie e edite os posts do seu blog
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/conteudos" target="_blank">
                  <ExternalLink className="w-4 h-4" />
                  Ver Site
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="mb-6">
            <Button variant="cta" onClick={openNewPostDialog}>
              <Plus className="w-4 h-4" />
              Novo Post
            </Button>
          </div>

          {/* Posts List */}
          {isLoadingPosts ? (
            <div className="text-center py-12 text-muted-foreground">
              Carregando posts...
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Nenhum post ainda
              </h3>
              <p className="text-muted-foreground mb-6">
                Comece criando seu primeiro conteúdo
              </p>
              <Button variant="cta" onClick={openNewPostDialog}>
                <Plus className="w-4 h-4" />
                Criar Primeiro Post
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {post.image_url && (
                      <img
                        src={post.image_url}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-semibold text-foreground truncate">
                          {post.title}
                        </h3>
                        {post.published ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full shrink-0">
                            <Eye className="w-3 h-3" />
                            Publicado
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full shrink-0">
                            <EyeOff className="w-3 h-3" />
                            Rascunho
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        Atualizado em {new Date(post.updated_at).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePublish(post)}
                    >
                      {post.published ? (
                        <>
                          <EyeOff className="w-4 h-4" />
                          Despublicar
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          Publicar
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditDialog(post)}
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(post)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Post Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {editingPost ? "Editar Post" : "Novo Post"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5 mt-4">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Imagem de Capa</Label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              {formData.image_url ? (
                <div className="relative">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={removeImage}
                  >
                    <X className="w-4 h-4" />
                    Remover
                  </Button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="w-full h-32 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-soft-orange-light/20 transition-colors disabled:opacity-50"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      <span className="text-sm text-muted-foreground">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <ImagePlus className="w-8 h-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Clique para adicionar uma imagem
                      </span>
                      <span className="text-xs text-muted-foreground/70">
                        JPG, PNG ou WebP (máx. 5MB)
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input
                id="title"
                placeholder="Ex: Como lidar com a ansiedade no dia a dia"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Resumo (exibido na listagem) *</Label>
              <Textarea
                id="excerpt"
                placeholder="Um breve resumo do que o post aborda..."
                rows={2}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo *</Label>
              <p className="text-xs text-muted-foreground">
                Use ## para títulos e - para listas. *texto* para itálico.
              </p>
              <Textarea
                id="content"
                placeholder="Escreva o conteúdo completo do post aqui..."
                rows={12}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="font-mono text-sm"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <Label htmlFor="published" className="text-base">Publicar imediatamente</Label>
                <p className="text-sm text-muted-foreground">
                  Posts publicados ficam visíveis no site
                </p>
              </div>
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                <X className="w-4 h-4" />
                Cancelar
              </Button>
              <Button variant="cta" onClick={handleSave} disabled={isSaving}>
                <Save className="w-4 h-4" />
                {isSaving ? "Salvando..." : "Salvar"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
