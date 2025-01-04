import React from "react";

export const Badge = ({ children, variant, className }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        variant === "outline" ? "border" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
};
