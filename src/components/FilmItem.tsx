"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface FilmItemProps {
    href?: string;
    imageSrc?: string;
    title: string;
    delay?: number;
}

export function FilmItem({ href, imageSrc, title, delay = 0 }: FilmItemProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const Content = (
        <>
            <div className="overflow-hidden aspect-video bg-[#f5f5f5] border border-[#e0e0e0] w-full min-h-[200px] md:min-h-[380px] group relative box-border">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={`${title} thumbnail`}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#f0f0f0] text-[#0000ff] font-oswald text-xl md:text-2xl font-light tracking-[0.2em] transition-transform duration-500 ease-out group-hover:scale-105">
                        PLACEHOLDER
                    </div>
                )}
            </div>
            <h3 className="mt-6 font-oswald text-[1.1rem] font-light tracking-[0.15em] text-[#0000ff] uppercase">
                {title}
            </h3>
        </>
    );

    return (
        <div
            ref={ref}
            className="film-item cursor-pointer opacity-0 translate-y-[60px] transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform]"
            style={{ transitionDelay: `${delay}s` }}
        >
            {href ? (
                <Link href={href} className="block no-underline text-inherit">
                    {Content}
                </Link>
            ) : (
                <div>{Content}</div>
            )}
        </div>
    );
}
