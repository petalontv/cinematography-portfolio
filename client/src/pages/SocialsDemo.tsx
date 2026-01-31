import { useState } from "react";
import { Link } from "wouter";

export default function SocialsDemo() {
    return (
        <div className="ptv-content-page overflow-y-auto">
            <div className="ptv-scanlines" />
            <div className="ptv-vignette" />
            <div className="ptv-noise" />

            <main className="w-full max-w-[1200px] mx-auto px-4 py-8 relative z-[160] flex flex-col gap-24 text-white font-['VT323']">
                <div className="text-center">
                    <Link href="/">
                        <button className="ptv-sub-button" style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
                            BACK
                        </button>
                    </Link>
                    <h1 className="text-4xl text-shadow-glow mb-2 uppercase">Professional Concepts</h1>
                    <p className="text-xl opacity-60 uppercase tracking-widest">Minimalist & Broadcast Style</p>
                </div>

                {/* CONCEPT 1: BROADCAST STATUS BAR */}
                <section className="relative">
                    <h2 className="text-xl mb-4 text-white/50 tracking-widest uppercase">1. Broadcast OSD Bar (Sticky Bottom)</h2>
                    <div className="w-full h-64 bg-[#050510] border border-white/10 relative overflow-hidden flex items-center justify-center">
                        <p className="text-white/20">Site Content Here...</p>

                        {/* The Bar */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-lg font-['VT323'] tracking-wider text-white/70 uppercase">
                            <div className="flex gap-6">
                                <span>REC ● 00:04:22</span>
                                <span className="opacity-50">|</span>
                                <span>BAT 98%</span>
                            </div>
                            <div className="flex gap-8">
                                {/* Links */}
                                <a href="#" className="hover:text-white hover:text-shadow-glow transition-all">YOUTUBE</a>
                                <a href="#" className="hover:text-white hover:text-shadow-glow transition-all">INSTAGRAM</a>
                                <a href="#" className="hover:text-white hover:text-shadow-glow transition-all">VIMEO</a>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-white/30">Matches the "Camera Viewfinder" aesthetic. Discreet but accessible.</p>
                </section>

                {/* CONCEPT 2: CORNER WATERMARK */}
                <section className="relative">
                    <h2 className="text-xl mb-4 text-white/50 tracking-widest uppercase">2. Signal Watermark (Top Corner)</h2>
                    <div className="w-full h-64 bg-[#050510] border border-white/10 relative overflow-hidden flex items-center justify-center">
                        <p className="text-white/20">Site Content Here...</p>

                        {/* The Watermark */}
                        <div className="absolute top-6 right-8 text-right flex flex-col gap-1">
                            <div className="text-xs text-white/40 tracking-[0.2em] mb-1">SIGNAL SOURCE</div>
                            <a href="#" className="text-xl hover:text-white text-white/60 hover:text-shadow-glow transition-all tracking-widest">
                                YT / IG / VM
                            </a>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-white/30">Like a TV channel logo. Clean, unobtrusive, high-end.</p>
                </section>

                {/* CONCEPT 3: INTEGRATED MENU */}
                <section className="relative">
                    <h2 className="text-xl mb-4 text-white/50 tracking-widest uppercase">3. Hero Menu Integration</h2>
                    <div className="w-full h-64 bg-[#050510] border border-white/10 relative overflow-hidden flex items-center justify-center">

                        <div className="flex flex-col gap-4 w-64">
                            <div className="text-2xl text-white/40 border-b border-white/20 pb-2">MENU</div>
                            <div className="text-3xl text-white/50">FILMS</div>
                            <div className="text-3xl text-white/50">GRADING</div>
                            <div className="text-3xl text-white/50">CONTACT</div>

                            {/* Socials added here */}
                            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                                <div className="text-xs text-white/30 tracking-[0.2em] uppercase">Connect</div>
                                <div className="flex gap-4 text-xl">
                                    <a href="#" className="text-white hover:text-[#0000ff] transition-colors">YOUTUBE</a>
                                    <a href="#" className="text-white hover:text-[#0000ff] transition-colors">INSTAGRAM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-white/30">Part of the main navigation flow. Simplest approach.</p>
                </section>

            </main>
        </div>
    );
}
