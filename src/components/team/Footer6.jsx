import React from "react";
import { Link } from "react-router-dom";

export function Footer6() {
  return (
    <footer className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center justify-center mb-8">
          <Link to="/" className="mb-6">
            <img
              src="/images/logo.png"
              alt="CAMP Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-gray-600 text-center">
            © 2025 CAMP Research Group. All rights reserved.
          </p>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-gray-200 mb-8" />
        
        {/* Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <Link 
            to="/imprint" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Imprint
          </Link>
          <Link 
            to="/data-protection" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Data Protection
          </Link>
          <Link 
            to="/sfdr" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            SFDR
          </Link>
        </div>
      </div>
    </footer>
  );
}