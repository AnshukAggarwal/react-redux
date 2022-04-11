import classes from "./CartButton.module.css";
import { toggleCartHidden } from "../../redux/UI/ui.actions";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  //function to return total items in cart
  const totalCartQuantity = useSelector((state) => {
    return state.cart.items
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  });
  const cartClickHandler = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartQuantity}</span>
    </button>
  );
};

export default CartButton;
