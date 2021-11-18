import React from "react";
import {
  CartCheckout,
  CartContainer,
  CartEmpty,
  CartGrid,
  CartHeader,
  CartItem,
  CartItemDescription,
  CartItemDetails,
  CartItemHeader,
  CartItemImg,
} from "../ContentElements";
import DeleteIcon from "@mui/icons-material/Delete";
import img1 from "../../../images/image-product-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { remove, selectCount } from "../../../features/counterSlice";

const Cart = ({ cartStatus }) => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <CartContainer active={cartStatus}>
      <CartHeader>Cart</CartHeader>
      {count ? (
        <CartGrid>
          <CartItem>
            <CartItemImg src={img1} />
            <CartItemDescription>
              <CartItemHeader>Fall Limited Edition Sneakers</CartItemHeader>
              <CartItemDetails>
                $125.00 x {count}
                <span
                  style={{
                    color: "black",
                    fontWeight: "700",
                    marginLeft: "15px",
                  }}
                >
                  ${(count * 125.0).toFixed(2)}
                </span>
              </CartItemDetails>
            </CartItemDescription>
            <DeleteIcon
              style={{ color: "rgba(0,0,0,0.3)", cursor: "pointer" }}
              onClick={() => dispatch(remove())}
            />
          </CartItem>
          <CartCheckout>Checkout</CartCheckout>
        </CartGrid>
      ) : (
        <>
          <CartEmpty>Your cart is empty.</CartEmpty>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
