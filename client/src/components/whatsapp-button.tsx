import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] p-4"
      size="icon"
      onClick={() => window.open("https://wa.me/+919999999999", "_blank")}
    >
      <FaWhatsapp className="h-6 w-6" />
    </Button>
  );
}
