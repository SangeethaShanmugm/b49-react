import { Product } from "./Product";
import { INITIAL_PRODUCT_LIST } from "./App";

export function ProductList() {
  const productList = INITIAL_PRODUCT_LIST;
  return (
    <div className="product-list">
      {productList.map((pd, index) => (
        <Product key={index} product={pd} id={index} />
      ))}
    </div>
  );
}
