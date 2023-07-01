import React from "react";
import loader from "/images/preloader.jpg";
const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-200 dark:bg-gray-950">
      <img className="h-28" src={loader} alt="Loader" />
    </div>
  );
};

export default Preloader;
