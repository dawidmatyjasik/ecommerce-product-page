import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
  @media (max-width: 1440px) {
    margin: 0 1vw;
  }
`;
