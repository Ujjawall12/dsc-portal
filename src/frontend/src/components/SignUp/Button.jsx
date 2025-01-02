import React from "react";

function Button({ children, type = "button", className = "", ...props }) {
  const baseClasses = "w-full py-2 px-4 rounded-lg transition-colors";
  const variantClasses =
    type === "submit"
      ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
      : "bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
