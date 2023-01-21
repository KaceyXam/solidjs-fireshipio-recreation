import { Component, createSignal } from 'solid-js';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Body from "./sections/Body";

const App: Component = () => {
  const [searchModal, setSearchModal] = createSignal(false);
  const [loginModal, setLoginModal] = createSignal(false);

  return (
    <>
      <Header search={() => setSearchModal(true)} login={() => setLoginModal(true)} />
      <Modal show={searchModal()} toggleFunc={() => setSearchModal(false)}>
        <h3>Search</h3>
        <p>This is where you would search on Fireship.io, but I am not implementing that because that is out of the scope of this project</p>
      </Modal>
      <Modal show={loginModal()} toggleFunc={() => setLoginModal(false)}>
        <h3>Login</h3>
        <p>This is where you would login. Someday, I want to implement this, but not right now, so I will leave it blank.</p>
      </Modal>
      <Body />      
      <Footer />
    </>
  );
};

export default App;
