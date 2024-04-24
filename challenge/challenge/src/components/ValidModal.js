import styles from './ValidModal.module.css'

const ValidModal = props => {
	return (
		<div className={styles.box}>
			<div className={styles.boxInBox}>
				<p>{props.mistakeOne}</p>
			</div>
			<p>{props.mistakeTwo}</p>
			<button onClick={props.onClose}>Закрыть</button>
		</div>
	)
}
export default ValidModal
