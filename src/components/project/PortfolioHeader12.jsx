"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader12() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Social Network Analysis of the European VC Market
            </h1>
            <p className="text-lg">
              This research analyzes the co-investment networks of European and US VC markets using social network 
              analysis techniques. We examine community structures, identify Hub and Non-Hub positions, and analyze 
              performance differences between different network positions.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Venture Capital</a>
              </Badge>
              <Badge>
                <a href="#">Social Network Analysis</a>
              </Badge>
              <Badge>
                <a href="#">Community Detection</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Project Lead</h3>
              <p>Sarah Stohrer</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Venture Capital</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>European and US VC co-investment networks (2005 data), Nodes: VC firms, Edges: Co-investment relationships</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Social Network Analysis, Louvain Algorithm, p-Z Classification Matrix</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
