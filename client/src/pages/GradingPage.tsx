import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import BackButton from "@/components/BackButton";

export default function GradingPage() {
    return (
        <div className="ptv-content-page">
            <div className="ptv-scanlines" />
            <div className="ptv-vignette" />
            <div className="ptv-noise" />

            <main className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-[160]">

                <div className="text-center mb-12">
                    <h2 className="font-sans text-white text-6xl md:text-8xl tracking-widest mb-2 uppercase text-shadow-glow">
                        GRADING
                    </h2>
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

                {/* Back to Home Link - Standardized at Bottom */}
                <div className="flex justify-center mt-20 pb-12 relative z-[200]">
                    <BackButton />
                </div>
            </main>
        </div>
    );
}
