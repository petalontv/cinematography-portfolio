import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export default function GradingPage() {
    return (
        <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 min-h-[calc(100vh-200px)]">
            <div className="text-center mb-16">
                <h2 className="font-['Satoshi'] text-4xl md:text-[2.5rem] font-bold tracking-[0.2em] text-[#0000ff] mb-2">
                    GRADING
                </h2>
                <p className="font-oswald text-[0.9rem] font-light tracking-[0.12em] text-[#333333]">
                    Before & After Comparison
                </p>
            </div>

            <div className="flex flex-col gap-16">
                <div className="w-full">
                    <BeforeAfterSlider
                        beforeImage="/photos/Grading/before1.png"
                        afterImage="/photos/Grading/after1.png"
                    />
                </div>
                <div className="w-full">
                    <BeforeAfterSlider
                        beforeImage="/photos/Grading/before2.png"
                        afterImage="/photos/Grading/after2.png"
                    />
                </div>
                <div className="w-full">
                    <BeforeAfterSlider
                        beforeImage="/photos/Grading/before3.png"
                        afterImage="/photos/Grading/after3.png"
                    />
                </div>
                <div className="w-full">
                    <BeforeAfterSlider
                        beforeImage="/photos/Grading/before4.png"
                        afterImage="/photos/Grading/after4.png"
                    />
                </div>
                <div className="w-full">
                    <BeforeAfterSlider
                        beforeImage="/photos/Grading/before5.png"
                        afterImage="/photos/Grading/after5.png"
                    />
                </div>
            </div>
        </main>
    );
}
