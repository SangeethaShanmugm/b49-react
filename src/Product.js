import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Product({ product, id }) {
  const [show, setShow] = useState(true);

  const styles = {
    color: product.rating > 8 ? "green" : "red",
  };
  const Summarystyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} />
      <div className="product-spec">
        <h2 className="product-name">
          {product.name} - {id}
        </h2>
        <h5 style={styles} className="product-rating">
          ⭐{product.rating}
        </h5>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Description</button>
      <button onClick={() => navigate("/products/" + id)}>Info</button>
      <br /> <br />
      {/* <p style={Summarystyles} className="product-description">
              {product.description}
            </p> */}
      {show ? (
        <p className="product-description">{product.description}</p>
      ) : null}
      <div className="product-cat">
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹ {product.price}</p>
      </div>
      <Counter />
    </div>
  );
}
