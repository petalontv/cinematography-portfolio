import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const [showFilms, setShowFilms] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => {
          // Safeguard: Reset after 1 hour (3600 seconds)
          if (prev >= 3600) return 0;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording and reset
      setIsRecording(false);
      setRecordingTime(0);
    } else {
      // Start recording
      setIsRecording(true);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToContent = () => {
    document.getElementById("content-section")?.scrollIntoView({ behavior: "smooth" });
  };

  // UV Map for pure zoom: Red=Horz (Left=Black, Right=White) | Green=Vert (Top=Black, Bottom=White)
  // This creates an outwards push from all directions (Zoom Out / Bulge).
  const displacementMapUrl = "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22256%22%20height%3D%22256%22%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22gX%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23000%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fff%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22gY%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23000%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fff%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url%28%23gX%29%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url%28%23gY%29%22%20style%3D%22mix-blend-mode%3A%20screen%3B%22%2F%3E%3C%2Fsvg%3E";

  return (
    <div className="ptv-container">
      {/* Dynamic Filter Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="ptv-fisheye" x="-50%" y="-50%" width="200%" height="200%">
            <feImage preserveAspectRatio="none" result="lens" href={displacementMapUrl} />
            {/* 
                xChannelSelector="R" -> Red channel (Horizontal Gradient)
                yChannelSelector="G" -> Green channel (Vertical Gradient)
                scale animates from 0 to 40 for the zoom effect.
                Note: Inverted map means positive scale = expansion.
            */}
            <motion.feDisplacementMap
              in="SourceGraphic"
              in2="lens"
              xChannelSelector="R"
              yChannelSelector="G"
              initial={{ scale: 0 }}
              animate={{ scale: isLogoHovered ? 40 : 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            />
          </filter>
        </defs>
      </svg>

      <section className="ptv-viewport">
        <div className="ptv-crt">
          <div className="ptv-scanlines" />
          <div className="ptv-vignette" />
          <div className="ptv-noise" />

        </div>
        <div className="ptv-center">
          <motion.div
            className="ptv-static-box"
            onClick={scrollToContent}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            style={{
              // We apply the filter explicitly here.
              filter: 'url(#ptv-fisheye)',
              willChange: 'filter, transform',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              cursor: 'pointer'
            }}
          >
            <h1 className="ptv-title ptv-chromatic flex justify-center items-center gap-1 text-white" style={{ transformStyle: 'preserve-3d', color: 'white' }}>
              <motion.span
                style={{
                  display: 'inline-block',
                  originX: 1 // Rotate from right edge (connected to T)
                }}
                animate={{
                  rotateY: isLogoHovered ? -20 : 0, // Convex curve
                  x: isLogoHovered ? -5 : 0,
                  z: isLogoHovered ? 30 : 0, // Pop forward together
                  scale: isLogoHovered ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                P
              </motion.span>
              <motion.span
                style={{
                  display: 'inline-block',
                  zIndex: 50
                }}
                animate={{
                  z: isLogoHovered ? 50 : 0, // Slightly ahead of P/V (50 vs 30)
                  scale: isLogoHovered ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                T
              </motion.span>
              <motion.span
                style={{
                  display: 'inline-block',
                  originX: 0 // Rotate from left edge (connected to T)
                }}
                animate={{
                  rotateY: isLogoHovered ? 20 : 0, // Convex curve
                  x: isLogoHovered ? 5 : 0,
                  z: isLogoHovered ? 30 : 0, // Pop forward together
                  scale: isLogoHovered ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                V
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section id="content-section" className="ptv-content-page">
        <div className="ptv-scanlines" />
        <div className="ptv-vignette" />

        <div className="ptv-grid">
          <div className="ptv-link-item">
            <div className="ptv-main-link" onClick={() => setShowFilms(!showFilms)} style={{ cursor: 'pointer' }}>
              <div className="ptv-play-arrow" style={{ transform: showFilms ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
              <button className="ptv-button">Films</button>
            </div>

            {showFilms && (
              <div className="ptv-sub-links">
                <Link href="/autumn">
                  <span className="ptv-sub-button">AUTUMN</span>
                </Link>
                <Link href="/cyberpunk">
                  <span className="ptv-sub-button">CYBERPUNK</span>
                </Link>
                <Link href="/fog">
                  <span className="ptv-sub-button">FOG</span>
                </Link>
              </div>
            )}
          </div>

          <div className="ptv-link-item">
            <div className="ptv-main-link">
              <div className="ptv-play-arrow" />
              <Link href="/grading">
                <button className="ptv-button">Grading</button>
              </Link>
            </div>
          </div>

          <div className="ptv-link-item">
            <div className="ptv-main-link">
              <div className="ptv-play-arrow" />
              <Link href="/contact">
                <button className="ptv-button">Contact</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Broadcast OSD Bar */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-center md:items-end text-lg font-['VT323'] tracking-wider text-white/70 uppercase z-[200] gap-4 md:gap-0">
          <div className="flex gap-6 order-2 md:order-1 items-center">
            {/* Interactive REC Button */}
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
              onClick={toggleRecording}
            >
              <span>REC</span>
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-[pulse_1s_ease-in-out_infinite]' : 'bg-white/70'}`} />
            </div>

            <span>{isRecording ? formatTime(recordingTime) : "00:00:00"}</span>
            <span className="opacity-50">|</span>
            <span>BAT 98%</span>
          </div>
          <div className="flex gap-8 order-1 md:order-2 text-sm md:text-lg">
            <a href="https://youtube.com/@petalontv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:text-shadow-glow transition-all">YOUTUBE</a>
            <a href="https://instagram.com/petalontv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:text-shadow-glow transition-all">INSTAGRAM</a>
            <a href="https://vimeo.com/petalontv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:text-shadow-glow transition-all">VIMEO</a>
          </div>
        </div>
      </section >
    </div >
  );
}
