"use client";

import React from "react";

export function Content7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Limited Partners versus Unlimited Machines: Artificial Intelligence and the Performance of Private Equity Funds
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              Our research investigates the predictive power of quantitative vs. qualitative data in PE fund prospectuses. 
              Using a proprietary dataset of 395 private equity fund prospectuses and advanced econometric analysis 
              combined with machine learning techniques, we analyze the relationship between prospectus information 
              and fund performance.
            </p>
            <p>
              The study reveals that quantitative metrics are linked to fundraising success but not future performance, 
              whereas machine learning can leverage qualitative information to predict fund success with a 25% performance 
              spread between top and bottom terciles. This highlights a potential investor oversight in utilizing 
              qualitative data effectively.
            </p>
            <p>
              This research provides valuable insights for limited partners, fund managers, and researchers seeking 
              to understand and improve private equity fund selection. The findings suggest that leveraging artificial 
              intelligence to analyze qualitative prospectus data could significantly enhance investment decision-making 
              and fund performance prediction. This research has received press coverage in Institutional Investor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
