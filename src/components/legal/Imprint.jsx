import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Imprint() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Impressum
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Legal information and contact details for the Center for Entrepreneurial and Financial Studies (CEFS) website
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Institution Information */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Institution Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Institution:</strong> Technische Universität München (TUM)</p>
              <p><strong>Faculty:</strong> TUM School of Management</p>
              <p><strong>Center:</strong> Center for Entrepreneurial and Financial Studies (CEFS)</p>
              <p><strong>Address:</strong> Arcisstraße 21, 80333 München, Germany</p>
              <p><strong>Legal Form:</strong> Public University (Körperschaft des öffentlichen Rechts)</p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> karin.papavlassopoulos@tum.de</p>
              <p><strong>Phone:</strong> +49 89 289 25401</p>
              <p><strong>Website:</strong> www.camp.tum.de</p>
              <p><strong>Postal Address:</strong> TUM School of Management, Arcisstraße 21, 80333 München</p>
            </div>
          </section>

          {/* Legal Representatives */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Legal Representatives</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>President of TUM:</strong> Prof. Dr. Thomas F. Hofmann</p>
              <p><strong>Dean of TUM School of Management:</strong> Prof. Dr. Gunther Friedl</p>
              <p><strong>Center Director:</strong> Prof. Dr. Christoph Kaserer</p>
              <p><strong>Managing Director:</strong> Dr. Alexander Wagner</p>
            </div>
          </section>

          {/* Registration Information */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Registration Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Registration Authority:</strong> Bayerisches Staatsministerium für Wissenschaft und Kunst</p>
              <p><strong>VAT ID:</strong> DE 129 516 615</p>
              <p><strong>Tax Number:</strong> 143/108/20001</p>
              <p><strong>Responsible for Content:</strong> Center for Entrepreneurial and Financial Studies (CEFS)</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The information provided on this website is for general informational purposes only. 
                While we strive to keep the information up to date and correct, we make no representations 
                or warranties of any kind about the completeness, accuracy, reliability, suitability, 
                or availability of the information, products, services, or related graphics contained 
                on the website for any purpose.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. 
                In no event will TUM or CEFS be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, arising from loss of data or profits arising 
                out of, or in connection with, the use of this website.
              </p>
              <p>
                This website may contain links to external websites. TUM and CEFS have no control over 
                the content of these external sites and assume no responsibility for their content.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="bg-[#f1f1f1] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Unless otherwise stated, all content on this website, including text, images, graphics, 
                and design elements, is protected by copyright and belongs to Technische Universität München 
                or the respective rights holders.
              </p>
              <p>
                Any reproduction, distribution, or use of content from this website requires prior written 
                consent from TUM or the respective rights holders.
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
