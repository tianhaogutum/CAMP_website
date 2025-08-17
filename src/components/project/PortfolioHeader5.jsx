"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader5() {
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Limited Partners versus Unlimited Machines: Artificial Intelligence and the Performance of Private Equity Funds
            </h1>
            <p className="text-lg">
              This research investigates the predictive power of quantitative vs. qualitative data in PE fund prospectuses. 
              Using a proprietary dataset of 395 private equity fund prospectuses and advanced econometric analysis 
              combined with machine learning techniques, we find that quantitative metrics are linked to fundraising 
              success but not future performance, whereas machine learning can leverage qualitative information to predict 
              fund success with a 25% performance spread between top and bottom terciles.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
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
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Researchers</h3>
              <p>Alex Jürgens, Stefan Weik, Alex Schneider</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Private Equity</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>395 PE Fund Prospectuses</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Econometric Analysis, Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
