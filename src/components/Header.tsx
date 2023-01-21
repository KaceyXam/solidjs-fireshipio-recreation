import { Component } from "solid-js"

import styles from "./Header.module.css";

interface ModalProps {
  search: () => void,
  login: () => void
}

const Header: Component<ModalProps> = (props) => {
  return (
    <nav class={styles.header}>
      <a href="#" class={styles.homeLink}>
        <img src="/images/fireship.svg" />
        <img src="/images/fire.gif" />
      </a>
      <ul class={styles.navList}>
        <li class={`${styles.pro} ${styles.grow}`}>
          <a href="#">Pro</a>
        </li>
        <li class={`${styles.lab} ${styles.grow}`}>
          <a href="#">labs</a>
        </li>
        <li class={`${styles.courses} ${styles.grow}`}>
          <a href="#">courses</a>
        </li>
        <li>
          <button class={styles.search} onClick={props.search}>
            <span>?</span>
            <span class={styles.searchTitle}>Search</span>
            <span class={styles.shortcut}>/</span>
          </button>
        </li>
        <li>
          <button class={styles.login} onClick={props.login}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
