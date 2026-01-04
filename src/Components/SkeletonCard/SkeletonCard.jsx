import React from "react";

const SkeletonCard = () => {
  return (
    <div className="card bg-base-100 shadow rounded-xl p-4 animate-pulse">
      <div className="h-44 bg-gray-300 rounded-md"></div>
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-8 bg-gray-300 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
