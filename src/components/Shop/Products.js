import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
