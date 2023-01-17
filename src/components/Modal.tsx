// @ts-nocheck
import { Component, JSXElement, Show } from "solid-js";
import styles from "./Modal.module.css"
import clickOutside from "../clickOutside"

const clickFunc = clickOutside;

const Modal: Component<{ children: JSXElement, show: boolean, toggleFunc: () => void }> = (props) => {
	return (
		<Show when={props.show}>
			<div class={styles.modal} use:clickFunc={props.toggleFunc}>
				{props.children}
			</div>
		</Show>
	)
}

export default Modal;

