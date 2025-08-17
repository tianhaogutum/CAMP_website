"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

const useAnimationSection = () => {
  const scrollSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return { scrollSection, height };
};

export function Layout121() {
  const animationProps = useAnimationSection();
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Milestones</p>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
              Project Timeline Overview
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="View"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-text-primary" />}
              >
                View
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[10%] right-auto left-8 h-3/4 w-0.5 bg-neutral-darkest/15 md:left-[2.4375rem]">
              <motion.div
                className="bg-neutral-darkest"
                style={{ height: animationProps.height }}
                ref={animationProps.scrollSection}
              />
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-text-primary" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-2 text-lg font-bold mb-3 font-bold md:mb-4">Phase One</h6>
                <p>
                  Initiation of the project with initial research and team
                  formation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-text-primary" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-2 text-lg font-bold mb-3 font-bold md:mb-4">Phase Two</h6>
                <p>
                  Development of key strategies and frameworks for project
                  execution.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-text-primary" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-2 text-lg font-bold mb-3 font-bold md:mb-4">
                  Phase Three
                </h6>
                <p>
                  Implementation of strategies with ongoing monitoring and
                  adjustments.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-text-primary" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="mb-2 text-lg font-bold mb-3 font-bold md:mb-4">
                  Phase Four
                </h6>
                <p>
                  Final evaluation and reporting of project outcomes and
                  learnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
