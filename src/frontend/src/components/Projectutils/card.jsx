import React from "react";

// Card Component
export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-custom-gray  shadow rounded ${className}`}>
      {children}
    </div>
  );
};

// CardHeader Component
export const CardHeader = ({ children, className = "" }) => {
  return <div className={`bg-gray-100 p-4 border-b ${className}`}>{children}</div>;
};

// CardContent Component
export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
