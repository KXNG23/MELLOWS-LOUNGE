import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "27721832290";
  const message = "Hello Mellows Lounge, I would like to make an inquiry.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold uppercase tracking-widest">
        Chat with us
      </span>
    </a>
  );
}
