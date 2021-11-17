import React, { useState } from "react";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Mobile from "../components/Header/Menu/Mobile";
import { ImageBackground, PageBackground, PageContainer } from "./PageElements";

const Page = () => {
  const [active, setActive] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);
  const [imgStatus, setImgStatus] = useState(false);
  if (active) {
    return (
      <>
        <Mobile active={active} setActive={setActive} />
        <PageBackground>
          <PageContainer>
            <Header
              active={active}
              setActive={setActive}
              cartStatus={cartStatus}
              setCartStatus={setCartStatus}
            />
            <Content />
          </PageContainer>
        </PageBackground>
      </>
    );
  } else if (imgStatus) {
    return (
      <ImageBackground>
        <PageContainer>
          <Header
            active={active}
            setActive={setActive}
            cartStatus={cartStatus}
            setCartStatus={setCartStatus}
          />
          <Content />
        </PageContainer>
      </ImageBackground>
    );
  } else {
    return (
      <PageContainer>
        <Header
          active={active}
          setActive={setActive}
          cartStatus={cartStatus}
          setCartStatus={setCartStatus}
        />
        <Content cartStatus={cartStatus} />
      </PageContainer>
    );
  }
};

export default Page;
