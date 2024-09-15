type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>VIEW PRODUCTS</button>
  ) : (
    <button onClick={() => setViewCart(true)}>VIEW CART</button>
  );

  const content = <nav className="nav">{button}</nav>;
  return content;
};
