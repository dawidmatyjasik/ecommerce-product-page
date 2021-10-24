import React from "react";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import { PageContainer } from "./PageElements";

const Page = () => {
  return (
    <PageContainer>
      <Header />
      <Content />
    </PageContainer>
  );
};

export default Page;
