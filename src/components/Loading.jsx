import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ThreeCircles width={80} height={557} color="#00bff" />
    </div>
  );
};

export default Loading;
