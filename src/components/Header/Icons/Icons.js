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

const Icons = () => {
  return (
    <IconsContainer>
      <ShopingCartContainer>
        <ShopingCartItems>
          <ShopingCartSpan>1</ShopingCartSpan>
        </ShopingCartItems>
        <Icon src={Cart} />
      </ShopingCartContainer>

      <Icon src={Avatar} />
    </IconsContainer>
  );
};

export default Icons;
