"use client";

import { MessageCircle } from "lucide-react";

export default function WaFloat() {
  return (
    <a
      href="https://wa.me/593995093687"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
      style={{
        backgroundColor: "#25d366",
        boxShadow: "0 6px 20px rgba(37,211,102,.5)",
        animation: "pulse-wa 2.5s infinite",
      }}
    >
      <MessageCircle size={26} fill="white" />
      <style>{`
        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 6px 20px rgba(37,211,102,.45); }
          50%       { box-shadow: 0 6px 32px rgba(37,211,102,.70); }
        }
      `}</style>
    </a>
  );
}
