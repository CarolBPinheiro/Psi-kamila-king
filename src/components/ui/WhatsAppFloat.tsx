import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Kamila! Gostaria de agendar uma consulta. Pode me informar os horários disponíveis?"
);

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    // Show after a short delay on mobile
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://wa.me/5527999872710?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Falar no WhatsApp"
        >
          <span className="flex items-center justify-center w-14 h-14">
            <MessageCircle className="w-6 h-6" />
          </span>
          <AnimatePresence>
            {isHovered && (
              <motion.span
                className="pr-4 font-medium text-sm whitespace-nowrap"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Falar no WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
