import React, { useContext, useState } from 'react'
import './expdisplay.css'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'

const ExpDisplay = () => {

	const totalRequired = [ 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280, 1380, 1480, 1580, 1680, 1780, 1880]
	const [level, setLevel] = useState(1)
	const [totalExp, setTotalExp] = useState(0)

	const { selectedCamps } = useContext(CampSelectionContext)
	console.log(selectedCamps)
	console.log(selectedCamps[0]?.dataset.expvalue)
	return (  
		<div className="expDisplay">
			{selectedCamps.map((camp) => (
				<p className="campValues" key={camp.id}>{camp.id} and expvalue: {camp.dataset.expvalue} and goldvalue: {camp.dataset.goldvalue}</p>
			))}
			<p className="totalExp">Current: {totalExp}/{totalRequired[level -1]} Level: {level}</p>
		</div>
	)
}
 
export default ExpDisplay