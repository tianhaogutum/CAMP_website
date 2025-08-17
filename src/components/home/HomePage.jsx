import React from "react";
import { Navbar3 } from "./Navbar3";
import { Header30 } from "./Header30";
import BipartiteArcChord, { demoData } from "./BipartiteArcChord";
import { Layout254 } from "./Layout254";
import { Layout25 } from "./Layout25";
import { Layout369 } from "./Layout369";
import { Logo2 } from "./Logo2";
import { Footer6 } from "./Footer6";

export default function HomePage() {
  return (
    <div>
      <Navbar3 />
      <Header30 />
      
      {/* Research Methods & Topics Visualization */}
      <section className="py-16 md:py-24 lg:py-28 bg-gray-50 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Research Methods & Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the connections between our research methodologies and the diverse topics we investigate in private equity research.
            </p>
          </div>
          <BipartiteArcChord 
            leftTitle="Research Methods"
            rightTitle="Research Topics"
            left={demoData.left}
            right={demoData.right}
            links={demoData.links}
            className="shadow-lg rounded-lg"
          />
        </div>
      </section>
      
      <Layout254 />
      <Layout25 />
      <Layout369 />
      <Logo2 />
      <Footer6 />
    </div>
  );
}