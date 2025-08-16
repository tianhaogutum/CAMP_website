"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader6() {
  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Europe's Fragmentation in Venture Capital - Myth or Reality?
            </h1>
            <p className="text-lg">
              This research examines the connectivity and community structure of the European VC network 
              relative to the US and China. Using co-investment network data of 238,317 deals, 26,320 VC firms, 
              and 131,720 portfolio companies (2000–2022), we find that Europe's VC network is more fragmented, 
              though improving over time, with VC communities structured around geographic focus.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Venture Capital</a>
              </Badge>
              <Badge>
                <a href="#">Social Network Analysis</a>
              </Badge>
              <Badge>
                <a href="#">Market Research</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Authors</h3>
              <p>Sarah Stohrer, Reiner Braun</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>Venture Capital</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>Co-investment network data of 238,317 deals, 26,320 VC firms, and 131,720 portfolio companies (2000–2022)</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>Social Network Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
