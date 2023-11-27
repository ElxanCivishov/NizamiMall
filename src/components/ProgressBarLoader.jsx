import React, { useEffect, useState } from "react";

const ProgressBarLoader = ({ isLoading }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let interval;
    if (!isLoading) {
      interval = setInterval(() => {
        if (width >= 100) {
          setWidth(0);
        } else {
          setWidth((prev) => prev + 20);
        }
      }, 20);
    } else {
      setWidth(100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [width, isLoading]);

  const progressBarStyle = {
    width: `${width}%`,
    transition: "width 0.5s linear",
  };

  return (
    <div className="w-full fixed top-0 z-60 max-w-screen overflow-hidden bg-transparent rounded-r-full h-1 ">
      {isLoading && (
        <div
          className="bg-colorPrimary h-1 rounded-r-full w-32 transition-all duration-100 "
          style={progressBarStyle}
        ></div>
      )}
    </div>
  );
};

export default ProgressBarLoader;
