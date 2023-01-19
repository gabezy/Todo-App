import React from "react";
import styled from "styled-components";
import { dark } from "../styles/Variables";

const ErrorParagraph = styled.p`
  color: ${dark.colorProduct.danger};
`;

export const Error: React.FC<{ children: string | true }> = ({ children }) => {
  return <ErrorParagraph>*{children}</ErrorParagraph>;
};
