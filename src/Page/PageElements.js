import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
`;

export const PageBackground = styled.div`
  position: absolute;
  opacity: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  filter: brightness(40%);
  pointer-events: none;
`;
