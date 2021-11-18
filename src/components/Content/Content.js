import React from "react";
import Cart from "./Cart/Cart";
import { ContentContainer } from "./ContentElements";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";

const Content = ({ cartStatus }) => {
  return (
    <ContentContainer>
      {cartStatus ? <Cart cartStatus={cartStatus} /> : <></>}

      <Gallery />
      <Description />
    </ContentContainer>
  );
};

export default Content;
