import React, { useEffect, useState } from 'react'

export const TimePage = () => {
	const [time, setTime] = useState()

	const getData = () => {
		fetch('http://worldtimeapi.org/api/ip', {
			method: 'get',
			headers: {
				Accept: 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => {
				setTime(data)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<div>{time.utc_datetime}</div>
			<div>{time.week_number}</div>
		</>
	)
}
