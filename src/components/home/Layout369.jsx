import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from "relume-icons";
import React from "react";

export function Layout369() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Driving Research Excellence</p>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
              From Data to Decisions
            </h2>
            <p className="text-lg">
              Exploring the potential of AI to transform private markets
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2 border border-border-primary rounded-lg">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Research</p>
                  <h3 className="mb-2 text-xl font-bold">
                    Comprehensive Market Analysis
                  </h3>
                  <p>In-depth insights into market trends and dynamics.</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Learn More"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-text-primary" />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary rounded-lg">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Insights</p>
                  <h3 className="mb-2 text-xl font-bold">
                    Strategic Investment Guidance
                  </h3>
                  <p>Tailored strategies for optimal investment decisions.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Sign Up"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-text-primary" />}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary rounded-lg">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Insights</p>
                  <h3 className="mb-2 text-xl font-bold">
                    Strategic Investment Guidance
                  </h3>
                  <p>Tailored strategies for optimal investment decisions.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Sign Up"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-text-primary" />}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}