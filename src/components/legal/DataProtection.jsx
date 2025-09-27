import React from "react";
import { Button } from "@relume_io/relume-ui";

export function DataProtection() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Data Protection and Privacy Policy for the Center for Entrepreneurial and Financial Studies (CEFS)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Center for Entrepreneurial and Financial Studies (CEFS) at Technische Universität München (TUM) 
                is committed to protecting your privacy and ensuring the security of your personal data in accordance 
                with the General Data Protection Regulation (GDPR) and applicable German data protection laws.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
              <p>
                <strong>Effective Date:</strong> January 1, 2025
              </p>
            </div>
          </section>

          {/* Data Controller */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Controller</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Institution:</strong> Technische Universität München (TUM)</p>
              <p><strong>Faculty:</strong> TUM School of Management</p>
              <p><strong>Center:</strong> Center for Entrepreneurial and Financial Studies (CEFS)</p>
              <p><strong>Address:</strong> Arcisstraße 21, 80333 München, Germany</p>
              <p><strong>Legal Form:</strong> Public University (Körperschaft des öffentlichen Rechts)</p>
              <p><strong>Email:</strong> karin.papavlassopoulos@tum.de</p>
              <p><strong>Phone:</strong> +49 89 289 25401</p>
            </div>
          </section>

          {/* Data Protection Officer */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Protection Officer</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> datenschutz@tum.de</p>
              <p><strong>Address:</strong> Technische Universität München, Arcisstraße 21, 80333 München</p>
              <p>
                You can contact our Data Protection Officer directly for any questions regarding 
                data protection and privacy matters.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Professional information (affiliation, title, institution)</li>
                  <li>Research interests and academic preferences</li>
                  <li>Communication preferences and newsletter subscriptions</li>
                  <li>Event registration and participation data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address (anonymized)</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website and search terms</li>
                  <li>Device information and operating system</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Basis and Purposes */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Legal Basis and Purposes of Processing</h2>
            <div className="space-y-4 text-gray-700">
              <p>We process your personal data based on the following legal grounds under GDPR Article 6:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consent (Art. 6(1)(a)):</strong> For newsletter subscriptions and marketing communications</li>
                <li><strong>Contract (Art. 6(1)(b)):</strong> For providing requested services and event participation</li>
                <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> For compliance with applicable laws and regulations</li>
                <li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> For website analytics, security, and improvement of our services</li>
              </ul>
              <p><strong>Purposes of Processing:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Providing and maintaining our website and services</li>
                <li>Communicating about research updates and events</li>
                <li>Improving user experience and website functionality</li>
                <li>Conducting academic research and analysis</li>
                <li>Ensuring website security and preventing fraud</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your explicit consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
              <p>
                <strong>Note:</strong> We do not use any social media plugins on our website. 
                External links to social networks are provided for convenience only.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
            <div className="space-y-4 text-gray-700">
              <p>As a data subject, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Right of Access (Art. 15):</strong> Request information about your personal data we process</li>
                <li><strong>Right to Rectification (Art. 16):</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your personal data under certain conditions</li>
                <li><strong>Right to Restriction (Art. 18):</strong> Request limitation of processing under certain conditions</li>
                <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Object (Art. 21):</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal data against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>IP address anonymization (IP masking)</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes 
                for which it was collected, or as required by applicable laws and regulations.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Website Analytics:</strong> Anonymized data retained for statistical purposes</li>
                <li><strong>Contact Information:</strong> Retained until you request deletion or withdraw consent</li>
                <li><strong>Event Registration:</strong> Retained for event management and follow-up communications</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer due to legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our website uses cookies to enhance your browsing experience and analyze website traffic. 
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. 
                Note that disabling certain cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions about this Privacy Policy, our data practices, or wish to 
                exercise your rights under GDPR, please contact us:
              </p>
              <div className="space-y-3">
                <p><strong>Center for Entrepreneurial and Financial Studies (CEFS)</strong></p>
                <p><strong>Technische Universität München</strong></p>
                <p><strong>TUM School of Management</strong></p>
                <p><strong>Address:</strong> Arcisstraße 21, 80333 München, Germany</p>
                <p><strong>Email:</strong> karin.papavlassopoulos@tum.de</p>
                <p><strong>Phone:</strong> +49 89 289 25401</p>
                <p><strong>Data Protection Officer:</strong> datenschutz@tum.de</p>
              </div>
              <p>
                <strong>Supervisory Authority:</strong> If you believe your data protection rights have been violated, 
                you have the right to lodge a complaint with the Bavarian Data Protection Authority (BayLDA).
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
