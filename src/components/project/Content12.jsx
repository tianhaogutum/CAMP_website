"use client";

import React from "react";

export function Content12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          Social Network Analysis of the European VC Market
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              Our research analyzes the co-investment networks of European and US VC markets using social network 
              analysis techniques. We examine community structures, identify Hub and Non-Hub positions, and analyze 
              performance differences between different network positions.
            </p>
            <p>
              The study employs the Louvain algorithm for community detection and uses the p-Z classification matrix 
              (Guimerà & Nunes Amaral, 2005) to identify the structural positions of VCs in the network. We compare 
              community structure differences between European and US networks and analyze performance differences 
              between VCs in "Hub" and "Non-Hub" positions.
            </p>
            <p>
              Key findings reveal that the European VC network is more fragmented than the US: when 1 community is 
              identified in the US, approximately 1.7 communities emerge in Europe. VC network structure significantly 
              influences performance: Kinless Hub VCs (intermediary VCs with extensive cross-community connections) 
              perform significantly better than Non-Hub VCs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
