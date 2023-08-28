import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

//Task
// products/add => <AddProduct/>
//Add Product => Product Added => /products (Product List Page)
export function AddProduct() {
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
          // console.log(JSON.stringify(newProduct));
          //1. method  = POST ✅
          //2. body =  pass data in body-> JSON.stringify ✅
          //3. Headers = JSON

          fetch(`${API}/products`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/products"));
          //Currently post and navigate to /products immediately
          // When post is completed => navigate /products

          // .then((data) => setProductList(data));

          // setProductList([...productList, newProduct]);
          // navigate("/products");
        }}
      >
        Add Product
      </Button>
    </div>
  );
}
