import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className="footer_column">
          <h2 className={styles.footer_title}>QPICK</h2>
        </div>
        <div className="footer_column">
          <Link className={styles.link}>
            <p className={styles.footer_text}>Избранное</p>
          </Link>
          <Link to="/cart" className={styles.link}>
            <p className={styles.footer_text}>Корзина</p>
          </Link>
          <Link className={styles.link}>
            <p className={styles.footer_text}>Контакты</p>
          </Link>
        </div>
        <div className={styles.footer_column}>
          <Link className={styles.link}>
            <p className={styles.footer_text}>Условия сервиса</p>
          </Link>
          <div className={styles.footer_row}>
            <img src="./assets/icons/earth.svg" alt="languages" />
            <Link className={styles.footer_language}>
              <p className={styles.footer_language_active}>Рус</p>
            </Link>
            <Link className={styles.footer_language}>
              <p>Eng</p>
            </Link>
          </div>
        </div>
        <div className={styles.footer_column}>
          <div className={styles.footer_row}>
            <a href="/">
              <img
                className={styles.footer_link_icon}
                src="./assets/icons/vk-icon.svg"
                alt="vk icon"
              />
            </a>
            <a href="/">
              <img
                className={styles.footer_link_icon}
                src="./assets/icons/telegram-icon.svg"
                alt="telegram icon"
              />
            </a>
            <a href="/">
              <img
                className={styles.footer_link_icon}
                src="./assets/icons/whatsapp-icon.svg"
                alt="whatsapp icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
