import './Diagram.css'
import DiagramBar from './DiagramBar'

const Diagram = props => {
	const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

	const maxMounthCosts = Math.max(...dataSetsValues)

	return (
		<div className='diagram'>
			{props.dataSets.map(dataSet => (
				<DiagramBar
					key={dataSet.label}
					value={dataSet.value}
					maxValue={maxMounthCosts}
					label={dataSet.label}
				/>
			))}
		</div>
	)
}

export default Diagram
