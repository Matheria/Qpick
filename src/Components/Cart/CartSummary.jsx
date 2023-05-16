import React from "react";
import styles from "./cart.module.css";

export const CartSummary = ({ amount }) => {
  return (
    <div className={styles.cart_summary}>
      <div className={styles.cart_summary_info}>
        <div className={styles.cart_summary_title}>ИТОГО</div>
        <div className={styles.cart_summary_amount}>{amount + " ₽"}</div>
      </div>
      <button className={styles.cart_action}>Перейти к оформлению</button>
    </div>
  );
};
