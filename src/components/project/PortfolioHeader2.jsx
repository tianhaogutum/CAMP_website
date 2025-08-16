"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader2() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Time-Series Forecasting for Leveraged Buyouts (LBOs)
            </h1>
            <p className="text-lg">
              This research focuses on developing time-series forecasting models for leveraged buyout (LBO) 
              performance and market dynamics. Using advanced statistical methods, we analyze historical 
              LBO data to predict future trends and investment outcomes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Leveraged Buyouts</a>
              </Badge>
              <Badge>
                <a href="#">Time-Series Forecasting</a>
              </Badge>
              <Badge>
                <a href="#">Private Equity</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Researcher</h3>
              <p>Max Knicker</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Private Equity, Leveraged Buyouts</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Historical LBO performance data, market indicators</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Time-Series Analysis, Statistical Forecasting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
