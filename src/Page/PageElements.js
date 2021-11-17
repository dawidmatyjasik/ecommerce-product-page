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

export const ImageBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 999999999999;
  opacity: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  filter: brightness(40%);
  pointer-events: none;
  cursor: none;
  /* background-color: red; */
`;

export const ImageContainer = styled.div`
  height: 70vh;
  width: 40vw;
  z-index: 99999999999;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`;
