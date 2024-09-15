import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";
import { ReactElement } from "react";
import { Product } from "./Product";

export const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = (
    <p className="loading-text">loading...</p>
  );

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = (
    <main className="main">
      <div className="view-products">
        <h2 className="view-products-text">DISCOVER OUR</h2>
        <h2 className="view-products-text">PRODUCTS</h2>
      </div>
      <div className="product-card">{pageContent}</div>
    </main>
  );

  return content;
};
