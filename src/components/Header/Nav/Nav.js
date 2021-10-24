import React from "react";
import { NavContainer, NavElement } from "../HeaderElements";

const Nav = () => {
  return (
    <NavContainer>
      <NavElement>Collections</NavElement>
      <NavElement>Men</NavElement>
      <NavElement>Women</NavElement>
      <NavElement>About</NavElement>
      <NavElement>Contact</NavElement>
    </NavContainer>
  );
};

export default Nav;
