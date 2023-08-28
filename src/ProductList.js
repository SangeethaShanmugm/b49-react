import { useState, useEffect } from "react";
import { Product } from "./Product";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;
  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    fetch(`${API}/products`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProductList(data));
  };

  useEffect(() => getProducts(), []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-list">
        {productList.map((pd, index) => (
          <Product
            key={pd.id}
            product={pd}
            id={pd.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  fetch(`${API}/products/${pd.id}`, { method: "DELETE" }).then(
                    () => getProducts()
                  );
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="edit"
                color="secondary"
                onClick={() => navigate(`/products/edit/${pd.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
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

// Edit => AddProduct + ProductDetail
