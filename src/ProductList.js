import { Product } from "./Product";
import { INITIAL_PRODUCT_LIST } from "./App";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;
  const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
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
          }}
        >
          Add Product
        </Button>
      </div>
      <div className="product-list">
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={index} />
        ))}
      </div>
    </div>
  );
}

//Task  - 20 mins
//Add products
// 6 field input box for(name,price,
//poster, category,rating,description)
// Add product button
