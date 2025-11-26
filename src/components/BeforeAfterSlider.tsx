"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, percentage)));
    }, []);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = useCallback(
        (e: MouseEvent | TouchEvent) => {
            if (!isDragging.current) return;
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            updatePosition(clientX);
        },
        [updatePosition]
    );

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => handleMouseMove(e);
        const handleUp = () => handleMouseUp();

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleUp);
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", handleUp);

        return () => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleUp);
            document.removeEventListener("touchmove", handleMove);
            document.removeEventListener("touchend", handleUp);
        };
    }, [handleMouseMove]);

    const handleClick = (e: React.MouseEvent) => {
        updatePosition(e.clientX);
    }

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className="relative w-full aspect-video overflow-hidden bg-[#f5f5f5] border border-[#e0e0e0] cursor-col-resize select-none touch-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onClick={handleClick}
            >
                {/* After Image (Background - Graded - Right side) */}
                <img
                    src={afterImage}
                    alt="Graded"
                    className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Before Image (Foreground - Log - Left side - Clipped) */}
                <img
                    src={beforeImage}
                    alt="Log"
                    className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                />

                {/* Divider */}
                <div
                    className="absolute top-0 h-full w-1 bg-[#0000ff] z-10 pointer-events-none"
                    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0000ff] border-[3px] border-white rounded-full shadow-md flex items-center justify-center text-white text-sm font-bold">
                        ↔
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4 font-oswald text-xs font-light tracking-[0.15em] text-[#666666]">
                <span>LOG</span>
                <span className="text-[#0000ff]">GRADED</span>
            </div>
        </div>
    );
}
