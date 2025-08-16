"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader4() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Natural Language Processing in Financial Analysis
            </h1>
            <p className="text-lg">
              This research focuses on applying Natural Language Processing (NLP) techniques to financial 
              analysis and market research. We develop advanced text analysis methods to extract insights 
              from financial documents, news, and market communications.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Natural Language Processing</a>
              </Badge>
              <Badge>
                <a href="#">Financial Analysis</a>
              </Badge>
              <Badge>
                <a href="#">Text Mining</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Researcher</h3>
              <p>Dorothee</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Financial Markets, Textual Data</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Financial documents, news articles, market communications</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Natural Language Processing (NLP), Text Mining</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
