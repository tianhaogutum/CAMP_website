"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Let's Collaborate on Research
        </h2>
        <p className="text-lg">
          Reach out to explore collaboration opportunities or request more
          information about our projects.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Contact">Contact</Button>
          <Button title="Learn More" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
