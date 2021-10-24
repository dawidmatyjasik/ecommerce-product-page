import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 1fr;
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  /* justify-content: center; */
`;

export const NavContainer = styled.ul`
  width: 50%;
  /* padding: 0 5vw; */
  height: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const NavElement = styled.li``;
