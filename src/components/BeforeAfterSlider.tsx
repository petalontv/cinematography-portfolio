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
                    className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none scale-[1.02]"
                />

                {/* Before Image (Foreground - Log - Left side - Clipped) */}
                <img
                    src={beforeImage}
                    alt="Log"
                    className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none scale-[1.02]"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                />

                {/* Divider */}
                <div
                    className="absolute top-0 h-full w-[2px] bg-white z-10 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-1 h-4 bg-[#cccccc] rounded-full" />
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
