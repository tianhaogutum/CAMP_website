"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Contact26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Locations</h2>
          <p className="text-lg">
            Find our offices in Sydney and New York.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full rounded-lg object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-3 font-bold lg:mb-4">Sydney</h3>
            <p className="text-center">123 Sample St, Sydney NSW 2000 AU</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get Directions"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-text-primary" />}
              >
                Get Directions
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full rounded-lg object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-3 font-bold lg:mb-4">New York</h3>
            <p className="text-center">123 Sample St, New York NY 10000 USA</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get Directions"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-text-primary" />}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
