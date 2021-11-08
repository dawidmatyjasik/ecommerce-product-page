import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 11.5vh;
  display: grid;
  grid-template-columns: 4fr 16fr 3fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    grid-template-columns: 1fr 6fr 2fr;
    place-items: center;
  }
`;

export const TitleContainer = styled.div`
  height: 100%;
  width: 80%;
  min-width: 100px;
`;

export const HeaderTitle = styled.img`
  height: 100%;
  width: 100%;
  min-width: 100px;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 50%;
  }
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
  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavElement = styled.li`
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: ${({ theme }) => theme.colors.primary.orange} 3px solid;
    margin-bottom: -3px;
    color: #222;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Icon = styled.img`
  object-fit: contain;
  height: 45%;
  width: 100%;
  min-width: 55px;
  cursor: pointer;
  &:nth-child(1) {
    height: 20%;
    min-width: 25px;
  }
  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
    &:nth-child(1) {
      height: inherit;
      min-width: inherit;
    }
  }
`;

export const MenuContainer = styled.div`
  display: grid;
  place-items: center;
  /* background-color: ${({ active }) => (active ? "red" : "black")}; */
  @media (min-width: 600px) {
    display: none;
  }
  & > svg {
    cursor: pointer;
  }
`;

export const MobileContainer = styled.div`
  position: absolute;
  width: 60vw;
  height: 100vh;
  background-color: white;
  z-index: 999;
`;
export const MobileFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5vw 5vw;
`;

export const MobileMenu = styled.ul`
  list-style-type: none;
  margin-top: 5vh;
  color: #111;
  font-weight: bold;
`;
export const MobileMenuElement = styled.li`
  margin-top: 2vh;
  cursor: pointer;
`;
