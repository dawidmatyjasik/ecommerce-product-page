import React from "react";
import {
  Icon,
  IconsContainer,
  ShopingCartContainer,
  ShopingCartItems,
  ShopingCartSpan,
} from "../HeaderElements";
import Avatar from "../../../images/image-avatar.png";
import Cart from "../../../images/icon-cart.svg";
import { useSelector } from "react-redux";
import { selectCount } from "../../../features/counterSlice";

const Icons = ({ cartStatus, setCartStatus }) => {
  const count = useSelector(selectCount);
  return (
    <IconsContainer>
      <ShopingCartContainer>
        <ShopingCartItems>
          <ShopingCartSpan>{count}</ShopingCartSpan>
        </ShopingCartItems>
        <Icon src={Cart} onClick={() => setCartStatus(!cartStatus)} />
      </ShopingCartContainer>

      <Icon src={Avatar} />
    </IconsContainer>
  );
};

export default Icons;
