import { cn } from "@/lib/utils";
import BackButton from "@/components/BackButton";

interface FilmPageLayoutProps {
    title: string;
    producer: React.ReactNode;
    videoId: string;
    photos: string[];
}

export function FilmPageLayout({ title, producer, videoId, photos }: FilmPageLayoutProps) {
    return (
        <div className="ptv-content-page">
            <div className="ptv-scanlines" />
            <div className="ptv-vignette" />
            <div className="ptv-noise" />

            <main className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-[160]">
                {/* Back to Home Link - Standardized */}
                <BackButton />

                <div className="text-center mb-12">
                    <h2 className="font-['VT323'] text-white text-6xl md:text-8xl tracking-widest mb-2 uppercase text-shadow-glow">
                        {title}
                    </h2>
                </div>

                {/* The "Screen" Container - Lifted above scanlines (z-150) */}
                <div className="ptv-screen-container flex flex-col gap-16 relative z-[200]">
                    <div className="w-full">
                        <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <iframe
                                src={`https://player.vimeo.com/video/${videoId}`}
                                className="absolute top-0 left-0 w-full h-full border-none"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {photos.map((photo, i) => (
                            <div key={i} className="w-full aspect-video overflow-hidden bg-black border border-white/10 group shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <img
                                    src={photo}
                                    alt={`${title} Scene ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
