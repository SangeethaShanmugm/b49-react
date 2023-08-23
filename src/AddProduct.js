import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Task
// products/add => <AddProduct/>
//Add Product => Product Added => /products (Product List Page)
export function AddProduct({ productList, setProductList }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div className="add-product-form">
      <TextField
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />

      <TextField
        label="Price"
        variant="outlined"
        onChange={(event) => setPrice(event.target.value)}
        value={price}
      />

      <TextField
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
        value={poster}
      />

      <TextField
        label="Category"
        variant="outlined"
        onChange={(event) => setCategory(event.target.value)}
        value={category}
      />

      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
        value={rating}
      />

      <TextField
        label="Description"
        variant="outlined"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />

      {/* copy the productList and add new product to it */}
      <Button
        variant="contained"
        onClick={() => {
          const newProduct = {
            name,
            price,
            poster,
            category,
            rating,
            description,
          };
          setProductList([...productList, newProduct]);
          navigate("/products");
        }}
      >
        Add Product
      </Button>
    </div>
  );
}
