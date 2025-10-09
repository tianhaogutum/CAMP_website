import React, { useState, useEffect } from 'react';
import { getProjectById } from '../utils/projectData';

export default function TestCSV() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProjectById(1);
        console.log('Project 1 data:', data);
        setProjectData(data);
      } catch (error) {
        console.error('Error loading project data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>No project data found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Project 1 Data Test</h1>
      <div className="space-y-4">
        <div>
          <strong>Title:</strong> {projectData.Title}
        </div>
        <div>
          <strong>Introduction:</strong> {projectData.Introduction}
        </div>
        <div>
          <strong>Methodology:</strong> {projectData.Methodology}
        </div>
        <div>
          <strong>Key Findings:</strong> {projectData['Key Findings']}
        </div>
        <div>
          <strong>Conclusion:</strong> {projectData.Conclusion}
        </div>
        <div>
          <strong>References:</strong> {projectData.References}
        </div>
        <div>
          <strong>Author Note:</strong> {projectData['Author Note']}
        </div>
      </div>
    </div>
  );
}
