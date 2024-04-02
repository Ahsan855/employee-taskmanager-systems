import clsx from "clsx";
import React from "react";

const Button = ({ className, label, icon, type, onClick = () => {} }) => {
  return (
    <button
      className={clsx("px-3 py-2 outline-none rounded-full", className)}
      type={type || "button"}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
