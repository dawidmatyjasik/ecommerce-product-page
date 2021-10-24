import React from "react";
import {
  DescCompany,
  DescInfo,
  DescMenu,
  DescPrice,
  DescPriceDiscount,
  DescriptionContainer,
  DescSell,
  DescTitle,
} from "../ContentElements";

const Description = () => {
  return (
    <DescriptionContainer>
      <DescCompany>sneaker company</DescCompany>
      <DescTitle>Fall Limited Edition Sneakers</DescTitle>
      <DescInfo>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </DescInfo>
      <DescPrice>
        $125.00 <DescPriceDiscount>50%</DescPriceDiscount>
      </DescPrice>
      <DescSell>
        <s>$250.00</s>
      </DescSell>
      <DescMenu></DescMenu>
    </DescriptionContainer>
  );
};

export default Description;
