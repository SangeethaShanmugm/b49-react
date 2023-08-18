import { Product } from "./Product";
import { INITIAL_PRODUCT_LIST } from "./App";
import { useState } from "react";
import TextField from "@mui/material/TextField";

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
        <TextField id="outlined-basic" label="Name" variant="outlined" />

        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Enter name"
        />
        <input
          type="text"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
          placeholder="Enter price"
        />
        <input
          type="text"
          onChange={(event) => setPoster(event.target.value)}
          value={poster}
          placeholder="Enter poster"
        />
        <input
          type="text"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          placeholder="Enter category"
        />
        <input
          type="text"
          onChange={(event) => setRating(event.target.value)}
          value={rating}
          placeholder="Enter rating"
        />
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          placeholder="Enter description"
        />
        {/* copy the productList and add new product to it */}
        <button
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
        </button>
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
