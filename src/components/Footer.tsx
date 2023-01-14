import { Component } from "solid-js"
import styles from "./Footer.module.css"

const Footer: Component = () => {
  return (
    <footer class={styles.footer}>
      <span class="bar" />
      <div>Find an issue with this page? <a href="#">Fix it on GitHub</a></div>
      <div>Need help? Email <span>hello@fireship.io</span></div>
      <h6>Helpful Links</h6>
      <div>Courses | Links | Snippets | Tags | Contrib | Privacy | Terms</div>
      <div>Copyright &copy; 2023 Fireship LLC</div>
    </footer>
  )
}

export default Footer