import React from "react";

const MetricBadge = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

export default MetricBadge;
