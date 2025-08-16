"use client";

import React from "react";

export function Content2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Time-Series Forecasting for Leveraged Buyouts (LBOs)
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              Our research focuses on developing time-series forecasting models for leveraged buyout (LBO) 
              performance and market dynamics. Using advanced statistical methods, we analyze historical 
              LBO data to predict future trends and investment outcomes.
            </p>
            <p>
              The study employs sophisticated time-series analysis techniques to identify patterns and 
              trends in LBO performance data. This approach allows us to develop predictive models 
              for LBO success rates, exit timing, and return expectations.
            </p>
            <p>
              This research contributes to the understanding of LBO market dynamics and suggests potential 
              applications for improving investment decision-making in private equity. The forecasting 
              models could significantly enhance our ability to assess LBO opportunities and manage risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
