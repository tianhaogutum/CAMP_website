"use client";

import React from "react";

export function Logo2() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-xl font-bold text-white md:max-w-none lg:max-w-none">
            We sincerely thank Equation AG for their collaboration and sponsorship.
          </h1>
          <p className="text-lg italic text-white mt-2">
            Equation AG is a Munich-based, data-driven asset management company focused on private equity and venture capital.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <a
              href="https://www.equationcap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/images/equaition_equity_innovation_logo.jpeg"
                alt="Equation Equity Innovation Logo"
                className="max-h-16 md:max-h-20"
              />
            </a>
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
