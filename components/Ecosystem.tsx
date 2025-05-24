import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ecoData } from "@/data/ecosystem";

const Ecosystem = () => {
  
  return (
    <div className="relative w-full px-5 md:px-10 overflow-clip" id="ecosystem">
      <Timeline data={ecoData} />
    </div>
  );
};

export default Ecosystem;
