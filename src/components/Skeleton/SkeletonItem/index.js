import React from "react";

const SkeletonItem = () => {
  return (
    <div className="container mx-auto border border-black rounded-2xl p-4">
      <div className="animate-pulse">
        <div className="h-56 bg-slate-200 rounded-t-2xl w-full"></div>
        <div className="p-4">
          <div className="h-5 bg-slate-200 rounded-full"></div>
          <div className="space-y-3">
            <div className="h-3 bg-slate-200 rounded-full"></div>
            <div className="h-3 bg-slate-200 rounded-full"></div>
            <div className="h-3 bg-slate-200 rounded-full"></div>
          </div>
          <div className="h-8 bg-slate-200 w-7/12 mt-2 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between mt-2 p-4">
          <div className="flex items-center">
            <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
            <div className="w-20 h-5 ml-2 bg-slate-200 rounded-full"></div>
          </div>
          <div className="bg-gray-200 text-gray-600 text-sm p-2 rounded-full">
            Category
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonItem;
