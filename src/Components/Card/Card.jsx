import React from "react";
import { store } from "../Store";
import styles from "./card.module.css";

export const Card = ({ item }) => {
  const clickHandler = () => {
    if (store.cart[item.id]) {
      store.cart[item.id].count++;
    } else {
      store.cart = {
        ...store.cart,
        [item.id]: {
          item,
          count: 1,
        },
      };
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_img_container}>
        <img className={styles.card_img} src={item.img} alt={item.title} />
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_info_row}>
          <span className={styles.card_name}>{item.title}</span>
          <span className={styles.card_price}>{item.price + " ₽"}</span>
        </div>
        {item.priceBeforeDiscount && (
          <div className={styles.card_info_row}>
            <span className={styles.card_price_before_discount}>
              {item.priceBeforeDiscount + " ₽"}
            </span>
          </div>
        )}
        <div className={styles.card_info_row}>
          <div className={styles.card_rate_row}>
            <img src="./assets/icons/star.svg" alt="rating" />
            <span className={styles.card_rate}>{item.rate}</span>
          </div>
          <button className={styles.card_action} onClick={clickHandler}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
