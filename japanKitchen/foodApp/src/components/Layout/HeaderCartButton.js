import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const CartItemsNumber = ctx.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button onClick={props.cartOpen} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{CartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
