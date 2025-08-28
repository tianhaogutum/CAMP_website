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
            Sustainable Finance Disclosure Regulation compliance and transparency information
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What is SFDR?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Sustainable Finance Disclosure Regulation (SFDR) is a European Union regulation 
                that requires financial market participants and financial advisers to disclose 
                information about how they integrate sustainability risks into their investment 
                decision-making process.
              </p>
              <p>
                As a research institution focused on asset and wealth management, CAMP Research Group 
                is committed to transparency and sustainability in financial research and practices.
              </p>
            </div>
          </section>

          {/* Sustainability Risk Integration */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Sustainability Risk Integration</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                CAMP Research Group integrates sustainability risks into our research and investment 
                analysis processes through:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Environmental risk assessment in investment strategies</li>
                <li>Social governance factor analysis</li>
                <li>Climate change impact evaluation</li>
                <li>Sustainable investment product research</li>
                <li>ESG integration methodologies</li>
              </ul>
            </div>
          </section>

          {/* Principal Adverse Impacts */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Principal Adverse Impacts</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We consider the following principal adverse impacts of investment decisions on 
                sustainability factors:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Environmental Factors</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Greenhouse gas emissions</li>
                    <li>Biodiversity impact</li>
                    <li>Water and marine resources</li>
                    <li>Circular economy practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Factors</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Labor rights and standards</li>
                    <li>Human rights protection</li>
                    <li>Community relations</li>
                    <li>Data security and privacy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Investment Products */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Sustainable Investment Products</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our research covers various sustainable investment products and strategies:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Green bonds and sustainability-linked bonds</li>
                <li>ESG-focused equity funds</li>
                <li>Impact investment strategies</li>
                <li>Sustainable real estate investments</li>
                <li>Renewable energy infrastructure</li>
                <li>Social impact bonds</li>
              </ul>
            </div>
          </section>

          {/* Research Areas */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Sustainability Research Areas</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Environmental Research</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Climate risk modeling</li>
                    <li>Carbon footprint analysis</li>
                    <li>Renewable energy economics</li>
                    <li>Environmental policy impact</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Research</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Social impact measurement</li>
                    <li>Inclusive finance</li>
                    <li>Community development</li>
                    <li>Human capital investment</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Statement */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Compliance Statement</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                CAMP Research Group is committed to full compliance with SFDR requirements and 
                continuously updates our research methodologies and disclosure practices to meet 
                evolving regulatory standards.
              </p>
              <p>
                We regularly review and enhance our sustainability risk assessment frameworks 
                and ensure transparency in all our research outputs and recommendations.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                For questions about our SFDR compliance and sustainability practices, 
                please contact:
              </p>
              <p><strong>Email:</strong> sustainability@camp.tum.de</p>
              <p><strong>Phone:</strong> +49 89 289 25401</p>
              <p><strong>Address:</strong> CAMP Research Group, Technical University of Munich</p>
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
