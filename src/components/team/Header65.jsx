"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header65() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto max-w-lg text-center">
        <p className="mb-3 font-semibold text-white md:mb-4">Expertise</p>
        <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
          Meet Our Team
        </h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Contact" variant="secondary-alt">
            Contact
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
