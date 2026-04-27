import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
