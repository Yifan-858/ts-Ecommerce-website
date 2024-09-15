import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement } from "react";
import { KitchenCanvas } from "./KitchenCanvas";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

export const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "→ Item in Cart: ✓" : null;

  const content = (
    <article className="product">
      <KitchenCanvas modelPath={product.modelPath} />
      <h3>{product.name}</h3>

      <p>
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: "SEK",
          maximumSignificantDigits: 6,
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};
