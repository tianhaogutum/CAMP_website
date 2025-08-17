"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout242() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h3 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl font-bold">
              Understanding Our Research Process: A Step-by-Step Guide
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold mb-5 font-bold md:mb-6">
                Methodologies That Drive Our Research and Insights
              </h3>
              <p className="mb-5 md:mb-6">
                Our research process is designed to ensure thorough and
                impactful findings.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<ChevronRight className="text-text-primary" />}
                  variant="link"
                  size="link"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold mb-5 font-bold md:mb-6">
                Data Collection: The Foundation of Our Research
              </h3>
              <p className="mb-5 md:mb-6">
                We gather extensive data to inform our analyses and conclusions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<ChevronRight className="text-text-primary" />}
                  variant="link"
                  size="link"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold mb-5 font-bold md:mb-6">
                Analysis and Interpretation: Turning Data into Insights
              </h3>
              <p className="mb-5 md:mb-6">
                Our team employs rigorous methodologies to interpret the
                collected data effectively.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<ChevronRight className="text-text-primary" />}
                  variant="link"
                  size="link"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
