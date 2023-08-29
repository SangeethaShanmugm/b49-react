import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";

//Task
// products/add => <AddProduct/>
//Add Product => Product Added => /products (Product List Page)
export function EditProduct() {
  const { productid } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/products/${productid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return product ? <EditProductForm product={product} /> : "Loading...";
}

function EditProductForm({ product }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [poster, setPoster] = useState(product.poster);
  const [category, setCategory] = useState(product.category);
  const [rating, setRating] = useState(product.rating);
  const [description, setDescription] = useState(product.description);
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
        color="success"
        variant="contained"
        onClick={() => {
          const updatedProduct = {
            name,
            price,
            poster,
            category,
            rating,
            description,
          };

          //1. method  = PUT ✅
          //2. body =  pass data in body-> JSON.stringify ✅
          //3. Headers = JSON

          fetch(`${API}/products/${product.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/products"));
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
