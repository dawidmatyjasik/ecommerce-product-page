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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementByAmount,
  selectCount,
} from "../../../../features/counterSlice";

const Menu = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleSubstract = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleCartAdd = () => {
    dispatch(incrementByAmount(amount));
    setAmount(0);
  };

  return (
    <MenuContainer>
      <MenuCounter>
        <MenuButton onClick={handleSubstract}>-</MenuButton>
        <MenuSpan>{amount}</MenuSpan>
        <MenuButton onClick={() => setAmount(amount + 1)}>+</MenuButton>
      </MenuCounter>
      <MenuCart onClick={handleCartAdd}>
        <ShoppingCartIcon />
        <MenuCartSpan>Add to cart</MenuCartSpan>
      </MenuCart>
    </MenuContainer>
  );
};

export default Menu;
