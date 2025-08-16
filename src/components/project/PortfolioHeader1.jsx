"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader1() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Agent-Based Modelling for Liquidity Forecasting
            </h1>
            <p className="text-lg">
              This research focuses on developing agent-based models for liquidity forecasting in financial markets. 
              Using advanced computational methods, we simulate market participant behavior to predict liquidity 
              dynamics and market microstructure effects.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Liquidity Forecasting</a>
              </Badge>
              <Badge>
                <a href="#">Agent-Based Modelling</a>
              </Badge>
              <Badge>
                <a href="#">Market Microstructure</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Researchers</h3>
              <p>Nicki Pardon, Max Knicker</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Financial Markets</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Market microstructure data, trading behavior data</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Agent-Based Modelling, Computational Simulation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
