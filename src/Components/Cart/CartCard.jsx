import React from "react";

import { store } from "../Store";
import styles from "./cartcard.module.css";

export const CartCard = ({ item }) => {
  const addClickHandler = () => {
    store.cart[item.id].count++;
  };

  const subClickHandler = () => {
    store.cart[item.id].count--;
  };

  const delClickHandler = () => {
    delete store.cart[item.id];
  };

  return (
    <div className={styles.cart_card}>
      <div className={styles.cart_card_row}>
        <div className={styles.cart_card_info}>
          <img className={styles.cart_card_img} src={item.img} alt={item.title} />
          <div className={styles.cart_card_text_info}>
            <div className={styles.cart_card_title}>{item.title}</div>
            <div className={styles.cart_card_price}>{item.price + " ₽"}</div>
          </div>
        </div>
        <img
          className="icon"
          onClick={delClickHandler}
          src="./assets/icons/remove.svg"
          alt="remove"
        />
      </div>
      <div className={styles.cart_card_row}>
        <div className={styles.cart_card_counter_container}>
          {store.getCountById(item.id) > 1 ? (
            <button className={styles.cart_card_button} onClick={subClickHandler}>
              −
            </button>
          ) : (
            <button className={styles.cart_card_button} onClick={subClickHandler} disabled>
              −
            </button>
          )}
          <div className={styles.cart_card_counter}>{store.getCountById(item.id)}</div>
          <button className={styles.cart_card_button} onClick={addClickHandler}>
            +
          </button>
        </div>
        <div className={styles.cart_card_amount}>{store.getTotalPriceById(item.id) + " ₽"}</div>
      </div>
    </div>
  );
};
