import "./App.css";
import { AddColor } from "./AddColor";
import { Counter } from "./Counter";
const INITIAL_PRODUCT_LIST = [
  {
    name: "Iphone 14 Pro Max",
    price: "1,27,999",
    poster: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
    category: "Electronics",
    rating: 8,
    description:
      "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion,48MP Main camera for up to 4x greater resolution",
  },
  {
    name: "Lenovo Tab M10 HD 2nd Gen",
    price: "9,199",
    poster: "https://m.media-amazon.com/images/I/71UXXKK2gSL._SX679_.jpg",
    category: "Electronics",
    rating: 7,
    description:
      "10.1 HD (1280x800) display with TDDI technology and 400 nits brightness and TUV Rhienland certified eye protection",
  },
  {
    name: "U.S. POLO ASSN. Men T-Shirt",
    price: "803",
    poster: "https://m.media-amazon.com/images/I/819biZOXNrL._UX569_.jpg",
    category: "Clothing Accessories",
    rating: 7,
    description: "Fit Type: Regular Fit, HALF SLEEVE POLO",
  },
];

export default function App() {
  //Js starts
  const productList = INITIAL_PRODUCT_LIST;

  //JS ends
  //JSX starts
  return (
    <div className="App">
      <div className="product-list">
        {productList.map((pd) => (
          <Product product={pd} />
        ))}
      </div>
    </div>
  );
  //JSX ends
}

function Product({ product }) {
  // const product = {
  //   name: "Iphone 14 Pro Max",
  //   price: "1,27,999",
  //   poster: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
  //   category: "Electronics",
  //   rating: 8,
  //   description:
  //     "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion,48MP Main camera for up to 4x greater resolution",
  // };

  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} />
      <div className="product-spec">
        <h2 className="product-name">{product.name}</h2>
        <h5 className="product-rating">⭐{product.rating}</h5>
      </div>
      <p className="product-description">{product.description}</p>
      <div className="product-cat">
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹ {product.price}</p>
      </div>
      <Counter />
    </div>
  );
}
