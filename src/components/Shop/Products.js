import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: 1,
      title: "Test",
      price: 6,
      description: "Test Description",
      quantity: 1,
    },
    {
      id: 2,
      title: "Test 2",
      price: 10,
      description: "Test Description 2",
      quantity: 1,
    },
    {
      id: 3,
      title: "Test 2",
      price: 10,
      description: "Test Description 2",
      quantity: 1,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
