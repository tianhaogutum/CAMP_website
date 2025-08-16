import React from "react";

export function LogoBanner() {
  return (
    <div className="w-full bg-white border-b border-border-primary">
      <div className="w-full h-20">
        <img
          src="/images/logo.png"
          alt="CEFS Logo"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
}
