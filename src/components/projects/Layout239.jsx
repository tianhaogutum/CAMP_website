"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-lg text-center">
              <p className="mb-3 font-semibold md:mb-4">Projects</p>
              <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                Explore Our Completed Research
              </h2>
              <p className="text-lg">
                Our research group is dedicated to advancing knowledge in the
                private equity sector. Here are three of our most impactful
                projects that showcase our commitment to innovation and
                excellence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-5 font-bold md:mb-6">
                Project Alpha: Transforming Investment Strategies
              </h3>
              <p>
                This project focuses on developing cutting-edge methodologies
                for evaluating investment opportunities.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-5 font-bold md:mb-6">
                Project Beta: Enhancing Market Analysis Techniques
              </h3>
              <p>
                We aim to refine market analysis tools to improve
                decision-making processes.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 mb-5 font-bold md:mb-6">
                Project Gamma: Sustainable Investment Practices
              </h3>
              <p>
                This initiative promotes environmentally responsible investment
                strategies.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Learn More</Button>
            <Button
              iconRight={<ChevronRight className="text-text-primary" />}
              variant="link"
              size="link"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
