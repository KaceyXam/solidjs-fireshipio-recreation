import { Component, createSignal } from 'solid-js';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Body from "./sections/Body";

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
      <Body />      
      <Footer />
    </>
  );
};

export default App;
