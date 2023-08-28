import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { useState, useEffect } from "react";
import { API } from "./global";
export function ProductDetails() {
  const { productid } = useParams();
  // const product = productList[productid];
  // console.log(productList[productid]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${API}/products/${productid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="450"
        src={product.trailer}
        title="Lenovo Tab M10 HD (2nd gen) Product Tour – Get more"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="product-detail-container">
        <div className="product-detail-spec">
          <h2 className="product-name">{product.name}</h2>
          <h5 className="product-rating">⭐{product.rating}</h5>
        </div>
        <p className="product-description">{product.description}</p>

        <div className="product-cat">
          <p className="product-category">{product.category}</p>
          <p className="product-price">₹ {product.price}</p>
        </div>
        <Button
          variant="contained"
          startIcon={<SkipPreviousIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
