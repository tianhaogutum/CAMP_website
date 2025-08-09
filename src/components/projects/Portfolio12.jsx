"use client";

import { Badge } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            Ongoing Research Papers
          </h2>
          <p className="text-lg">
            Explore our impactful contributions to private equity research.
          </p>
        </header>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <article className="mb-8 break-inside-avoid">
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
              <a href="#">Market Analysis</a>
            </h3>
            <p>In-depth study of market trends and investment opportunities.</p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Research Insights</a>
              </Badge>
              <Badge>
                <a href="#">Investment Strategies</a>
              </Badge>
              <Badge>
                <a href="#">Data Analytics</a>
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
          <article className="mb-8 break-inside-avoid">
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
              <a href="#">Sustainability Initiatives</a>
            </h3>
            <p>
              Exploring sustainable investment practices for long-term growth.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Sustainable Finance</a>
              </Badge>
              <Badge>
                <a href="#">Impact Investing</a>
              </Badge>
              <Badge>
                <a href="#">Green Projects</a>
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
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-lg object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold mb-2 font-bold">
              <a href="#">Technology Innovations</a>
            </h3>
            <p>
              Leveraging technology to enhance investment decision-making
              processes.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Tech Solutions</a>
              </Badge>
              <Badge>
                <a href="#">Digital Transformation</a>
              </Badge>
              <Badge>
                <a href="#">AI Applications</a>
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
          <article className="mb-8 break-inside-avoid">
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
              <a href="#">Risk Management</a>
            </h3>
            <p>
              Developing frameworks to mitigate investment risks effectively.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Risk Assessment</a>
              </Badge>
              <Badge>
                <a href="#">Financial Modelling</a>
              </Badge>
              <Badge>
                <a href="#">Portfolio Diversification</a>
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
          <article className="mb-8 break-inside-avoid">
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
              <a href="#">Market Trends</a>
            </h3>
            <p>
              Identifying emerging trends to inform strategic investment
              decisions.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Market Research</a>
              </Badge>
              <Badge>
                <a href="#">Economic Analysis</a>
              </Badge>
              <Badge>
                <a href="#">Investment Outlook</a>
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
          <article className="mb-8 break-inside-avoid">
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
              <a href="#">Collaborative Studies</a>
            </h3>
            <p>
              Partnering with industry leaders for comprehensive research
              initiatives.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Partnership Opportunities</a>
              </Badge>
              <Badge>
                <a href="#">Joint Ventures</a>
              </Badge>
              <Badge>
                <a href="#">Research Collaborations</a>
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
        <footer className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </footer>
      </div>
    </section>
  );
}
