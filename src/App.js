import "./App.css";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { ProductList } from "./ProductList";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Home } from "./Home";
import { UserList } from "./UserList";
import { NotFoundPage } from "./NotFoundPage";
import { ProductDetails } from "./ProductDetails";
import { AddProduct } from "./AddProduct";
import ExampleContext from "./context/ExampleContext";

export const INITIAL_PRODUCT_LIST = [
  {
    name: "Iphone 14",
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
    rating: 8.7,
    description:
      "10.1 HD (1280x800) display with TDDI technology and 400 nits brightness and TUV Rhienland certified eye protection",
    trailer: "https://www.youtube.com/embed/bbcpBC9Mbuk",
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
  //Lifting the state up  => Lifted from child to parent
  const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST);
  const [mode, setMode] = useState("light");
  //1. Creating -> createContext ✅
  //2. Publisher => provider => context.Provider ✅
  //3. Subscriber => useContext => useContext(context)

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/products")}>
              ProductList
            </Button>
            <Button color="inherit" onClick={() => navigate("/products/add")}>
              Add Product
            </Button>
            <Button color="inherit" onClick={() => navigate("/color-game")}>
              AddColor
            </Button>
            <Button color="inherit" onClick={() => navigate("/users")}>
              UserList
            </Button>
            <Button color="inherit" onClick={() => navigate("/somewhere")}>
              SomeWhere
            </Button>
            <Button color="inherit" onClick={() => navigate("/context")}>
              Context
            </Button>
            <Button
              sx={{ marginLeft: "57%" }}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} Mode
            </Button>
          </Toolbar>
        </AppBar>
        {/* <nav>
          <ul>
            <li>
              Link change page without refresh
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">ProductList</Link>
            </li>
            <li>
              <Link to="/color-game">AddColor</Link>
            </li>
            <li>
              <Link to="/users">UserList</Link>
            </li>
            <li>
              <Link to="/somewhere">SomeWhere</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <ProductList
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
          <Route path="/items" element={<Navigate replace to="/products" />} />
          <Route
            path="/products/add"
            element={
              <AddProduct
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
          <Route path="/color-game" element={<AddColor />} />
          <Route path="/users" element={<UserList />} />
          <Route
            path="/products/:productid"
            element={<ProductDetails productList={productList} />}
          />

          <Route path="/context" element={<ExampleContext />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
  //JSX ends
}
