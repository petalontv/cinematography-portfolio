import Link from "next/link";

export function Footer() {
    return (
        <footer className="text-center px-8 py-12 mt-16">
            <p className="font-oswald text-[0.85rem] font-light tracking-[0.12em] text-black mb-8">
                CONTACT:{" "}
                <a
                    href="mailto:contact@petalontv.com"
                    className="text-[#0000ff] no-underline font-semibold hover:opacity-70 transition-opacity"
                >
                    CONTACT@PETALONTV.COM
                </a>
            </p>
            <p className="font-oswald text-[0.7rem] opacity-70 inline-flex items-center justify-center flex-wrap gap-[0.2em] leading-relaxed">
                This work is licensed under{" "}
                <a
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] underline font-normal hover:opacity-70 transition-opacity"
                >
                    CC BY-NC-ND 4.0
                </a>
                <img
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                    alt="CC"
                    className="w-[0.9em] h-[0.9em] ml-[0.15em] align-middle opacity-70 inline-block object-contain"
                />
                <img
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                    alt="BY"
                    className="w-[0.9em] h-[0.9em] ml-[0.15em] align-middle opacity-70 inline-block object-contain"
                />
                <img
                    src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
                    alt="NC"
                    className="w-[0.9em] h-[0.9em] ml-[0.15em] align-middle opacity-70 inline-block object-contain"
                />
                <img
                    src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
                    alt="ND"
                    className="w-[0.9em] h-[0.9em] ml-[0.15em] align-middle opacity-70 inline-block object-contain"
                />
            </p>
        </footer>
    );
}
