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
    <div className="pt-20">
      <Navbar3 />
      <Header30 />
      
      <Layout254 />
      
      {/* Research Methods & Topics Visualization */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-14 bg-[#f1f1f1]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Research Methods & Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the interconnected relationships between our research methodologies and the diverse topics we investigate in private equity research.
            </p>
          </div>
          <div className="bg-[#f1f1f1] pt-2 pb-12 px-4">
            <BipartiteArcChord 
              leftTitle="Research Methods"
              rightTitle="Research Topics"
              left={demoData.left}
              right={demoData.right}
              links={demoData.links}
              className=""
            />
          </div>
        </div>
      </section>
      
      <Layout25 />
      <Layout369 />
      <Logo2 />
      <Footer6 />
    </div>
  );
}