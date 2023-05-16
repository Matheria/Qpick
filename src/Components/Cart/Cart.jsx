import React from "react";

import { CartCard } from "./CartCard";
import styles from "./cart.module.css";

export const Cart = ({ items }) => {
  return (
    <div className={styles.cart_cards_container}>
      {items.map((item, index) => {
        return <CartCard item={item} key={`item_${index}`} />;
      })}
    </div>
  );
};
