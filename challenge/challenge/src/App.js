import React, { useState } from 'react'
import './App.css'
import FormInitials from './components/FormInitials'
import ListUsers from './components/ListUsers'

function App() {
	const INITIAL_COSTS = [
		{
			id: 1,
			name: 'женя',
			age: '16',
		},
	]

	const [dataForm, setDataForm] = useState(INITIAL_COSTS)

	const onSaveDataForm = inputDataForm => {
		setDataForm(prevData => {
			return [inputDataForm, ...prevData]
		})
	}

	return (
		<div className='app'>
			<FormInitials dataForm={dataForm} onSaveDataForm={onSaveDataForm} />
			<ListUsers dataForm={dataForm} />
		</div>
	)
}

export default App
