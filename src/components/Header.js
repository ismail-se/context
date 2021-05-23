import { useStateValue } from "../context/StateProvider";
import "./Header.css";

const Header = () => {
  const [{ products }] = useStateValue();
  return (
    <header>
      <h1>Products</h1>
      <h3>{products.length} Products</h3>
    </header>
  );
};

export default Header;
