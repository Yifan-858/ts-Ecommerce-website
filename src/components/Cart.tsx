import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { CartLineItem } from "./CartLineItem";

export const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2 className="thank-you-text">Thank you for your order!</h2>
  ) : (
    <>
      <div className="cart-title">
        <h2 className="cart-title-text">YOUR CART</h2>
      </div>
      <ul className="cart-list">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className="cart-totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className="cart-submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          PLACE ORDER
        </button>
      </div>
    </>
  );

  const content = <main className="main-cart">{pageContent}</main>;

  return content;
};
