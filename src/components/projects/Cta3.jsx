"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta3() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28">
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center">
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl">
            Let's Collaborate on Research
          </h2>
          <p className="text-lg text-white">
            Reach out to explore collaboration opportunities or to learn more
            about our projects.
          </p>
          <div className="mt-6 flex justify-center md:mt-8">
            <Button title="Contact" variant="secondary-alt" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>
              <a href="/contact">Contact</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/collaborate.jpg"
          className="size-full object-cover"
          alt="Collaboration background"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
