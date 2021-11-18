import React from "react";
import { HeaderContainer } from "./HeaderElements";
import Icons from "./Icons/Icons";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import Title from "./Title/Title";

const Header = ({ active, setActive, cartStatus, setCartStatus }) => {
  return (
    <HeaderContainer>
      <Menu active={active} setActive={setActive} />

      <Title />
      <Nav />
      <Icons cartStatus={cartStatus} setCartStatus={setCartStatus} />
    </HeaderContainer>
  );
};

export default Header;
