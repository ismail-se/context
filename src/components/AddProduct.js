import { Button, TextField } from "@material-ui/core";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import "./AddProduct.css";

const AddProduct = () => {
  const [{ products }, dispatch] = useStateValue();

  return (
    <div className="addProducts">
      <h2>Add Product</h2>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="Image" variant="outlined" />
      <Button variant="contained" color="primary" style={{ width: "13rem" }}>
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
