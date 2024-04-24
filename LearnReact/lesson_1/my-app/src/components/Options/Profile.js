// export default function Profile() {
// 	return (
// 		<div>
// 			<Avatar person={{ name: 'lin blabla', imageID: '1JD32A' }} size={100} />
// 			<Avatar
// 				size={100}
// 				person={{
// 					name: 'Katsuko Saruhashi',
// 					imageId: 'YfeOqp2',
// 				}}
// 			/>
// 			<Avatar
// 				size={80}
// 				person={{
// 					name: 'Aklilu Lemma',
// 					imageId: 'OKS67lh',
// 				}}
// 			/>
// 			<Avatar
// 				size={50}
// 				person={{
// 					name: 'Lin Lanying',
// 					imageId: '1bX5QH6',
// 				}}
// 			/>
// 		</div>
// 	)
// }

// END OF FIRST BLOCK

// function Profile({ person, size, isSepia, thickBorder }) {
// 	return (
// 		<div className='card'>
// 			<Avatar
// 				person={person}
// 				size={size}
// 				isSepia={isSepia}
// 				thickBorder={thickBorder}
// 			/>
// 		</div>
// 	)
// }

// END OF SECOND BLOCK

import Avatar from './Avatar.js'

function Card({ children }) {
	return <div className='card'>{children}</div>
}

export default function Profile() {
	return (
		<Card>
			<Avatar
				size={100}
				person={{
					name: 'Katsuko Saruhashi',
					imageId: 'YfeOqp2',
				}}
			/>
		</Card>
	)
}
