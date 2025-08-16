"use client";

import React from "react";

export function Content1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Agent-Based Modelling for Liquidity Forecasting
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              Our research focuses on developing agent-based models for liquidity forecasting in financial markets. 
              Using advanced computational methods, we simulate market participant behavior to predict liquidity 
              dynamics and market microstructure effects.
            </p>
            <p>
              The study employs agent-based modelling techniques to capture the complex interactions between 
              market participants and their impact on liquidity provision. This approach allows us to model 
              heterogeneous agent behavior and emergent market phenomena.
            </p>
            <p>
              This research contributes to the understanding of market liquidity dynamics and suggests potential 
              applications for improving trading strategies and risk management. The agent-based approach could 
              significantly enhance our ability to forecast liquidity conditions in various market scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
