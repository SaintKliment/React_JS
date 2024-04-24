import styles from './FormInitials.module.css'
import React, { useState } from 'react'
import ValidModal from './ValidModal'
import BackDrop from './BackDrop'

const FormInitials = props => {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [showModal, setShowModal] = useState()
	const [mistakeOne, setmistakeOne] = useState('')
	const [mistakeTwo, setmistakeTwo] = useState('')

	function showModalHandler() {
		setShowModal(true)
	}
	function closeModalHandler() {
		setShowModal(false)
	}

	const inputName = event => {
		setName(event.target.value)
	}
	const inputAge = event => {
		setAge(event.target.value)
	}
	const submitHandler = event => {
		event.preventDefault()

		const dataForm = {
			name: name,
			age: age,
			id: Math.random().toString(),
		}
		if ((dataForm.name === '') | (dataForm.age === '')) {
			setName('')
			setAge('')
			setmistakeOne('Некорректный ввод')
			setmistakeTwo('Форму нельзя отправлять пустой')
			showModalHandler()
			return
		}
		if ((dataForm.age <= 0) | (dataForm.age >= 150)) {
			setName('')
			setAge('')
			setmistakeOne('Некорректный возраст')
			setmistakeTwo('Возраст должен быть больше 0 и меньше 150')
			showModalHandler()
			return
		}

		props.onSaveDataForm(dataForm)
		setName('')
		setAge('')
	}

	return (
		<div className={styles.blockFormInitials}>
			<form onSubmit={submitHandler}>
				<label>Имя</label>
				<input value={name} onChange={inputName} type='text' />
				<label>Возраст</label>
				<input value={age} onChange={inputAge} type='text' />
				<button type='submit'>Добавить Пользователя</button>
			</form>
			{showModal && <BackDrop onClick={closeModalHandler} />}
			{showModal && (
				<ValidModal
					onClose={closeModalHandler}
					mistakeOne={mistakeOne}
					mistakeTwo={mistakeTwo}
				/>
			)}
		</div>
	)
}

export default FormInitials
