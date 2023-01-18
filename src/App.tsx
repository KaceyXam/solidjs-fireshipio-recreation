import { Component, onMount, Show, createSignal } from 'solid-js';
import Footer from "./components/Footer";
import Header from "./components/Header";
import clickOutside from "./clickOutside";
import styles from './App.module.css';
import Modal from "./components/Modal"

const clickFunc = clickOutside;

const App: Component = () => {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
      <Header />
      <button onClick={() => setShowModal(!showModal())}>toggle modal</button>
      <Modal show={showModal()} toggleFunc={() => setShowModal(false)}>
        <h3>Hello World</h3>
        <p>This is a paragraph inside a modal</p>
      </Modal>
      
      <div class="scrolling">Hello World</div>
      <Footer />
    </>
  );
};

export default App;
