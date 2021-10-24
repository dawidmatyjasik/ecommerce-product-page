import React from "react";
import { HeaderContainer } from "./HeaderElements";
import Icons from "./Icons/Icons";
import Nav from "./Nav/Nav";
import Title from "./Title/Title";

const Header = () => {
  return (
    <HeaderContainer>
      <Title />
      <Nav />
      <Icons />
    </HeaderContainer>
  );
};

export default Header;
