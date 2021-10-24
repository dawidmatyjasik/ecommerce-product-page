import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  height: 100%;
  width: 100%;
  display: grid;
  align-content: center;
`;

export const NavContainer = styled.ul`
  width: 50%;
  height: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
`;
export const NavElement = styled.li``;
