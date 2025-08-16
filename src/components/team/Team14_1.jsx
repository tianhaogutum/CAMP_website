"use client";

import React from "react";
import { DribbbleLogo, LinkedinLogo, XLogo } from "relume-icons";

export function Team14_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: '#f1f1f1'}}>
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Research Leads</h2>
          <p className="text-lg">
            Meet our research leaders driving innovation in AI-powered private market analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-items-start gap-x-8 gap-y-12 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square w-96 h-96 md:w-[28rem] md:h-[28rem] overflow-hidden md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Dr. Sara Boni</h5>
              <h6 className="text-lg">Research Lead</h6>
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
            <div className="relative mb-5 aspect-square w-96 h-96 md:w-[28rem] md:h-[28rem] overflow-hidden md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-xl font-semibold">Dr. Max Sina Knicker</h5>
              <h6 className="text-lg">Research Lead</h6>
            </div>
            <p>
              Specializing in data modeling and investment trend forecasting.
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
        </div>
        <div className="mt-8 w-full max-w-md md:mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
