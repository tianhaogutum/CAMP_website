"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function DynamicPortfolioHeader({ projectData }) {
  if (!projectData) {
    return <div>Loading...</div>;
  }

  const tags = projectData.Tags ? projectData.Tags.split(',').map(tag => tag.trim()) : [];

  return (
    <section className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              {projectData.Title}
            </h1>
            <p className="text-lg">
              {projectData.Description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              {tags.map((tag, index) => (
                <Badge key={index}>
                  <a href="#">{tag}</a>
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Researchers</h3>
              <p>{projectData.Researchers}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Asset Class</h3>
              <p>{projectData['Asset Class']}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Data Used</h3>
              <p>{projectData['Data Used']}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold mb-2 font-bold">Advanced Method</h3>
              <p>{projectData['Advanced Method']}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
