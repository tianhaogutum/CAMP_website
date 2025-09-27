import React from "react";

export function LogoBanner() {
  return (
    <div className="w-full bg-white border-b border-border-primary">
      <div className="w-full h-32 flex items-center justify-between px-8">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Center for Entrepreneurial and Financial Studies
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            CEFS
          </p>
        </div>
        <img
          src="/images/icon.png"
          alt="CEFS Logo"
          className="h-28 w-auto object-contain"
        />
      </div>
    </div>
  );
}
