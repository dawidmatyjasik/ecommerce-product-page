import React from "react";
import { Icon, IconsContainer } from "../HeaderElements";
import Avatar from "../../../images/image-avatar.png";
import Cart from "../../../images/icon-cart.svg";

const Icons = () => {
  return (
    <IconsContainer>
      <Icon src={Cart} />
      <Icon src={Avatar} />
    </IconsContainer>
  );
};

export default Icons;
