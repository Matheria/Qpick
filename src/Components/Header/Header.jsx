import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { store } from "../Store";
import styles from "./header.module.css";

export const Header = observer(() => (
  <header className={styles.header}>
    <Link to="/" className={styles.link}>
      <h1 className={styles.header__title}>QPICK</h1>
    </Link>

    <div className={styles.icons}>
      <div className={styles.icons__wrapper}>
        <Link>
          <img src="./assets/icons/heart.svg" alt="favorites" />
        </Link>
      </div>

      <div className={styles.icons__wrapper}>
        <Link to="/cart">
          <img src="./assets/icons/cart.svg" alt="cart" />
        </Link>
        {store.getCounter() > 0 && (
          <div className={styles.counter}>
            {store.getCounter() < 100 ? store.getCounter() : "99"}
          </div>
        )}
      </div>
    </div>
  </header>
));
