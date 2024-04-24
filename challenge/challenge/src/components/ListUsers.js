import styles from './ListUsers.module.css'
import User from './User'

const ListUsers = props => {
	return (
		<div className={styles.blockUsers}>
			{props.dataForm.map(user => (
				<User key={user.id} name={user.name} age={user.age} />
			))}
		</div>
	)
}

export default ListUsers
