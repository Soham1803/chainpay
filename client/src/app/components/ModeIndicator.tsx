"use client";

import React, { useState } from "react";
import cn from "../utils/cn";

const ModeIndicator = () => {
  const modeArr = ["swap", "pay", "onramp", "done"];
  const [mode, setMode] = React.useState(modeArr[0]);

  return (
    <div className="flex flex-row justify-evenly items-center p-5 h-15% w-full bg-slate-400">
        <div className="flex flex-col items-center gap-1"> 
            <div
              className={cn(
                mode === modeArr[0] ? "bg-[#39A7FF]" : "bg-white",
                "w-[50px] h-[50px]  border-[2px] border-[#39A7FF] rounded-full flex items-center justify-center"
              )}
            >
              1
            </div>
            <div>Swap</div>
        </div>

        <div className="flex flex-col items-center gap-1"> 
            <div
              className={cn(
                mode === modeArr[1] ? "bg-[#39A7FF]" : "bg-white",
                "w-[50px] h-[50px]  border-[2px] border-[#39A7FF] rounded-full flex items-center justify-center"
              )}
            >
              2
            </div>
            <div>Pay</div>
        </div>

        <div className="flex flex-col items-center gap-1"> 
            <div
              className={cn(
                mode === modeArr[2] ? "bg-[#39A7FF]" : "bg-white",
                "w-[50px] h-[50px]  border-[2px] border-[#39A7FF] rounded-full flex items-center justify-center"
              )}
            >
              3
            </div>
            <div>On-ramp</div>
        </div>

        <div className="flex flex-col items-center gap-1"> 
            <div
              className={cn(
                mode === modeArr[3] ? "bg-[#39A7FF]" : "bg-white",
                "w-[50px] h-[50px]  border-[2px] border-[#39A7FF] rounded-full flex items-center justify-center"
              )}
            >
              4
            </div>
            <div>Dome</div>
        </div>

    </div>
  );
};

export default ModeIndicator;
