import React from "react";
import { HeaderContainer } from "./HeaderElements";
import Nav from "./Nav/Nav";
import Title from "./Title/Title";

const Header = () => {
  return (
    <HeaderContainer>
      <Title />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
