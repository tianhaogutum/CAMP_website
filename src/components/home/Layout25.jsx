import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from "relume-icons";
import React from "react";
import { Link } from "react-router-dom";

export function Layout25() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24">
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              AI-Powered Research
            </div>
            
            <h2 className="mb-8 text-4xl font-display font-bold text-white leading-tight tracking-tight md:mb-10 md:text-5xl lg:text-6xl">
              Innovating, Educating,
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Collaborating, Transforming
              </span>
            </h2>
            <p className="mb-8 text-lg text-gray-300 leading-relaxed md:mb-10 md:text-xl">
              We seek to integrate cutting-edge AI techniques into private market analysis, empowering investors and enhancing market fairness. Through groundbreaking research, strategic partnerships, and open knowledge sharing, we aim to set new standards in how private markets operate.
            </p>
            <div className="grid grid-cols-1 gap-8 py-6 sm:grid-cols-2">
              <div className="group">
                <div className="flex items-center mb-3">
                  <h3 className="text-4xl font-bold text-white md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">80%</h3>
                  <div className="ml-3 h-8 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full group-hover:scale-y-110 transition-transform duration-300"></div>
                </div>
                <p className="text-gray-300 leading-relaxed">of our research outputs involve real-world industry collaboration.</p>
              </div>
              <div className="group">
                <div className="flex items-center mb-3">
                  <h3 className="text-4xl font-bold text-white md:text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">15+</h3>
                  <div className="ml-3 h-8 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full group-hover:scale-y-110 transition-transform duration-300"></div>
                </div>
                <p className="text-gray-300 leading-relaxed">active research projects spanning AI model development, risk prediction, and investment analytics.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 md:mt-12">
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  <span className="relative z-10">See Our Projects</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
                <button className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto">
                  Meet the Team
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/images/ai_powered.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-white border border-white/20">
                Live Research
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}