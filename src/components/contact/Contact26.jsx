"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Contact26() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="absolute inset-0 z-0" style={{backgroundColor: '#f1f1f1'}} />
      <div className="relative z-10 container">
        <div className="mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Locations</h2>
          <p className="text-lg">
            Find our two offices in Munich.
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
            <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-3 font-bold lg:mb-4">Munich Office 1</h3>
            <p className="text-center">456 Research Ave, Munich 80339 DE</p>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full rounded-lg object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-3 font-bold lg:mb-4">Munich Office 2</h3>
            <p className="text-center">789 Innovation St, Munich 80339 DE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
