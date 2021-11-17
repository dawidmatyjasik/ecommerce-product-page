import styled, { keyframes } from "styled-components";

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  position: relative;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 35vh calc(100vh - 12vh - 35vh);
  }
`;

export const GalleryContainer = styled.div`
  width: 100%;
  height: 45vh;
  padding: 5vw 3vw;
  @media (max-width: 600px) {
    padding: 0;
  }
  /*  & img {
    border-radius: 10px;
  } */
`;

export const DescriptionContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 5vh 5vh 10vh 5vh 5vh 5vh; */
  padding: calc(5vw) 3vw;
  width: 80%;
  height: 80%;
  @media (max-width: 1050px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 60%;
  }
  @media (max-width: 600px) {
    height: 100%;
    padding: calc(3vw) 3vw;
    grid-template-rows: 1fr 3fr 3fr 1fr 1fr;
  }
`;

export const DescCompany = styled.h2`
  color: ${({ theme }) => theme.colors.primary.orange};
  text-transform: uppercase;
  font-size: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
export const DescTitle = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const DescInfo = styled.p`
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  font-size: 1rem;
  letter-spacing: 0.4px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const DescPrice = styled.h2`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
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
    font-size: 0.85rem;
  }
`;

export const DescSell = styled.h4`
  color: ${({ theme }) => theme.colors.neutral.grayishBlue};
  font-size: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const MenuContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 10vh;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2vw;
    margin-bottom: -5px;
  }
`;
export const MenuCounter = styled.div`
  width: 100%;
  height: 5vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
  border-radius: 10px;
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
  height: 5vh;
  width: 100%;
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
  @media (max-width: 600px) {
    margin-left: 0;
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

const showIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const showOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const CartContainer = styled.div`
  animation: ${({ active }) => (active ? showIn : showOut)} 0.5s ease-in-out;
  position: absolute;
  top: -1%;
  right: 0;
  width: 30vw;
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 3fr 3fr;
  gap: 10px;
  border-radius: 10px;
  max-width: 450px;
  min-width: 350px;
  z-index: 999999;
  background-color: white;
  padding: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 600px) {
    top: 0;
    left: 0;
    width: calc(100vw - 2rem);
    max-width: none;
    height: calc(35vh - 2rem);
    margin: 1rem 1rem;
  }
`;
export const CartHeader = styled.div`
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 80px;
`;
export const CartItemImg = styled.img`
  object-fit: contain;
  border-radius: 10px;
  max-height: 60px;
`;
export const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
export const CartItemHeader = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  font-weight: 400;
  /* text-align: center; */
`;
export const CartItemDetails = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  font-weight: 400;
`;
export const CartCheckout = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: white;
  font-weight: bold;
`;
