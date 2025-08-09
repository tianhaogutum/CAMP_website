"use client";

import { Badge } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            Our Key Research Projects
          </h2>
          <p className="text-lg">
            Explore our innovative projects in private equity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-lg object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold mb-2 font-bold">
              <a href="#">Market Analysis Tool</a>
            </h3>
            <p>
              A comprehensive tool for analyzing market trends and investment
              opportunities.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Tag one</a>
              </Badge>
              <Badge>
                <a href="#">Tag two</a>
              </Badge>
              <Badge>
                <a href="#">Tag three</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-text-primary" />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-lg object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold mb-2 font-bold">
              <a href="#">Investment Strategy Study</a>
            </h3>
            <p>
              In-depth research on effective investment strategies in private
              equity.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Tag one</a>
              </Badge>
              <Badge>
                <a href="#">Tag two</a>
              </Badge>
              <Badge>
                <a href="#">Tag three</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-text-primary" />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
