import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        // Prevent default drag behavior (images) and scrolling on touch
        // But we need to allow interaction, just prevent the native startDrag
        if (e.cancelable && e.type !== 'touchstart') {
            e.preventDefault();
        }
        setIsResizing(true);
    };

    const handleMouseUp = () => setIsResizing(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isResizing || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const newPos = (x / rect.width) * 100;

        setPosition(Math.min(100, Math.max(0, newPos)));
    }, [isResizing]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isResizing || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const newPos = (x / rect.width) * 100;

        setPosition(Math.min(100, Math.max(0, newPos)));
    }, [isResizing]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [handleMouseMove, handleTouchMove]);

    return (
        <div className="relative w-full max-w-[1000px] mx-auto select-none group">
            <div
                ref={containerRef}
                className="relative w-full aspect-video overflow-hidden cursor-ew-resize"
                style={{ touchAction: 'none' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* After Image (Background - Graded) */}
                <div className="absolute inset-0">
                    <img
                        src={afterImage}
                        alt="Graded"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Before Image (Foreground - Log - Clipped) */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    <div className="relative w-full h-full">
                        <img
                            src={beforeImage}
                            alt="Log"
                            className="w-full h-full object-cover scale-[1.02]"
                        />
                    </div>
                </div>

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
            <div className="flex justify-between mt-4 font-oswald text-xs font-light tracking-[0.15em] text-white">
                <span>LOG</span>
                <span className="text-[#0000ff]">GRADED</span>
            </div>
        </div>
    );
}
