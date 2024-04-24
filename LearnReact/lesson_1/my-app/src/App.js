import React, { Fragment } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Example from './components/Example/Example'
// import { TimePage } from './components/TimePage/TimePage'

function App() {
	return (
		<Fragment>
			<h1>My beautiful data </h1>
			<p>All the data that you want</p>
			<Footer />
			<Example />
			{/* <TimePage /> */}
		</Fragment>
	)
}

export default App
