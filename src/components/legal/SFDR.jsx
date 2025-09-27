import React from "react";
import { Button } from "@relume_io/relume-ui";

export function SFDR() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            SFDR Disclosure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sustainable Finance Disclosure Regulation compliance information for the Center for Entrepreneurial and Financial Studies (CEFS)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What is SFDR?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Sustainable Finance Disclosure Regulation (SFDR) is a European Union regulation 
                (Regulation (EU) 2019/2088) that requires financial market participants and financial 
                advisers to disclose information about how they integrate sustainability risks into 
                their investment decision-making process and how they consider principal adverse 
                impacts on sustainability factors.
              </p>
              <p>
                The Center for Entrepreneurial and Financial Studies (CEFS) at Technische Universität 
                München (TUM) is committed to transparency and sustainability in financial research 
                and practices, ensuring compliance with SFDR requirements.
              </p>
              <p>
                <strong>Effective Date:</strong> March 10, 2021
              </p>
            </div>
          </section>

          {/* Entity-Level Disclosures */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Entity-Level Disclosures (Article 3-5)</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3">Sustainability Risk Integration (Article 3)</h3>
                <p className="mb-3">
                  CEFS integrates sustainability risks into our research and investment analysis 
                  processes through systematic consideration of environmental, social, and governance (ESG) 
                  factors in all research activities.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Environmental risk assessment in investment strategies and research</li>
                  <li>Social governance factor analysis in financial decision-making</li>
                  <li>Climate change impact evaluation and scenario analysis</li>
                  <li>Sustainable investment product research and development</li>
                  <li>ESG integration methodologies and frameworks</li>
                  <li>Regular sustainability risk monitoring and assessment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Principal Adverse Impacts (Article 4)</h3>
                <p className="mb-3">
                  We consider the following principal adverse impacts of investment decisions on 
                  sustainability factors in accordance with SFDR requirements:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-md font-semibold mb-2">Environmental Factors</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Greenhouse gas emissions and carbon footprint</li>
                      <li>Biodiversity impact and ecosystem preservation</li>
                      <li>Water and marine resources conservation</li>
                      <li>Circular economy practices and waste reduction</li>
                      <li>Renewable energy transition and clean technology</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold mb-2">Social Factors</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Labor rights and working conditions</li>
                      <li>Human rights protection and equality</li>
                      <li>Community relations and social impact</li>
                      <li>Data security and privacy protection</li>
                      <li>Financial inclusion and accessibility</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Remuneration Policy (Article 5)</h3>
                <p>
                  Our remuneration policies are designed to be consistent with the integration of 
                  sustainability risks. Performance evaluations and compensation structures consider 
                  sustainability outcomes and long-term value creation, ensuring alignment with 
                  sustainable finance principles.
                </p>
              </div>
            </div>
          </section>

          {/* Product-Level Disclosures */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Product-Level Disclosures</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3">Article 8 Products - Environmental/Social Characteristics</h3>
                <p className="mb-3">
                  Our research covers financial products that promote environmental and/or social 
                  characteristics, including:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Green bonds and sustainability-linked bonds</li>
                  <li>ESG-focused equity funds and strategies</li>
                  <li>Impact investment vehicles and methodologies</li>
                  <li>Sustainable real estate and infrastructure investments</li>
                  <li>Renewable energy and clean technology funds</li>
                  <li>Social impact bonds and community development finance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Article 9 Products - Sustainable Investment Objectives</h3>
                <p className="mb-3">
                  We research financial products that have sustainable investment as their objective, 
                  focusing on investments that contribute to environmental or social objectives while 
                  maintaining financial returns.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Climate-focused investment strategies</li>
                  <li>Social impact investment funds</li>
                  <li>Sustainable development goal (SDG) aligned products</li>
                  <li>Carbon-neutral and net-zero investment approaches</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Sustainability Research Areas</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Environmental Research</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Climate risk modeling and scenario analysis</li>
                    <li>Carbon footprint analysis and measurement</li>
                    <li>Renewable energy economics and financing</li>
                    <li>Environmental policy impact assessment</li>
                    <li>Green technology investment analysis</li>
                    <li>Natural capital valuation and accounting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Research</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Social impact measurement and evaluation</li>
                    <li>Inclusive finance and microfinance</li>
                    <li>Community development and social housing</li>
                    <li>Human capital investment and education finance</li>
                    <li>Gender equality in financial services</li>
                    <li>Social entrepreneurship and innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Due Diligence and Monitoring */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Due Diligence and Monitoring</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We implement comprehensive due diligence processes to assess sustainability factors 
                in our research and recommendations:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ESG data collection and verification procedures</li>
                <li>Third-party ESG rating and assessment integration</li>
                <li>Regular monitoring and review of sustainability performance</li>
                <li>Stakeholder engagement and feedback mechanisms</li>
                <li>Continuous improvement of sustainability assessment frameworks</li>
                <li>Transparency in reporting and disclosure practices</li>
              </ul>
            </div>
          </section>

          {/* Data Availability and Limitations */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Availability and Limitations</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We acknowledge that ESG data availability varies across markets and sectors. 
                Our approach includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Direct engagement with companies to obtain ESG data</li>
                <li>Use of multiple data sources and verification methods</li>
                <li>Transparent disclosure of data limitations and assumptions</li>
                <li>Regular updates as data availability improves</li>
                <li>Collaboration with industry partners to enhance data quality</li>
              </ul>
            </div>
          </section>

          {/* Compliance Statement */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Compliance Statement</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                CEFS is committed to full compliance with SFDR requirements and continuously updates 
                our research methodologies and disclosure practices to meet evolving regulatory standards. 
                We regularly review and enhance our sustainability risk assessment frameworks and ensure 
                transparency in all our research outputs and recommendations.
              </p>
              <p>
                Our compliance framework includes regular audits, staff training, and ongoing monitoring 
                of regulatory developments to ensure adherence to SFDR requirements and best practices 
                in sustainable finance disclosure.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                For questions about our SFDR compliance, sustainability practices, or research activities, 
                please contact:
              </p>
              <div className="space-y-3">
                <p><strong>Center for Entrepreneurial and Financial Studies (CEFS)</strong></p>
                <p><strong>Technische Universität München</strong></p>
                <p><strong>TUM School of Management</strong></p>
                <p><strong>Address:</strong> Arcisstraße 21, 80333 München, Germany</p>
                <p><strong>Email:</strong> karin.papavlassopoulos@tum.de</p>
                <p><strong>Phone:</strong> +49 89 289 25401</p>
                <p><strong>Website:</strong> www.camp.tum.de</p>
              </div>
              <p>
                <strong>Regulatory Authority:</strong> Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)
              </p>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Button 
              title="Back to Home" 
              variant="secondary" 
              size="lg"
              onClick={() => window.history.back()}
              className="px-8 py-3"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
