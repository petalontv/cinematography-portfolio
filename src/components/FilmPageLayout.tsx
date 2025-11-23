import { cn } from "@/lib/utils";

interface FilmPageLayoutProps {
    title: string;
    producer: React.ReactNode;
    videoId: string;
    photos: string[];
}

export function FilmPageLayout({ title, producer, videoId, photos }: FilmPageLayoutProps) {
    return (
        <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-8 md:py-16">
            <div className="text-center mb-12">
                <h2 className="font-['Satoshi'] text-4xl md:text-[2.5rem] font-bold tracking-[0.2em] text-[#0000ff] mb-2">
                    {title}
                </h2>
                <div className="font-['Satoshi'] text-base font-normal tracking-[0.12em] text-black">
                    {producer}
                </div>
            </div>

            <div className="mb-16">
                <div className="relative pb-[56.25%] h-0 overflow-hidden bg-[#f5f5f5]">
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
                    <div key={i} className="w-full aspect-video overflow-hidden bg-[#f5f5f5] group">
                        <img
                            src={photo}
                            alt={`${title} Scene ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
