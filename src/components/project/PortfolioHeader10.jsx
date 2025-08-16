"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader10() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Applying Bayesian Methodologies to Disentangle Skill from Luck in Private Markets (In Development)
            </h1>
            <p className="text-lg">
              This research aims to extend Bayesian frameworks to better isolate investment skill from luck in private equity, 
              building on prior research to enhance fund selection insights and decision-making within PE firms. We anticipate 
              applying advanced Bayesian models to analyze investment dynamics within private equity fund selections.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Private Equity</a>
              </Badge>
              <Badge>
                <a href="#">Bayesian Methods</a>
              </Badge>
              <Badge>
                <a href="#">Skill vs. Luck</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Project Lead</h3>
              <p>Sara Boni</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Private Equity</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Private equity fund performance data, institutional investment data</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Bayesian econometrics, skill vs. luck decomposition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
