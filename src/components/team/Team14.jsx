"use client";

import React from "react";
import { DribbbleLogo, LinkedinLogo, XLogo } from "relume-icons";

export function Team14() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Expertise</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Professors</h2>
          <p className="text-lg">
            Meet the dedicated professionals behind our research.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-items-start gap-x-8 gap-y-12 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square w-3/4 h-3/4 overflow-hidden md:mb-6">
              <img
                src="/images/BraunReiner.jpg"
                alt="Prof. Dr. Reiner Braun"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Prof. Dr. Reiner Braun</h5>
              <h6 className="text-lg">Chair of Entrepreneurial Finance</h6>
            </div>
            <p>
              Leading research in entrepreneurial finance and private equity, with expertise in AI applications for investment decision-making and market analysis. Professor at TUM School of Management since 2015.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
              <a href="#">
                <LinkedinLogo className="size-6 text-text-primary" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-text-primary" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-text-primary" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="mr-4 text-blue-600 text-xl">•</span>
                <span>Professor and Chair of Entrepreneurial Finance at the Technical University of Munich (TUM) since 2015.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-blue-600 text-xl">•</span>
                <span>Academic Program Director for Master in Management and International Master in Industrial Management at TUM.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-blue-600 text-xl">•</span>
                <span>Former Full Professor of Entrepreneurial Finance at Friedrich-Alexander University Erlangen-Nürnberg (2013–2015).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-blue-600 text-xl">•</span>
                <span>Visiting scholar at Harvard Business School, University of Oxford, and Manchester Metropolitan University.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-blue-600 text-xl">•</span>
                <span>Recipient of the Scientific Award of the German Association for Alternative Investments (2011) and invited as "Global Leader of Tomorrow" at the St. Gallen Symposium (2010).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-blue-600 text-xl">•</span>
                <span>Founding Partner of Captona Beteiligungsgesellschaft mbH with long-standing experience in entrepreneurial finance and private equity.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full max-w-md md:mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
