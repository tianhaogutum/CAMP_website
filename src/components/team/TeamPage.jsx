import React from "react";
import { Navbar3 } from "./Navbar3";
import { Header65 } from "./Header65";
import { Team14 } from "./Team14";
import { DynamicResearchLeads } from "./DynamicResearchLeads";
import { DynamicResearchAssistants } from "./DynamicResearchAssistants";
import { Cta19 } from "./Cta19";
import { Footer6 } from "./Footer6";

export default function TeamPage() {
  return (
    <div className="pt-20">
      <Navbar3 />
      <Header65 />
      <Team14 />
      <DynamicResearchLeads />
      <DynamicResearchAssistants />
      <Cta19 />
      <Footer6 />
    </div>
  );
}
