"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Youtube } from "lucide-react";

// Custom Vimeo icon since Lucide doesn't have it exactly or maybe it does, but let's use a simple SVG or FontAwesome if needed.
// Actually Lucide doesn't have brand icons usually. I'll use FontAwesome classes if I include the CDN, or just SVGs.
// The original used FontAwesome. I'll use SVGs for better performance/modern approach.

const VimeoIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className={className}
    >
        {/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M444.4 98.2c-5.8-47-45.3-51.9-89.6-18.2-34.6 26.7-51.4 91.2-62.3 141.9C281.9 275.1 273.7 400 184.6 400c-23.6 0-43.6-23.8-43.6-53.9 0-57.6 32.2-127.1 32.2-127.1 6.5-25.1 1.9-51.9-26.9-51.9-21.9 0-43.6 22.7-63.6 46.5 0 0-13.9 16.6-27.3 32.7L0 197.4c3.9-5.3 29.1-38.2 38.2-46.5 36.6-33.6 76.7-55.9 111.4-55.9 61 0 81.1 48.1 81.1 106.1 0 21.1-2.6 42.1-5.2 62.1-8.8 67.7-23.6 136.6 22.4 136.6 17.6 0 32.2-16.6 42.1-34.7 21.7-39.6 18.6-106.1 18.6-106.1 0-91.2 46.5-134.6 112.1-134.6 29.6 0 41.6 19.1 23.7 73.2z" />
    </svg>
);

export function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;
    const isFilmsActive = pathname.startsWith("/autumn") || pathname.startsWith("/cyberpunk");

    return (
        <header className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto] px-6 py-6 md:px-16 md:pt-12 md:pb-8 gap-4 bg-white">
            <h1 className="col-span-full row-start-1 text-center font-cinzel text-2xl md:text-3xl font-semibold tracking-[0.2em] text-[#0000ff] mb-4">
                <span className="font-oswald font-extralight tracking-[0.2em] block md:inline mr-2 text-black md:text-[#0000ff]">
                    Directed by
                </span>
                <span className="font-serif font-bold italic tracking-[0.3em]">
                    <span className="not-italic">P</span>TV
                </span>
            </h1>

            <nav className="col-span-full md:col-start-1 md:row-start-2 flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
                <Link
                    href="/"
                    className={cn(
                        "text-[#0000ff] no-underline font-oswald text-xs font-light tracking-[0.15em] hover:opacity-70 transition-opacity",
                        isActive("/") && "underline"
                    )}
                >
                    HOME
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger
                        className={cn(
                            "text-[#0000ff] bg-transparent border-none font-oswald text-xs font-light tracking-[0.15em] hover:opacity-70 transition-opacity cursor-pointer p-0 outline-none",
                            isFilmsActive && "underline"
                        )}
                    >
                        FILMS
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white min-w-[200px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] rounded-none border-none p-4">
                        <DropdownMenuItem asChild>
                            <Link
                                href="/autumn"
                                className="text-[#0000ff] block font-oswald text-[0.7rem] font-light tracking-[0.12em] hover:opacity-70 transition-opacity cursor-pointer"
                            >
                                AUTUMN
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                href="/cyberpunk"
                                className="text-[#0000ff] block font-oswald text-[0.7rem] font-light tracking-[0.12em] hover:opacity-70 transition-opacity cursor-pointer"
                            >
                                CYBERPUNK
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Link
                    href="/grading"
                    className={cn(
                        "text-[#0000ff] no-underline font-oswald text-xs font-light tracking-[0.15em] hover:opacity-70 transition-opacity",
                        isActive("/grading") && "underline"
                    )}
                >
                    GRADING
                </Link>
                <Link
                    href="/contact"
                    className={cn(
                        "text-[#0000ff] no-underline font-oswald text-xs font-light tracking-[0.15em] hover:opacity-70 transition-opacity",
                        isActive("/contact") && "underline"
                    )}
                >
                    CONTACT
                </Link>
            </nav>

            <nav className="col-span-full md:col-start-3 md:row-start-2 flex justify-center md:justify-end items-center gap-6 md:gap-8 mt-4 md:mt-0">
                <a
                    href="https://www.instagram.com/petalontv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] text-[1.4rem] hover:opacity-70 transition-opacity flex items-center justify-center"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a
                    href="https://vimeo.com/user249630656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] text-[1.4rem] hover:opacity-70 transition-opacity flex items-center justify-center"
                    aria-label="Vimeo"
                >
                    <VimeoIcon className="w-5 h-5" />
                </a>
                <a
                    href="https://www.youtube.com/@petalontv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] text-[1.4rem] hover:opacity-70 transition-opacity flex items-center justify-center"
                    aria-label="YouTube"
                >
                    <Youtube className="w-5 h-5" />
                </a>
            </nav>
        </header>
    );
}
