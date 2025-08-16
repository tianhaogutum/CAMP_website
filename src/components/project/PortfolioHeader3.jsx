"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader3() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              AI and Advanced Statistical Methods in Business Analysis
            </h1>
            <p className="text-lg">
              This research combines Natural Language Processing (NLP) techniques for business description analysis 
              with advanced Bayesian statistical methods. We focus on developing AI-driven approaches to extract 
              insights from textual business data and apply sophisticated statistical modeling.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Natural Language Processing</a>
              </Badge>
              <Badge>
                <a href="#">Bayesian Methods</a>
              </Badge>
              <Badge>
                <a href="#">AI & Statistics</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Researcher</h3>
              <p>Yichun Dong</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Business Analysis, Textual Data</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Business descriptions, textual business data</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Natural Language Processing (NLP), Bayesian Statistics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
