import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from "relume-icons";
import React from "react";

export function Layout25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
              Medium length section heading goes here
            </h2>
            <p className="mb-6 text-lg md:mb-8">
              Our research group delves into transformative approaches within
              the private equity landscape. We aim to uncover insights that
              drive investment success and foster sustainable growth.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-3xl font-bold md:text-4xl">50%</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold md:text-4xl">50%</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-text-primary" />}
              >
                Button
              </Button>
            </div>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full rounded-lg object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}