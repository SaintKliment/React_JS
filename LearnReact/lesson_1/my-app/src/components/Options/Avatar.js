import styles from './Avatar.module.css'
import { getImageUrl } from './utils.js'

function Avatar({ person, size }) {
	return (
		<img
			className={styles.avatar}
			scr='https://i.imgur.com/1bX5QH6.jpg'
			alt='Lin blabla'
			width={100}
			height={100}
		/>
	)
}

// function Avatar(props) {
// 	let person = props.person
// 	let size = props.size
// }
