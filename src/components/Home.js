import AddProduct from "./AddProduct";
import Products from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="products">
        <Products />
      </div>
      <div className="addProducts">
        <AddProduct />
      </div>
    </div>
  );
};

export default Home;
