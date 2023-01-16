import { Component } from "solid-js"

import styles from "./Header.module.css";

const Header: Component = () => {
  return (
    <nav class={styles.header}>
      <a href="#" class={styles.homeLink}>
        <img src="/images/fireship.svg" />
        <img src="/images/fire.gif" />
      </a>
      <ul class={styles.navList}>
        <li class={styles.pro}>
          <a href="#">Pro</a>
        </li>
        <li class={styles.labs}>
          <a href="#">labs</a>
        </li>
        <li class={styles.courses}>
          <a href="#">courses</a>
        </li>
        <li>
          <button class={styles.search}>
            <span>?</span>
            <span class={styles.searchTitle}>Search</span>
            <span class={styles.shortcut}>/</span>
          </button>
        </li>
        <li>
          <button class={styles.login}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
