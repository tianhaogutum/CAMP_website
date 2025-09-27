"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Team6() {
  return (
    <section className="w-full pt-8 md:pt-12 lg:pt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-lg md:mb-12 lg:mb-16">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            Research Assistant
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-start">
            <div className="relative mb-5 aspect-square w-64 overflow-hidden md:mb-6 md:w-72">
              <img
                src="/images/nicolas.png"
                alt="Nicolas Pardon, M.Sc"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Nicolas Pardon, M.Sc</h5>
              <h6 className="text-lg">Research Assistant</h6>
            </div>
            <p>
              Passionate about private equity, he leads innovative research
              initiatives.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="relative mb-5 aspect-square w-64 overflow-hidden md:mb-6 md:w-72">
              <img
                src="/images/Julius.png"
                alt="Julius Maisch, M.Sc."
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Julius Maisch, M.Sc.</h5>
              <h6 className="text-lg">Research Assistant</h6>
            </div>
            <p>
              Specialises in data-driven insights to enhance investment
              strategies.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="relative mb-5 aspect-square w-64 overflow-hidden md:mb-6 md:w-72">
              <img
                src="/images/Laura.png"
                alt="Laura Becker"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Laura Becker</h5>
              <h6 className="text-lg">Project Manager</h6>
            </div>
            <p>Coordinates projects to ensure timely and effective delivery.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
