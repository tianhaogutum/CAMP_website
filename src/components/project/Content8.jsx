"use client";

import React from "react";

export function Content8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Would I Lie to You?
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              Our research investigates the rationale behind smoothed NAV reporting by PE fund managers. Using interim 
              Net Asset Value (NAV) reports from PE funds' quarterly reports and advanced Natural Language Processing 
              combined with machine learning techniques, we analyze the relationship between reported NAVs and actual 
              fund performance.
            </p>
            <p>
              The study reveals that while NAVs are inflated, qualitative insights in reports provide more accurate 
              valuations that Limited Partners can leverage to predict final returns. We apply a double agency model 
              to explain why both LPs and General Partners rationally benefit from this structure, using inflated 
              Sharpe ratios. This model demonstrates the rational incentives for both parties in the NAV reporting process.
            </p>
            <p>
              This research provides valuable insights for limited partners, fund managers, and researchers seeking 
              to understand the dynamics of NAV reporting in private equity. The findings suggest that leveraging 
              qualitative insights from quarterly reports could significantly enhance investment decision-making 
              and return prediction despite inflated NAV figures. The double agency model provides a framework 
              for understanding the rational behavior of both LPs and GPs in this reporting structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
