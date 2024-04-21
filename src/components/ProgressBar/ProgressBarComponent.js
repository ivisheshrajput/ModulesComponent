import React, { useEffect, useState } from "react";

const ProgressBarComponent = ({ value }) => {
  const [percentage, setPercentage] = useState(value);
  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="bg-slate-300  w-[500px] h-3 rounded-md flex justify-center items-center text-xs font-semibold relative">
      <div className={`z-50 ${percentage > 49 ? "text-white" : "text-black "}`}>
        {percentage.toFixed()}%
      </div>
      <div
        className="bg-green-500 absolute top-0 left-0 h-full rounded-md "
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBarComponent;
