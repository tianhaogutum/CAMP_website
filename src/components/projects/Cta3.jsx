"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta3() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="mx-auto w-full max-w-lg text-center">
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl">
            Let's Collaborate on Research
          </h2>
          <p className="text-lg text-white">
            Reach out to explore collaboration opportunities or to learn more
            about our projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Contact">Contact</Button>
            <Button title="Inquire" variant="secondary-alt">
              Inquire
            </Button>
          </div>
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
