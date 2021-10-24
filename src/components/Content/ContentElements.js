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
  padding: 5vw 3vw;
  /*  & img {
    border-radius: 10px;
  } */
`;

export const DescriptionContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 3fr 1fr 1fr 1fr;
  padding: calc(5vw) 3vw;
  width: 80%;
  height: 80%;

  @media (max-width: 768px) {
    height: 60%;
  }
  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const DescCompany = styled.h2`
  color: ${({ theme }) => theme.colors.primary.orange};
  text-transform: uppercase;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const DescTitle = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const DescInfo = styled.p`
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  font-size: 1rem;
  letter-spacing: 0.4px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const DescPrice = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DescPriceDiscount = styled.span`
  margin-left: 2vw;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary.paleOrange};
  color: ${({ theme }) => theme.colors.primary.orange};
  padding: 5px 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const DescSell = styled.h4`
  color: ${({ theme }) => theme.colors.neutral.grayishBlue};
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
`;
export const MenuCounter = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
`;
export const MenuButton = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.primary.orange};
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 10px;
`;
export const MenuSpan = styled.span`
  display: grid;
  place-items: center;
  font-size: 1rem;
`;

export const MenuCart = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  border-radius: 10px;
  & svg {
    color: white;
  }
`;
export const MenuCartSpan = styled.span`
  margin-left: 10px;
`;

export const Icon = styled.img`
  object-fit: contain;
  fill: white;
  /* height: 50%; */
  /* width: 50%; */
`;
