import React, { useState, useEffect } from "react";
import { getAllProjects } from "../utils/projectData";
import { getAllTeamMembers } from "../utils/teamData";

const TestExcel = () => {
  const [projects, setProjects] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectsData, teamData] = await Promise.all([
          getAllProjects(),
          getAllTeamMembers()
        ]);
        
        setProjects(projectsData);
        setTeamMembers(teamData);
        
        console.log('Projects from Excel:', projectsData);
        console.log('Team members from Excel:', teamData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading Excel data...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Excel Data Test</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Projects from Excel ({projects.length})</h2>
        {projects.map((project, index) => (
          <div key={index} className="border p-3 mb-2 rounded">
            <h3 className="font-semibold">{project.Title}</h3>
            <p className="text-sm text-gray-600">ID: {project['Project ID']}</p>
            <p className="text-sm">{project.Description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Team Members from Excel ({teamMembers.length})</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="border p-3 mb-2 rounded">
            <h3 className="font-semibold">{member.Name}</h3>
            <p className="text-sm text-gray-600">{member.Title} - {member.Category}</p>
            <p className="text-sm">{member.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestExcel;
