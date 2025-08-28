import React from "react";
import { Button } from "@relume_io/relume-ui";

export function DataProtection() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Data Protection & Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The CAMP Research Group is committed to protecting your privacy and ensuring the security 
                of your personal data. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website.
              </p>
              <p>
                This policy is effective as of January 1, 2025, and will remain in effect except with 
                respect to any changes in its provisions in the future, which will be in effect immediately 
                after being posted on this page.
              </p>
            </div>
          </section>

          {/* Data Controller */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Controller</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Organization:</strong> CAMP Research Group</p>
              <p><strong>Address:</strong> Technical University of Munich</p>
              <p><strong>Email:</strong> privacy@camp.tum.de</p>
              <p><strong>Phone:</strong> +49 89 289 25401</p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and contact information (email, phone)</li>
                  <li>Professional information (affiliation, title)</li>
                  <li>Research interests and preferences</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-3 text-gray-700">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about research updates</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and abuse</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <div className="space-y-3 text-gray-700">
              <p>Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal data against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <p><strong>Email:</strong> privacy@camp.tum.de</p>
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
