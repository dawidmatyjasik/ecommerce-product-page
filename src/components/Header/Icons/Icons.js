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

const Icons = ({ cartStatus, setCartStatus }) => {
  return (
    <IconsContainer>
      <ShopingCartContainer>
        <ShopingCartItems>
          <ShopingCartSpan>1</ShopingCartSpan>
        </ShopingCartItems>
        <Icon src={Cart} onClick={() => setCartStatus(!cartStatus)} />
      </ShopingCartContainer>

      <Icon src={Avatar} />
    </IconsContainer>
  );
};

export default Icons;
