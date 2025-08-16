"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader11() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Benchmarking Private Equity Cash Flow Forecasting: A Machine Learning Approach with Superior Risk-Adjusted Performance
            </h1>
            <p className="text-lg">
              This research develops a machine learning framework to improve private equity liquidity modeling 
              by capturing fund-specific patterns and market conditions. Our approach outperforms traditional 
              models in accuracy and interpretability, reducing prediction errors by up to 10% and downside 
              risk by 25%.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Private Equity</a>
              </Badge>
              <Badge>
                <a href="#">Machine Learning</a>
              </Badge>
              <Badge>
                <a href="#">Cash Flow Forecasting</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Project Lead</h3>
              <p>Nicolas Pardon, Max Knicker</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Private Equity</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>PREQIN Private equity fund performance data, Bloomberg Public Markets data</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
