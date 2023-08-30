import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

//name - required
//price - required
//poster -> required,min -10
//category - required - min - 5 - 30
//rating- required, 0-10
//description - required - min - 10 - 200

const productValidationSchema = yup.object({
  name: yup.string().required("Why not fill the name?"),
  price: yup.number().required("Why not fill the price?"),
  poster: yup
    .string()
    .min(10, "Need a longer poster")
    .required("Why not fill the poster?"),
  category: yup
    .string()
    .min(5, "Need a longer category")
    .max(30, "Too much category")
    .required("Why not fill the category?"),
  rating: yup
    .number()
    .min(0, "Need a longer rating")
    .max(10, "Too much rating")
    .required("Why not fill the rating?"),
  description: yup
    .string()
    .min(10, "Need a longer description")
    .max(500, "Too much description")
    .required("Why not fill the description?"),
});

export function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      poster: "",
      category: "",
      rating: "",
      description: "",
    },
    validationSchema: productValidationSchema,
    onSubmit: (newProduct) => {
      console.log("onSubmit=newProduct", newProduct);
      createProduct(newProduct);
    },
  });

  const createProduct = (newProduct) => {
    // console.log(newProduct);
    // fetch(`${API}/products`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newProduct),
    // })
    //   .then((res) => res.json())
    //   .then(() => navigate("/products"));
  };

  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [poster, setPoster] = useState("");
  // const [category, setCategory] = useState("");
  // const [rating, setRating] = useState("");
  // const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <form onSubmit={formik.handleSubmit} className="add-product-form">
      <TextField
        id="name"
        name="name"
        value={formik.values.name}
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

      <TextField
        id="price"
        name="price"
        value={formik.values.price}
        type="number"
        placeholder="Price"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.price && formik.errors.price ? formik.errors.price : ""}

      <TextField
        id="poster"
        name="poster"
        value={formik.values.poster}
        type="text"
        placeholder="Poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}

      <TextField
        id="category"
        name="category"
        value={formik.values.category}
        type="text"
        placeholder="Category"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.category && formik.errors.category
        ? formik.errors.category
        : ""}

      <TextField
        id="rating"
        name="rating"
        value={formik.values.rating}
        type="number"
        placeholder="Rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}

      <TextField
        id="description"
        name="description"
        value={formik.values.description}
        type="text"
        placeholder="Description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.description && formik.errors.description
        ? formik.errors.description
        : ""}

      {/* copy the productList and add new product to it */}
      <Button
        type="submit"
        variant="contained"
        onClick={createProduct}
        // onClick={() => {
        //   const newProduct = {
        //     name,
        //     price,
        //     poster,
        //     category,
        //     rating,
        //     description,
        //   };
        //   // console.log(JSON.stringify(newProduct));
        //   //1. method  = POST ✅
        //   //2. body =  pass data in body-> JSON.stringify ✅
        //   //3. Headers = JSON

        //   fetch(`${API}/products`, {
        //     method: "POST",
        //     body: JSON.stringify(newProduct),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   })
        //     .then((res) => res.json())
        //     .then(() => navigate("/products"));
        //   //Currently post and navigate to /products immediately
        //   // When post is completed => navigate /products

        //   // .then((data) => setProductList(data));

        //   // setProductList([...productList, newProduct]);
        //   // navigate("/products");
        // }}
      >
        Add Product
      </Button>
    </form>
  );
}
