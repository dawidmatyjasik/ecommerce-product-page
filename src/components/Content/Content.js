import React from "react";
import { ContentContainer } from "./ContentElements";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";

const Content = () => {
  return (
    <ContentContainer>
      <Gallery />
      <Description />
    </ContentContainer>
  );
};

export default Content;
