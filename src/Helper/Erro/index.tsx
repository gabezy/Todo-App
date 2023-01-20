import React from "react";
import { ErrorText } from "./styles";

export const Error: React.FC<{ children: string | true }> = ({ children }) => {
  return <ErrorText>*{children}</ErrorText>;
};
