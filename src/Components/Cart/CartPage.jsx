import React from "react";

import { Cart } from "./Cart";
import { CartSummary } from "./CartSummary";
import { observer } from "mobx-react";
import { store } from "../Store";
import styles from "./cart.module.css";

export const CartPage = observer(() => (
  <div className={styles.cart}>
    <div className={styles.cart_title}>Корзина</div>
    <div className={styles.cart_content}>
      <Cart items={store.getCart()} />
      <CartSummary amount={store.getTotalPrice()} />
    </div>
  </div>
));
