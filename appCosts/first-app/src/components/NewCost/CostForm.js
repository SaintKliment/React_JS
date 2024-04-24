import './CostForm.css'
import React, { useState } from 'react'

const CostForm = props => {
	const [name, setName] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	// const [userInput, setUserInput] = useState({
	// 	name: '',
	// 	amount: '',
	// 	date: '',
	// })

	const nameChangeHandler = event => {
		setName(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	name: event.target.value,
		// })
		// setUserInput(previousState => {
		// 	return {
		// 		...previousState,
		// 		name: event.target.value,
		// 	}
		// })
	}
	const amountChangeHandler = event => {
		setAmount(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	name: event.target.value,
		// })
	}
	const dateChangeHandler = event => {
		setDate(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	name: event.target.value,
		// })
	}

	const submitHandler = event => {
		event.preventDefault()

		const costData = {
			description: name,
			amount: amount,
			date: new Date(date),
		}

		props.onSaveCostData(costData)
		setName('')
		setAmount('')
		setDate('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Название</label>
					<input value={name} type='text' onChange={nameChangeHandler} />
				</div>
				<div className='new-cost__control'>
					<label>Сумма</label>
					<input
						value={amount}
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input
						value={date}
						type='date'
						min='2019-01-01'
						max='2024-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавить в расход</button>
					<button type='button' onClick={props.onCancel}>
						Отмена
					</button>
				</div>
			</div>
		</form>
	)
}
export default CostForm
