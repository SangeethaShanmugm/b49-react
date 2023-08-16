import "./App.css";
import { AddColor } from "./AddColor";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "./ProductList";
import { ProfileData } from "./ProfileData";
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

  //JS ends
  //JSX starts
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
  //JSX ends
}

function UserList() {
  const userList = [
    {
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg",
      name: "Yogesh",
    },
    {
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      name: "OmPrakash",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
      name: "Aswin",
    },
  ];

  return (
    <>
      {userList.map((usr) => (
        <ProfileData image={usr.pic} name={usr.name} />
      ))}
    </>
  );
}
function Home() {
  return <h1>Welcome to Product App🥳🥳🥳</h1>;
}
