import React from "react";

import { Card } from "../Card/Card";
import styles from "./section.module.css";

export const Section = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <span className={styles.section_name}>{title}</span>
      <div className={styles.cards_container}>
        {items.map((item, index) => {
          return <Card item={item} key={`item_${index}`} />;
        })}
      </div>
    </section>
  );
};
