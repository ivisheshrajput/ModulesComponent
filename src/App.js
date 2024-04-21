import React from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import TrackingBar from "./components/TrackingBar/TrackingBar";

const App = () => {
  return (
    <div>
      <div className="p-3 text-white bg-slate-400 text-lg mb-6">
        Different Features
      </div>
      <div className="p-6">
        <h1 className="mb-3">Progress Bar</h1>
        <ProgressBar />
      </div>
      <div className="p-6">
        <h1>Tracking Bar</h1>
        <TrackingBar />
      </div>
    </div>
  );
};

export default App;
