"use client";

import { Badge } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4">Featured Projects</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            Our Key Research Projects
          </h2>
          <p className="text-lg">
            Explore our most impactful research projects in private equity and venture capital.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="/project6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-lg object-cover"
                  alt="European VC Network Analysis"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold mb-2 font-bold">
              <a href="/project6">Europe's Fragmentation in Venture Capital - Myth or Reality?</a>
            </h3>
            <p>
              Examining the connectivity and community structure of the European VC network 
              relative to the US and China using social network analysis.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Venture Capital</a>
              </Badge>
              <Badge>
                <a href="#">Social Network Analysis</a>
              </Badge>
              <Badge>
                <a href="#">Market Research</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-text-primary" />}
              className="mt-5 md:mb-6"
            >
              <a href="/project6">View project</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="/project7">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-lg object-cover"
                  alt="AI and PE Fund Performance Research"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold mb-2 font-bold">
              <a href="/project7">Limited Partners versus Unlimited Machines: AI and PE Fund Performance</a>
            </h3>
            <p>
              Investigating the predictive power of quantitative vs. qualitative data 
              in PE fund prospectuses using machine learning techniques.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Private Equity</a>
              </Badge>
              <Badge>
                <a href="#">Machine Learning</a>
              </Badge>
              <Badge>
                <a href="#">AI & Performance</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-text-primary" />}
              className="mt-5 md:mt-6"
            >
              <a href="/project7">View project</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}
