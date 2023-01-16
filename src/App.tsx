// @ts-nocheck
import { Component, onMount, Show, createSignal } from 'solid-js';
import Footer from "./components/Footer";
import Header from "./components/Header";
import clickOutside from "./clickOutside";
import styles from './App.module.css';
import { Portal } from 'solid-js/web';

const clickFunc = clickOutside;

const App: Component = () => {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
      <Header />
      <button onClick={() => setShowModal(!showModal())}>toggle modal</button>
      <Show when={showModal()}>
        <div class="modal" use:clickFunc={() => setShowModal(false)}>
          <h3>Modal Title</h3>
          <p>This is some extra text inside of this modal</p>
        </div>
      </Show>
      <div class="scrolling">Hello World</div>
      <Footer />
    </>
  );
};

export default App;
