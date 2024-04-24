import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import React, { useState } from 'react'

const INITIAL_COSTS = [
	{
		id: 'c1',
		date: new Date(2021, 2, 12),
		description: 'Холодильник',
		amount: 999.99,
	},
	{
		id: 'c2',
		date: new Date(2022, 10, 21),
		description: 'Телефон',
		amount: 499.99,
	},
]

const App = () => {
	const [costs, setCosts] = useState(INITIAL_COSTS)

	const addCostHandler = cost => {
		setCosts(prevCosts => {
			return [cost, ...prevCosts]
		})
	}

	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	)
}

// import React from 'react
// return React.createElement(
// 	'div',
// 	{},
// 	React.createElement('h1', {}, 'Учим React')б
// 	React.createElement(Costs, {costs: costs})
// )

export default App
