import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Link } from "wouter";

export default function GradingPage() {
    return (
        <div className="ptv-content-page">
            <div className="ptv-scanlines" />
            <div className="ptv-vignette" />
            <div className="ptv-noise" />

            <main className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-[160]">
                {/* Back to Home Link - Standardized */}
                <Link href="/">
                    <button className="ptv-sub-button" style={{ position: 'absolute', top: '2rem', left: '0' }}>
                        BACK
                    </button>
                </Link>

                <div className="text-center mb-12">
                    <h2 className="font-['VT323'] text-white text-6xl md:text-8xl tracking-widest mb-2 uppercase text-shadow-glow">
                        GRADING
                    </h2>
                    <p className="font-['VT323'] text-xl md:text-2xl font-light tracking-widest text-white/80 uppercase">
                        Before & After Comparison
                    </p>
                </div>

                {/* The "Screen" Container - Lifted above scanlines (z-150) */}
                <div className="ptv-screen-container flex flex-col gap-16 relative z-[200]">
                    <div className="w-full">
                        <BeforeAfterSlider
                            beforeImage={`${import.meta.env.BASE_URL}photos/Grading/before1.png`}
                            afterImage={`${import.meta.env.BASE_URL}photos/Grading/after1.png`}
                        />
                    </div>
                    <div className="w-full">
                        <BeforeAfterSlider
                            beforeImage={`${import.meta.env.BASE_URL}photos/Grading/before2.png`}
                            afterImage={`${import.meta.env.BASE_URL}photos/Grading/after2.png`}
                        />
                    </div>
                    <div className="w-full">
                        <BeforeAfterSlider
                            beforeImage={`${import.meta.env.BASE_URL}photos/Grading/before3.png`}
                            afterImage={`${import.meta.env.BASE_URL}photos/Grading/after3.png`}
                        />
                    </div>
                    <div className="w-full">
                        <BeforeAfterSlider
                            beforeImage={`${import.meta.env.BASE_URL}photos/Grading/before4.png`}
                            afterImage={`${import.meta.env.BASE_URL}photos/Grading/after4.png`}
                        />
                    </div>
                    <div className="w-full">
                        <BeforeAfterSlider
                            beforeImage={`${import.meta.env.BASE_URL}photos/Grading/before5.png`}
                            afterImage={`${import.meta.env.BASE_URL}photos/Grading/after5.png`}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
