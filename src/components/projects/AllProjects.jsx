"use client";

import { Badge } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

export function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedResearcher, setSelectedResearcher] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Agent-Based Modelling for Liquidity Forecasting",
      description: "Developing agent-based models for liquidity forecasting in financial markets using computational simulation.",
      tags: ["Liquidity Forecasting", "Agent-Based Modelling", "Market Microstructure"],
      researchers: "Nicki Pardon, Max Knicker",
      status: "ongoing",
      path: "/project1"
    },
    {
      id: 2,
      title: "Time-Series Forecasting for Leveraged Buyouts (LBOs)",
      description: "Developing time-series forecasting models for LBO performance and market dynamics.",
      tags: ["Leveraged Buyouts", "Time-Series Forecasting", "Private Equity"],
      researchers: "Max Knicker",
      status: "ongoing",
      path: "/project2"
    },
    {
      id: 3,
      title: "AI and Advanced Statistical Methods in Business Analysis",
      description: "Combining NLP techniques for business description analysis with advanced Bayesian statistical methods.",
      tags: ["Natural Language Processing", "Bayesian Methods", "AI & Statistics"],
      researchers: "Yichun Dong",
      status: "ongoing",
      path: "/project3"
    },
    {
      id: 4,
      title: "Natural Language Processing in Financial Analysis",
      description: "Applying NLP techniques to financial analysis and market research.",
      tags: ["Natural Language Processing", "Financial Analysis", "Text Mining"],
      researchers: "Dorothee",
      status: "ongoing",
      path: "/project4"
    },
    {
      id: 5,
      title: "Limited Partners versus Unlimited Machines: AI and PE Fund Performance",
      description: "Investigating the predictive power of quantitative vs. qualitative data in PE fund prospectuses.",
      tags: ["Private Equity", "Machine Learning", "AI & Performance"],
      researchers: "Alex Jürgens, Stefan Weik, Alex Schneider",
      status: "ongoing",
      path: "/project5"
    },
    {
      id: 6,
      title: "Europe's Fragmentation in Venture Capital - Myth or Reality?",
      description: "Examining the connectivity and community structure of the European VC network relative to the US and China.",
      tags: ["Venture Capital", "Social Network Analysis", "Market Research"],
      researchers: "Sarah Stohrer, Reiner Braun",
      status: "completed",
      path: "/project6"
    },
    {
      id: 7,
      title: "Limited Partners versus Unlimited Machines: AI and PE Fund Performance",
      description: "Investigating the predictive power of quantitative vs. qualitative data in PE fund prospectuses.",
      tags: ["Private Equity", "Machine Learning", "AI & Performance"],
      researchers: "Borja Fernandez-Tamayo, Reiner Braun, Florencio Lopez-de-Silanes, Ludovic Phalippou, Natalia Sigrist",
      status: "completed",
      path: "/project7"
    },
    {
      id: 8,
      title: "Would I Lie to You?",
      description: "Investigating the rationale behind smoothed NAV reporting by PE fund managers.",
      tags: ["Private Equity", "Natural Language Processing", "NAV Reporting"],
      researchers: "Borja Fernandez-Tamayo, Reiner Braun, Florencio Lopez-de-Silanes, Ludovic Phalippou, Natalia Sigrist",
      status: "completed",
      path: "/project8"
    },
    {
      id: 9,
      title: "Nowcasting Private Market Valuations",
      description: "Developing nowcasting methods for more accurate, timely NAV estimates in private markets.",
      tags: ["Private Markets", "Nowcasting", "Portfolio Optimization"],
      researchers: "Sara Boni",
      status: "ongoing",
      path: "/project9"
    },
    {
      id: 10,
      title: "Applying Bayesian Methodologies to Disentangle Skill from Luck in Private Markets",
      description: "Extending Bayesian frameworks to better isolate investment skill from luck in private equity.",
      tags: ["Private Equity", "Bayesian Methods", "Skill vs. Luck"],
      researchers: "Sara Boni",
      status: "ongoing",
      path: "/project10"
    },
    {
      id: 11,
      title: "Benchmarking Private Equity Cash Flow Forecasting: A Machine Learning Approach",
      description: "Developing a machine learning framework to improve private equity liquidity modeling.",
      tags: ["Private Equity", "Machine Learning", "Cash Flow Forecasting"],
      researchers: "Nicolas Pardon, Max Knicker",
      status: "ongoing",
      path: "/project11"
    },
    {
      id: 12,
      title: "Social Network Analysis of the European VC Market",
      description: "Analyzing co-investment networks of European and US VC markets using social network analysis.",
      tags: ["Venture Capital", "Social Network Analysis", "Community Detection"],
      researchers: "Sarah Stohrer",
      status: "ongoing",
      path: "/project12"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "all" || project.tags.includes(selectedCategory);
    const researcherMatch = selectedResearcher === "all" || project.researchers.includes(selectedResearcher);
    const statusMatch = selectedStatus === "all" || project.status === selectedStatus;
    return categoryMatch && researcherMatch && statusMatch;
  });

  return (
    <section className="w-full py-16 md:py-24 lg:py-28" style={{backgroundColor: '#f1f1f1'}}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Complete Portfolio</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            All Research Projects
          </h2>
          <p className="text-lg">
            Explore our complete portfolio of innovative research projects in private equity, venture capital, and financial markets.
          </p>
        </header>
        
                            {/* Filters */}
                    <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
                      <div className="flex flex-col md:flex-row gap-4">
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="all">All Categories</option>
                          <option value="Private Equity">Private Equity</option>
                          <option value="Venture Capital">Venture Capital</option>
                          <option value="Machine Learning">Machine Learning</option>
                          <option value="Natural Language Processing">Natural Language Processing</option>
                          <option value="Bayesian Methods">Bayesian Methods</option>
                        </select>

                        <select
                          value={selectedResearcher}
                          onChange={(e) => setSelectedResearcher(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="all">All Researchers</option>
                          <option value="Sarah Stohrer">Sarah Stohrer</option>
                          <option value="Max Knicker">Max Knicker</option>
                          <option value="Sara Boni">Sara Boni</option>
                          <option value="Yichun Dong">Yichun Dong</option>
                          <option value="Dorothee">Dorothee</option>
                          <option value="Alex Jürgens">Alex Jürgens</option>
                          <option value="Nicolas Pardon">Nicolas Pardon</option>
                        </select>

                        <select
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="all">All Status</option>
                          <option value="ongoing">Ongoing</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
          
          {/* Project Count */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects match the selected filters.</p>
                                    <Button
                          onClick={() => {
                            setSelectedCategory("all");
                            setSelectedResearcher("all");
                            setSelectedStatus("all");
                          }}
                          variant="secondary"
                          className="mt-4"
                        >
                          Clear Filters
                        </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <div className="mb-4 flex justify-between items-start">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      Project {project.id}
                    </span>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'completed' 
                        ? 'text-green-600 bg-green-100' 
                        : 'text-orange-600 bg-orange-100'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    <a href={project.path} className="hover:underline">
                      {project.title}
                    </a>
                  </h3>
                  <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Research Team
                    </p>
                    <p className="text-sm text-gray-700">
                      {project.researchers}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Key Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} className="text-xs px-2 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 px-6 pb-6">
                  <Button
                    title="View Project Details"
                    variant="secondary"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    <a href={project.path} className="flex items-center justify-center w-full">
                      View Project Details
                      <ChevronRight className="ml-2 text-current" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
