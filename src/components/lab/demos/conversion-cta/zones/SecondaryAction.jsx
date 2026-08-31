import React from "react";

const SecondaryAction = ({ children, className = "" }) => {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default SecondaryAction;
