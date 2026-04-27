import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import ComoFunciona from "./pages/ComoFunciona";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Conteudos from "./pages/Conteudos";
import ConteudoPost from "./pages/ConteudoPost";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/conteudos" element={<Conteudos />} />
              <Route path="/conteudos/:slug" element={<ConteudoPost />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
