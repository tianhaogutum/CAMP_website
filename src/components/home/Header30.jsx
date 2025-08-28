import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header30() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-h-[40rem] min-h-[85vh] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="w-full max-w-5xl">
            <h1 className="mb-6 text-4xl font-display font-bold text-white leading-tight tracking-tight md:mb-8 md:text-6xl lg:text-7xl">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse text-5xl md:text-6xl lg:text-7xl">
                Private Markets
              </span>
              with AI & Advanced Analytics
            </h1>
            
            <p className="text-lg text-white/90 md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
              We are the <span className="font-semibold text-white">CEFS AI & Advanced Analytics in Private Markets Group</span> - pioneering a more transparent, inclusive, and intelligent investment ecosystem that transforms how capital is allocated and value is created.
            </p>
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
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/images/homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}