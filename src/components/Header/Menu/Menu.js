import React, { useState } from "react";
import { MenuContainer } from "../HeaderElements";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = ({ active, setActive }) => {
  return (
    <MenuContainer active={active}>
      <MenuIcon onClick={() => setActive(!active)} />
    </MenuContainer>
  );
};

export default Menu;
