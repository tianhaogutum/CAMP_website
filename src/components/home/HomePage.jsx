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
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-6 py-3 text-sm font-medium text-blue-700">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Interactive Visualization
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 tracking-tight">
              Research Methods &
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Topics Network
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the interconnected relationships between our research methodologies and the diverse topics we investigate in private equity research through our interactive visualization.
            </p>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-100 rounded-full opacity-60"></div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-large border border-white/50">
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
        </div>
      </section>
      
      <Layout25 />
      <Layout369 />
      <Logo2 />
      <Footer6 />
    </div>
  );
}