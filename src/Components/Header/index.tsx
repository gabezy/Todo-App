import logo from "../../assets/logo.svg";
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo todo" />
    </HeaderWrapper>
  );
};
