"use client";

import React from "react";

export function DynamicTeamMember({ member, isLarge = false }) {
  if (!member) {
    return <div>Loading...</div>;
  }

  const containerClass = isLarge 
    ? "relative mb-5 aspect-square w-96 h-96 md:w-[28rem] md:h-[28rem] overflow-hidden md:mb-6"
    : "relative mb-5 aspect-square w-64 overflow-hidden md:mb-6 md:w-72";

  return (
    <div className="flex flex-col">
      <div className={containerClass}>
        <img
          src={member.Image}
          alt={member.Name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-xl font-semibold">{member.Name}</h5>
        <h6 className="text-lg">{member.Title}</h6>
      </div>
      <p>{member.Description}</p>
    </div>
  );
}
