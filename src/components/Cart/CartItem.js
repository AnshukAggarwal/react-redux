import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/Cart/cart.actions";

const CartItem = ({ data }) => {
  const { title, quantity, price, id, description } = data;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItem({ title, price, description, id }));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItem({ title, quantity, price, id, description }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
