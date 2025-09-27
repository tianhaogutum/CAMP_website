"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Contact26() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28">
      <div className="absolute inset-0 z-0" style={{backgroundColor: '#f1f1f1'}} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Locations</h2>
          <p className="text-lg">Visit us at our strategic locations in Munich's academic and business districts.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8 overflow-hidden rounded-lg">
              <img
                src="/images/tum_management.jpg"
                className="h-full w-full object-cover"
                alt="TUM School of Management"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-3 font-bold lg:mb-4">TUM School of Management</h3>
            <p className="text-center">Arcisstraße 21<br />80333 München</p>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8 overflow-hidden rounded-lg">
              <img
                src="/images/equation.png"
                className="h-full w-full object-cover"
                alt="Equation AG Munich Office"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-3 font-bold lg:mb-4">Equation AG</h3>
            <p className="text-center">Schellingstr. 35<br />80799 Munich</p>
          </div>
        </div>
      </div>
    </section>
  );
}
