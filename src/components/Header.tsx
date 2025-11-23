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

export function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;
    const isFilmsActive = pathname.startsWith("/autumn") || pathname.startsWith("/cyberpunk");

    return (
        <header className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto] px-6 py-6 md:px-16 md:pt-12 md:pb-8 gap-4 bg-white">
            <h1 className="col-span-full row-start-1 text-center font-cinzel text-2xl md:text-[2rem] font-semibold tracking-[0.2em] text-[#0000ff] mb-4">
                <span className="font-oswald font-extralight tracking-[0.2em] block md:inline mr-2 text-black md:text-[#0000ff]">
                    Directed by
                </span>
                <span className="font-['Bangla_MN'] font-bold italic tracking-[0.3em]">
                    <span className="not-italic">P</span>TV
                </span>
            </h1>

            <nav className="col-span-full md:col-start-1 md:row-start-2 flex flex-wrap justify-center md:justify-start items-center gap-8">
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

            <nav className="col-span-full md:col-start-3 md:row-start-2 flex justify-center md:justify-end items-center gap-8 mt-4 md:mt-0">
                <a
                    href="https://www.instagram.com/petalontv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] text-[1.4rem] hover:opacity-70 transition-opacity flex items-center justify-center"
                    aria-label="Instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://vimeo.com/user249630656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] text-[1.4rem] hover:opacity-70 transition-opacity flex items-center justify-center"
                    aria-label="Vimeo"
                >
                    <i className="fab fa-vimeo-v"></i>
                </a>
                <a
                    href="https://www.youtube.com/@petalontv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000ff] text-[1.4rem] hover:opacity-70 transition-opacity flex items-center justify-center"
                    aria-label="YouTube"
                >
                    <i className="fab fa-youtube"></i>
                </a>
            </nav>
        </header>
    );
}
