import { createContext, ReactElement } from "react";
import initState from "../../data/products.json";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  modelPath: string;
};

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
//single or multiple children components

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const products: ProductType | ProductType[] = initState;
  console.log("Products in ProductList: ", products);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
