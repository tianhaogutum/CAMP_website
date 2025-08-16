"use client";

import React from "react";

export function Content9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Nowcasting Private Market Valuations (In Development)
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              Our research examines nowcasting methods for more accurate, timely NAV estimates in private markets, 
              aiming to refine data accuracy and model robustness. We utilize NAVs, high-frequency financial indicators, 
              and alternative data sources to develop advanced forecasting techniques.
            </p>
            <p>
              The study proposes an illiquid asset portfolio optimization model using a covariance matrix of expected 
              returns, addressing private market volatility in portfolio management. This approach aims to provide 
              more accurate and timely valuation estimates for private market investments.
            </p>
            <p>
              This research contributes to the understanding of private market dynamics and suggests potential 
              applications for improving portfolio management strategies in illiquid asset classes. The nowcasting 
              techniques could significantly enhance decision-making processes for private market investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
