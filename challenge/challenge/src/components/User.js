import styles from './User.module.css'

const User = props => {
	return (
		<div className={styles.elemBlockUsers}>
			<p>
				{props.name} - {props.age} лет
			</p>
		</div>
	)
}

export default User
