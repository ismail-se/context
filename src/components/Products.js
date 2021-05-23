import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [{ products }] = useStateValue();

  return (
    <div className="products">
      
      <div className="prod">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
