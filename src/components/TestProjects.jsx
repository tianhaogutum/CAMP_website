import React, { useState, useEffect } from "react";
import { getAllProjects } from "../utils/projectData";

const TestProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
        console.log('Loaded projects:', data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Projects Data Test</h1>
      <p className="mb-4">Total projects loaded: {projects.length}</p>
      
      {projects.map((project, index) => (
        <div key={index} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">{project.Title}</h2>
          <p className="text-gray-600">{project.Description}</p>
          <p className="text-sm text-gray-500">Researchers: {project.Researchers}</p>
          <p className="text-sm text-gray-500">Asset Class: {project['Asset Class']}</p>
        </div>
      ))}
    </div>
  );
};

export default TestProjects;
