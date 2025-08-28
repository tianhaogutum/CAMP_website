"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header65() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-h-[40rem] min-h-[85vh] items-center justify-center py-12 text-center md:py-16 lg:py-20">
          <div className="w-full max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
              Get in{' '}
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] drop-shadow-[0_0_60px_rgba(34,211,238,0.4)] text-6xl md:text-7xl lg:text-8xl">
                Touch
              </span>
            </h1>
            <p className="text-lg text-white">
              We’re here to answer your questions and collaborate on innovative
              research in private equity.
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
        >
          <source src="/images/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
