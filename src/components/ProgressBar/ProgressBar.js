import React, { useEffect, useState } from "react";
import ProgressBarComponent from "./ProgressBarComponent";

const ProgressBar = () => {
  const [values, setValues] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValues((val) => val + 1);
    }, 500);
  }, []);
  return (
    <>
      <ProgressBarComponent value={values} />
    </>
  );
};

export default ProgressBar;
