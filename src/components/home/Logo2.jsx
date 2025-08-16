"use client";

import React from "react";

export function Logo2() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-xl font-bold md:max-w-none lg:max-w-none">
            We sincerely thank Equation AG for their collaboration and sponsorship.
          </h1>
          <p className="text-lg italic text-gray-600 mt-2">
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
    </section>
  );
}
