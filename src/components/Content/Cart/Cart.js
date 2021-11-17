import React from "react";
import {
  CartCheckout,
  CartContainer,
  CartHeader,
  CartItem,
  CartItemDescription,
  CartItemDetails,
  CartItemHeader,
  CartItemImg,
} from "../ContentElements";
import DeleteIcon from "@mui/icons-material/Delete";
import img1 from "../../../images/image-product-1.jpg";

const Cart = ({ cartStatus }) => {
  return (
    <CartContainer active={cartStatus}>
      <CartHeader>Cart</CartHeader>
      <CartItem>
        <CartItemImg src={img1} />
        <CartItemDescription>
          <CartItemHeader>Fall Limited Edition Sneakers</CartItemHeader>
          <CartItemDetails>
            $125.00 x 3{" "}
            <span style={{ color: "black", fontWeight: "700" }}>$375.00</span>
          </CartItemDetails>
        </CartItemDescription>
        <DeleteIcon style={{ color: "rgba(0,0,0,0.3)", cursor: "pointer" }} />
      </CartItem>
      <CartCheckout>Checkout</CartCheckout>
    </CartContainer>
  );
};

export default Cart;
