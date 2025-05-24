import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ecoData } from "@/data/ecosystem";

const Ecosystem = () => {
  return (
    <div className="relative w-full overflow-clip" id="ecosystem">
      <Timeline data={ecoData} />
    </div>
  );
};

export default Ecosystem;
