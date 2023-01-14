import type { Component } from 'solid-js';
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from './App.module.css';

const App: Component = () => {
  return (
    <>
      <Header />
      <div class="scrolling">Hello World</div>
      <Footer />
    </>
  );
};

export default App;
