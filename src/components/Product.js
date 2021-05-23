import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={`/images/${product.img}`} alt="" />
      <div className="flex">
        <h2>{product.name}</h2>
        <p>Rs. {product.price}</p>
      </div>
      <p>{product.desc}</p>
    </div>
  );
};

export default Product;
