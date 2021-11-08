import React, { useState } from "react";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Mobile from "../components/Header/Menu/Mobile";
import { PageBackground, PageContainer } from "./PageElements";

const Page = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      {active ? <Mobile active={active} setActive={setActive} /> : <></>}

      {active ? (
        <PageBackground>
          <PageContainer>
            <Header active={active} setActive={setActive} />
            <Content />
          </PageContainer>
        </PageBackground>
      ) : (
        <PageContainer>
          <Header active={active} setActive={setActive} />
          <Content />
        </PageContainer>
      )}
    </>
  );
};

export default Page;
