"use client";

import React, { useState, useEffect } from "react";
import { DynamicTeamMember } from "./DynamicTeamMember";
import { getResearchAssistants } from "../../utils/teamData";

export function DynamicResearchAssistants() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const data = await getResearchAssistants();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error loading research assistants:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTeamData();
  }, []);

  if (loading) {
    return (
      <section className="w-full pt-8 md:pt-12 lg:pt-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg">Loading research assistants...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full pt-8 md:pt-12 lg:pt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-lg md:mb-12 lg:mb-16">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            Research Assistant
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-start">
              <DynamicTeamMember member={member} isLarge={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
