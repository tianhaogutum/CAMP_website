"use client";

import React from "react";

export function DynamicContent({ projectData }) {
  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
          {projectData.Title}
        </h2>
        <div className="prose-base max-w-full prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
          <div>
            <p>
              {projectData['Content Paragraph 1']}
            </p>
            <p>
              {projectData['Content Paragraph 2']}
            </p>
            <p>
              {projectData['Content Paragraph 3']}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
