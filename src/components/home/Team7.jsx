import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Team7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Expertise</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Our Team</h2>
          <p className="text-lg">
            Meet the dedicated professionals driving our research.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/Julius.png"
                alt="Anna Müller"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Anna Müller</h5>
              <h6 className="text-base">Lead Researcher</h6>
            </div>
            <p>
              Passionate about advancing private equity through innovative
              research and analysis.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/nicolas.png"
                alt="Mark Schmidt"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Mark Schmidt</h5>
              <h6 className="text-base">Data Analyst</h6>
            </div>
            <p>
              Specializing in data-driven insights to inform investment
              strategies and decisions.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/Laura.png"
                alt="Lisa Becker"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Lisa Becker</h5>
              <h6 className="text-base">Project Manager</h6>
            </div>
            <p>
              Expert in coordinating research projects and ensuring timely
              delivery of results.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/max.png"
                alt="Tom Wagner"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Tom Wagner</h5>
              <h6 className="text-base">Financial Analyst</h6>
            </div>
            <p>
              Focused on evaluating market trends to optimize investment
              portfolios.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/sara.png"
                alt="Sophie Klein"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Sophie Klein</h5>
              <h6 className="text-base">Research Assistant</h6>
            </div>
            <p>
              Assisting in data collection and analysis for ongoing research
              initiatives.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/Laura.png"
                alt="We're hiring!"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">We're hiring!</h5>
              <h6 className="text-base">Join Us</h6>
            </div>
            <p>
              Explore exciting career opportunities to contribute to innovative
              research in private equity.
            </p>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4">We're hiring!</h4>
          <p className="text-lg">Discover your potential with us today.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Open Positions" variant="secondary">
              Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}