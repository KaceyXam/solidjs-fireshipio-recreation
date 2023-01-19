
import { Component, JSXElement, createEffect } from "solid-js";
import styles from "./Modal.module.css"

const Modal: Component<{ children: JSXElement, show: boolean, toggleFunc: () => void }> = (props) => {
	let modal: HTMLDialogElement;

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
		<dialog ref={modal} class={styles.modal} onClick={handleOutside}>
			<section class={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
				{props.children}
				<button onClick={handleOutside}>Close</button>
			</section>
		</dialog>
	)
}

export default Modal;

