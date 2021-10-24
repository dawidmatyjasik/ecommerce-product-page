import React from "react";
import {
  Icon,
  MenuButton,
  MenuCart,
  MenuCartSpan,
  MenuContainer,
  MenuCounter,
  MenuSpan,
} from "../../ContentElements";
// import CartIcon from "../../../../images/icon-cart.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuCounter>
        <MenuButton>-</MenuButton>
        <MenuSpan>0</MenuSpan>
        <MenuButton>+</MenuButton>
      </MenuCounter>
      <MenuCart>
        <ShoppingCartIcon />
        <MenuCartSpan>Add to cart</MenuCartSpan>
      </MenuCart>
    </MenuContainer>
  );
};

export default Menu;
