import React, { useState, useEffect } from "react";
import { getAllTeamMembers, getResearchLeads, getResearchAssistants } from "../utils/teamData";

const TestTeam = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [researchLeads, setResearchLeads] = useState([]);
  const [researchAssistants, setResearchAssistants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const [all, leads, assistants] = await Promise.all([
          getAllTeamMembers(),
          getResearchLeads(),
          getResearchAssistants()
        ]);
        
        setAllMembers(all);
        setResearchLeads(leads);
        setResearchAssistants(assistants);
        
        console.log('All members:', all);
        console.log('Research leads:', leads);
        console.log('Research assistants:', assistants);
      } catch (error) {
        console.error('Error loading team data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTeamData();
  }, []);

  if (loading) {
    return <div>Loading team data...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Team Data Test</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">All Members ({allMembers.length})</h2>
        {allMembers.map((member, index) => (
          <div key={index} className="border p-3 mb-2 rounded">
            <h3 className="font-semibold">{member.Name}</h3>
            <p className="text-sm text-gray-600">{member.Title} - {member.Category}</p>
            <p className="text-sm">{member.Description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Research Leads ({researchLeads.length})</h2>
        {researchLeads.map((member, index) => (
          <div key={index} className="border p-3 mb-2 rounded bg-blue-50">
            <h3 className="font-semibold">{member.Name}</h3>
            <p className="text-sm text-gray-600">{member.Title}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Research Assistants ({researchAssistants.length})</h2>
        {researchAssistants.map((member, index) => (
          <div key={index} className="border p-3 mb-2 rounded bg-green-50">
            <h3 className="font-semibold">{member.Name}</h3>
            <p className="text-sm text-gray-600">{member.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestTeam;
