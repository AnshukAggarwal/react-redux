import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(cartTotal);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
        {/* <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
      <h3>Total in C$: {cartTotal}</h3>
    </Card>
  );
};

export default Cart;
