"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header65() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
          Get in 
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Touch
          </span>
        </h1>
        <p className="text-lg text-white">
          We’re here to answer your questions and collaborate on innovative
          research in private equity.
        </p>

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
