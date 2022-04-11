import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Cart/cart.actions";

const ProductItem = ({ data }) => {
  const { title, price, description, id } = data;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItem({ title, price, description, id }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
