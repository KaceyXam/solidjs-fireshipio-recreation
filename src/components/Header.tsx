import { Component } from "solid-js"

import styles from "./Header.module.css";

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <a href="#" class={styles.homeLink}>
        <img src="/images/fireship.svg" />
        <img src="/images/fire.gif" />
      </a>
      <ul>
        <li>
          <a href="#">Pro</a>
        </li>
        <li>
          <a href="#">Labs</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <input type="text" placeholder="Search" />
        </li>
        <li>
          <button>
            Login
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
