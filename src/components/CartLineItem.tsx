import { ChangeEvent, ReactElement } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionType } from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

export const CartLineItem = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType) => {
  const img: string = `/img${item.sku}.png`;

  const lineTotal: number = item.qty * item.price;

  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((value) => {
    return (
      <option key={`opt${value}`} value={value}>
        {value}
      </option>
    );
  });
  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFroMCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  const content = (
    <li className="cart-item">
      <div className="cart-item-info">
        <img src={img} alt={item.name} className="cart-item-img" />
        <div className="cart-item-text">
          <div aria-label="Item Name" className="cart-name">
            {item.name}
          </div>
          <div aria-label="Price per Item" className="cart-item-price">
            {new Intl.NumberFormat("sv-SE", {
              style: "currency",
              currency: "SEK",
              maximumSignificantDigits: 6,
            }).format(item.price)}
          </div>
          <label htmlFor="itemQty" className="cart-item-qty">
            Item Quantity
          </label>
          <select
            name="itemQty"
            id="itemQty"
            className="cart-select"
            value={item.qty}
            aria-label="Item Quantity"
            onChange={onChangeQty}
          >
            {options}
          </select>
        </div>
      </div>
      <div className="cart-item-subtotal">
        <div
          className="cart-item-subtotal-price"
          aria-label="Line Item Subtotal"
        >
          {new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK",
            maximumSignificantDigits: 6,
          }).format(lineTotal)}
        </div>
        <button
          className="cart-button"
          aria-label="Remove Item from Cart"
          title="Remove Item from Cart"
          onClick={onRemoveFroMCart}
        >
          ✕
        </button>
      </div>
    </li>
  );

  return content;
};
