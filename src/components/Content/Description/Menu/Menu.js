import React from "react";
import {
  MenuButton,
  MenuCart,
  MenuCartSpan,
  MenuContainer,
  MenuCounter,
  MenuSpan,
} from "../../ContentElements";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const Menu = () => {
  const [amount, setAmount] = useState(0);

  const handleSubstract = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    <MenuContainer>
      <MenuCounter>
        <MenuButton onClick={handleSubstract}>-</MenuButton>
        <MenuSpan>{amount}</MenuSpan>
        <MenuButton onClick={() => setAmount(amount + 1)}>+</MenuButton>
      </MenuCounter>
      <MenuCart>
        <ShoppingCartIcon />
        <MenuCartSpan>Add to cart</MenuCartSpan>
      </MenuCart>
    </MenuContainer>
  );
};

export default Menu;
