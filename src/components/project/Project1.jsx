import React, { useState, useEffect } from "react";
import { Navbar3 } from "./Navbar3";
import { DynamicPortfolioHeader } from "./DynamicPortfolioHeader";
import { DynamicContent } from "./DynamicContent";
import { Layout242 } from "./Layout242";
import { Layout121 } from "./Layout121";
import { Cta25 } from "./Cta25";
import { Footer6 } from "./Footer6";
import { getProjectById } from "../../utils/projectData";

export default function Project1() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        const data = await getProjectById(1);
        setProjectData(data);
      } catch (error) {
        console.error('Error loading project data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjectData();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar3 />
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading project data...</div>
        </div>
        <Footer6 />
      </div>
    );
  }

  return (
    <div>
      <Navbar3 />
      <DynamicPortfolioHeader projectData={projectData} />
      <DynamicContent projectData={projectData} />
      <Layout242 />
      <Layout121 />
      <Cta25 />
      <Footer6 />
    </div>
  );
}
