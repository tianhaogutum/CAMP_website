"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader9() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Nowcasting Private Market Valuations (In Development)
            </h1>
            <p className="text-lg">
              This research examines nowcasting methods for more accurate, timely NAV estimates in private markets, 
              aiming to refine data accuracy and model robustness. We propose an illiquid asset portfolio optimization 
              model using a covariance matrix of expected returns, addressing private market volatility in portfolio management.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Private Markets</a>
              </Badge>
              <Badge>
                <a href="#">Nowcasting</a>
              </Badge>
              <Badge>
                <a href="#">Portfolio Optimization</a>
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
              <p>Private Markets, Private Equity</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>NAVs, high-frequency financial indicators, alternative data sources</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Nowcasting techniques, Asset Pricing Model</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
