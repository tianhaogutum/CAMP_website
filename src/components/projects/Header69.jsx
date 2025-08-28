"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-h-[40rem] min-h-[85vh] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="w-full max-w-5xl">
          <h1 className="mb-8 text-5xl font-display font-bold text-white leading-tight tracking-tight md:mb-10 md:text-6xl lg:text-7xl">
            Our Research
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse text-6xl md:text-7xl lg:text-8xl">
              Projects
            </span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Explore the cutting-edge projects that drive our research and shape the future of private equity through innovative AI and advanced analytics
          </p>

          {/* Stats or highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-white/70">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-white/70">Research Areas</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/images/research.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
    </section>
  );
}
