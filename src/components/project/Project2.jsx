import React, { useState, useEffect } from "react";
import { Navbar3 } from "./Navbar3";
import { DynamicPortfolioHeader } from "./DynamicPortfolioHeader";
import { DynamicContent } from "./DynamicContent";
import { Layout242 } from "./Layout242";
import { Layout121 } from "./Layout121";
import { Cta25 } from "./Cta25";
import { Footer6 } from "./Footer6";
import { getProjectById } from "../../utils/projectData";

export default function Project2() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 硬编码的备用数据
  const fallbackData = {
    "Project ID": "2",
    "Title": "Time-Series Forecasting for Leveraged Buyouts (LBOs)",
    "Description": "This research focuses on developing time-series forecasting models for leveraged buyout (LBO) performance and market dynamics. Using advanced statistical methods, we analyze historical LBO data to predict future trends and investment outcomes.",
    "Short Description": "This research focuses on developing time-series forecasting models for leveraged buyout (LBO) performance and market dynamics. Using advanced statistical methods, we analyze historical LBO data to predict future trends and investment outcomes.",
    "Researchers": "Dr. Sara Boni Dr. Max Knicker",
    "Asset Class": "Private Equity",
    "Data Used": "Historical LBO data market performance data",
    "Advanced Method": "Time-Series Analysis Statistical Modeling",
    "Tags": "Leveraged Buyouts,Time-Series Forecasting,Private Equity",
    "Content Paragraph 1": "Our research focuses on developing time-series forecasting models for leveraged buyout (LBO) performance and market dynamics. Using advanced statistical methods, we analyze historical LBO data to predict future trends and investment outcomes.",
    "Content Paragraph 2": "The study employs sophisticated time-series analysis techniques to identify patterns and trends in LBO performance data. This approach allows us to develop predictive models for LBO success rates, exit timing, and return expectations.",
    "Content Paragraph 3": "This research contributes to the understanding of LBO market dynamics and suggests potential applications for improving investment decision-making in private equity. The forecasting models could significantly enhance our ability to assess LBO opportunities and manage risk."
  };

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        console.log('Loading project data for ID: 2');
        const data = await getProjectById(2);
        console.log('Project data loaded:', data);
        
        if (data) {
          setProjectData(data);
        } else {
          console.log('No data found, using fallback data');
          setProjectData(fallbackData);
        }
      } catch (error) {
        console.error('Error loading project data:', error);
        console.log('Using fallback data due to error');
        setProjectData(fallbackData);
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

  if (!projectData) {
    return (
      <div>
        <Navbar3 />
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">No project data available</div>
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