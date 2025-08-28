import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header30() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-h-[40rem] min-h-[85vh] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="w-full max-w-5xl">
            {/* Animated badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 text-sm font-medium text-white">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Leading AI Research in Private Markets
            </div>
            
            <h1 className="mb-6 text-4xl font-display font-bold text-white leading-tight tracking-tight md:mb-8 md:text-6xl lg:text-7xl">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Private Markets
              </span>
              with AI & Advanced Analytics
            </h1>
            
            <p className="text-lg text-white/90 md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
              We are the <span className="font-semibold text-white">CEFS AI & Advanced Analytics in Private Markets Group</span> - pioneering a more transparent, inclusive, and intelligent investment ecosystem that transforms how capital is allocated and value is created.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">Explore Research</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Watch Demo
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </button>
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