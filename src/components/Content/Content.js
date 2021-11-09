import React from "react";
import Cart from "./Cart/Cart";
import { ContentContainer } from "./ContentElements";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";

const Content = () => {
  return (
    <ContentContainer>
      <Cart />
      <Gallery />
      <Description />
    </ContentContainer>
  );
};

export default Content;
