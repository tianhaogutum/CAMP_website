"use client";

import React, { useState, useEffect } from "react";
import { DynamicTeamMember } from "./DynamicTeamMember";
import { getResearchLeads } from "../../utils/teamData";

export function DynamicResearchLeads() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const data = await getResearchLeads();
        console.log('Research leads data:', data);
        setTeamMembers(data);
      } catch (error) {
        console.error('Error loading research leads:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTeamData();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-8 md:py-12 lg:py-16" style={{backgroundColor: '#f1f1f1'}}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg">Loading research leads...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8 md:py-12 lg:py-16" style={{backgroundColor: '#f1f1f1'}}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-lg md:mb-12 lg:mb-16">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">Research Leads</h2>
          <p className="text-lg">
            Meet our research leaders driving innovation in AI-powered private market analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-items-start gap-x-8 gap-y-12 md:gap-16 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <DynamicTeamMember key={index} member={member} isLarge={true} />
          ))}
        </div>
        <div className="mt-8 w-full max-w-md md:mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
