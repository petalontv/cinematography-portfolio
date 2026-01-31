import BackButton from "@/components/BackButton";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("CONTACT@PETALONTV.COM");
    toast({
      description: "Email copied to clipboard",
      duration: 2000,
      className: "font-['VT323'] text-lg border-2 border-primary bg-black text-primary",
    });
  };

  return (
    <div className="ptv-contact-page">
      <div className="ptv-scanlines" />
      <div className="ptv-vignette" />

      <BackButton />

      <div className="ptv-email-container">
        <div
          onClick={handleCopy}
          className="ptv-email-fit cursor-pointer hover:opacity-80 transition-opacity active:scale-95"
          title="Click to copy"
        >
          CONTACT@PETALONTV.COM
        </div>
      </div>
    </div>
  );
}
