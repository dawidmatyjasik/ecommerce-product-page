import React from "react";
import { HeaderTitle, TitleContainer } from "../HeaderElements";
import Logo from "../../../images/logo.svg";

const Title = () => {
  return (
    <TitleContainer>
      <HeaderTitle src={Logo} />
    </TitleContainer>
  );
};

export default Title;
