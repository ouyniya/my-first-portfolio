import React, { ComponentPropsWithoutRef } from "react";

export const BrowserMockup = ({
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className="flex items-center justify-center p-4"
      {...other}
    >
      <div className="w-full rounded-2xl shadow-lg overflow-hidden">
        {/* Header with buttons */}
        <div className="flex items-center px-4 py-2 bg-zinc-950">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="ml-4 flex-1">
            <div className="bg-primary h-6 rounded-md px-3 flex items-center text-xs text-secondary">
              https://nysdev.com
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="bg-zinc-950/50 text-gray-200 text-center text-xl">
          {children}
        </div>
      </div>
    </div>
  );
};
