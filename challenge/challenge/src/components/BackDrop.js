import styles from './BackDrop.module.css'
function BackDrop(props) {
	return <div className={styles.backdrop} onClick={props.onClick}></div>
}
export default BackDrop
