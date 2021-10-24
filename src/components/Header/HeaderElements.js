import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
  height: 100%;
  width: 80%;
  min-width: 100px;
`;

export const HeaderTitle = styled.img`
  /* height: 100%; */
  height: 100%;
  width: 100%;
  /* width: 150px; */
  min-width: 100px;

  object-fit: contain;
`;

export const NavContainer = styled.ul`
  width: 50%;
  height: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 2vw;
  }
`;
export const NavElement = styled.li``;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
`;
