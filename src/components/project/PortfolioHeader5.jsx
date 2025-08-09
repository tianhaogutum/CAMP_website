"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader5() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Innovative Equity Solutions
            </h1>
            <p className="text-lg">
              This project aims to revolutionize private equity strategies
              through advanced research and collaboration.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Equity Research</a>
              </Badge>
              <Badge>
                <a href="#">Collaborative Innovation</a>
              </Badge>
              <Badge>
                <a href="#">Market Analysis</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Client</h3>
              <p>Global Investors</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Date</h3>
              <p>March 2023</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Role</h3>
              <p>Lead Researcher</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Website</h3>
              <a href="#" className="underline">
                www.relume.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
