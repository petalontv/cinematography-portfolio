import { useState } from "react";
import BackButton from "@/components/BackButton";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("CONTACT@PETALONTV.COM");
    toast({
      description: "Email copied to clipboard",
      duration: 2000,
      className: "font-['VT323'] text-lg border-2 border-primary bg-black text-primary",
    });
  };

  return (
    <div className="ptv-contact-page relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="ptv-scanlines" />
      <div className="ptv-vignette" />

      <div
        className="relative w-full max-w-[90vw] h-[60vh] flex items-center justify-center pointer-events-none"
      >
        {/* Container for absolute centering - Hover trigger moved here */}
        <div
          className="relative w-fit mx-auto flex flex-col items-center pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Top Copies - Spawning outwards */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`top-${i}`}
              className="ptv-email-fit absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: isHovered ? Math.max(0, 0.8 - i * 0.08) : 0, // Adjusted fade for fewer items
                y: isHovered ? -(65 + i * 40) : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              CONTACT@PETALONTV.COM
            </motion.div>
          ))}

          {/* Main Email - No background mask, pure text */}
          <motion.div
            onClick={handleCopy}
            className="ptv-email-fit cursor-pointer relative z-20 inline-block"
            title="Click to copy"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT@PETALONTV.COM
          </motion.div>

          {/* Bottom Copies - Spawning outwards */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`bottom-${i}`}
              className="ptv-email-fit absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: isHovered ? Math.max(0, 0.8 - i * 0.08) : 0,
                y: isHovered ? (65 + i * 40) : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              CONTACT@PETALONTV.COM
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button - Bottom Center, Hides on Hover */}
      <div className={`absolute bottom-12 left-0 right-0 flex justify-center transition-opacity duration-300 pointer-events-auto ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <BackButton />
      </div>
    </div>
  );
}
