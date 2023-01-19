import React from "react";
import { HeaderWrapper } from "../styles/styles";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo todo" />
    </HeaderWrapper>
  );
};
