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
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse text-6xl md:text-7xl lg:text-8xl">
                Team
              </span>
            </h1>
            <p className="text-lg text-white">
              Our team is composed of top talents from TUM and Equation AG, combining academic excellence with industry expertise.
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
          <source src="/images/team.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-neutral-darkest/60" />
      </div>
    </section>
  );
}
