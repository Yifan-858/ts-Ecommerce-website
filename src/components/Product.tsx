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

  const itemInCart = inCart ? "In Cart: ✓" : null;

  const content = (
    <article className="product">
      <div className="drag-indicator">
        <p className="drag-indicator-text">Drag to Rotate the Product</p>
      </div>
      <div className="product-model">
        <KitchenCanvas modelPath={product.modelPath} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK",
            maximumSignificantDigits: 6,
          }).format(product.price)}
        </p>
      </div>
      <div className="product-state">
        <button className="add-button" onClick={onAddToCart}>
          ADD TO CART
        </button>
        <p>{itemInCart}</p>
      </div>
    </article>
  );

  return content;
};
