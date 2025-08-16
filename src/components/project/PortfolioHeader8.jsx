"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader8() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Would I Lie to You?
            </h1>
            <p className="text-lg">
              This research investigates the rationale behind smoothed NAV reporting by PE fund managers. Using interim 
              Net Asset Value (NAV) reports from PE funds' quarterly reports and advanced Natural Language Processing 
              techniques, we show that while NAVs are inflated, qualitative insights provide more accurate valuations 
              that Limited Partners can leverage to predict final returns. We apply a double agency model to explain 
              why both LPs and GPs rationally benefit from this structure.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Private Equity</a>
              </Badge>
              <Badge>
                <a href="#">Natural Language Processing</a>
              </Badge>
              <Badge>
                <a href="#">NAV Reporting</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Authors</h3>
              <p>Borja Fernandez-Tamayo, Reiner Braun, Florencio Lopez-de-Silanes, Ludovic Phalippou, Natalia Sigrist</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Private Equity</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Interim NAV Reports from PE Funds' Quarterly Reports</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Natural Language Processing (NLP), Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
