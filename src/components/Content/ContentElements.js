import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw;
  & img {
    border-radius: 10px;
  }
`;
