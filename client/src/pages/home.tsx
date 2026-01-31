import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [showFilms, setShowFilms] = useState(false);

  const scrollToContent = () => {
    document.getElementById("content-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ptv-container">
      <section className="ptv-viewport">
        <div className="ptv-crt">
          <div className="ptv-scanlines" />
          <div className="ptv-vignette" />
          <div className="ptv-noise" />

        </div>
        <div className="ptv-center">
          <div className="ptv-static-box" onClick={scrollToContent}>
            <h1 className="ptv-title ptv-chromatic">PTV</h1>
          </div>
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
          <div className="flex gap-6 order-2 md:order-1">
            <span>REC ● 00:04:22</span>
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
