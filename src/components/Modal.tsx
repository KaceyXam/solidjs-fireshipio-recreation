
import { Component, JSXElement, createSignal, createEffect, onMount, } from "solid-js";
import styles from "./Modal.module.css"
import clickOutside from "../clickOutside"

const clickFunc = clickOutside;

const Modal: Component<{ children: JSXElement, show: boolean, toggleFunc: () => void }> = (props) => {
	let modal: HTMLDialogElement;

	const [show, setShow] = createSignal(props.show);
	
	createEffect(() => {
		if (props.show) {
			modal.showModal();
		} else {
			modal.close();
		}
	})	
	
	const handleOutside = () => {
		props.toggleFunc();
	}
	
	return (
		<dialog ref={modal} class={styles.modal} use:clickFunc={handleOutside}>
			{props.children}
			<button onClick={handleOutside}>Close</button>
		</dialog>
	)
}

export default Modal;

