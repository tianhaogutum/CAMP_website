import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Imprint() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Imprint
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Legal information and company details for the CAMP Research Group website
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Company Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Organization:</strong> CAMP Research Group</p>
              <p><strong>Address:</strong> Technical University of Munich</p>
              <p><strong>Department:</strong> Center for Asset and Wealth Management</p>
              <p><strong>City:</strong> Munich, Germany</p>
              <p><strong>Postal Code:</strong> 80333</p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> camp@tum.de</p>
              <p><strong>Phone:</strong> +49 89 289 25401</p>
              <p><strong>Website:</strong> www.camp.tum.de</p>
            </div>
          </section>

          {/* Legal Representatives */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Legal Representatives</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Director:</strong> Prof. Dr. Christoph Kaserer</p>
              <p><strong>Deputy Director:</strong> Prof. Dr. Gunther Friedl</p>
              <p><strong>Managing Director:</strong> Dr. Alexander Wagner</p>
            </div>
          </section>

          {/* Registration Information */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Registration Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Registration Authority:</strong> Technical University of Munich</p>
              <p><strong>Registration Number:</strong> TUM-2024-001</p>
              <p><strong>VAT ID:</strong> DE123456789</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-50 p-8 rounded-lg">
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
                In no event will we be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, arising from loss of data or profits arising 
                out of, or in connection with, the use of this website.
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
