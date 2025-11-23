export default function ContactPage() {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-16 max-w-[1400px] mx-auto min-h-[calc(100vh-200px)] items-center">
            <div className="w-full aspect-[3/4] overflow-hidden">
                <div className="w-full h-full bg-[#0000ff]"></div>
            </div>
            <div className="text-left">
                <h2 className="font-['Bangla_MN'] text-4xl font-bold italic tracking-[0.15em] mb-6 text-black">
                    <span className="not-italic">P</span>TV
                </h2>
                <p className="mb-8">
                    <a href="mailto:contact@petalontv.com" className="text-[#0000ff] no-underline font-oswald text-base font-light tracking-[0.12em] hover:opacity-70 transition-opacity">
                        CONTACT@PETALONTV.COM
                    </a>
                </p>
                <p className="font-oswald text-[0.95rem] font-light leading-[1.8] tracking-[0.08em] text-[#333333]">
                    I love transforming ideas into visuals that stand out and leave an impression.
                    Working with my Sony FX3, I’m always exploring new ways to elevate my work — pushing towards something truly cinematic.
                </p>
            </div>
        </main>
    );
}
