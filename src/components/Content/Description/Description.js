import { useWindowSize } from "@react-hook/window-size/throttled";
import React from "react";
import {
  DescCompany,
  DescInfo,
  DescPrice,
  DescPriceDiscount,
  DescriptionContainer,
  DescSell,
  DescTitle,
} from "../ContentElements";
import Menu from "./Menu/Menu";

const Description = () => {
  const [width, height] = useWindowSize();
  return (
    <DescriptionContainer>
      <DescCompany>sneaker company</DescCompany>
      <DescTitle>Fall Limited Edition Sneakers</DescTitle>
      <DescInfo>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </DescInfo>
      {width > 600 ? (
        <>
          <DescPrice>
            $125.00 <DescPriceDiscount>50%</DescPriceDiscount>
          </DescPrice>
          <DescSell>
            <s>$250.00</s>
          </DescSell>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DescPrice>
            $125.00 <DescPriceDiscount>50%</DescPriceDiscount>
          </DescPrice>
          <DescSell>
            <s>$250.00</s>
          </DescSell>
        </div>
      )}

      <Menu />
    </DescriptionContainer>
  );
};

export default Description;
