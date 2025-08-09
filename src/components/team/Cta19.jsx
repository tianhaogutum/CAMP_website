"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            Connect with Our Expert Team
          </h2>
          <p className="text-lg">
            We’re here to answer your questions and explore potential
            collaborations. Reach out today!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Inquire">Inquire</Button>
            <Button title="Collaborate" variant="secondary">
              Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
