import React from "react";
import FlowButton from "../pasted/buttons/FlowButton.jsx";

const PrimaryAction = ({ children }) => {
  return <FlowButton text={children} variant="dark" />;
};

export default PrimaryAction;
