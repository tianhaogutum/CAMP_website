import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header30() {
  return (
    <section className="relative w-full">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-h-[40rem] min-h-[80vh] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="w-full max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold text-white leading-tight md:mb-5 md:text-5xl lg:text-6xl">
              Shaping the Future of Private Markets with AI & Advanced Analytics
            </h1>
            <p className="text-base text-white md:text-lg max-w-3xl mx-auto">
              We are the <span className="font-bold">CEFS AI & Advanced Analytics in Private Markets Group</span> - we aim to redefine the future of private markets through responsible AI and advanced analytics, pioneering a more transparent, inclusive, and intelligent investment ecosystem that transforms how capital is allocated and value is created
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