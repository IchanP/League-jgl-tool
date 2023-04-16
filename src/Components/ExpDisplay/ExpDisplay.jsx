import React, { useEffect, useContext, useState } from 'react'
import './expdisplay.css'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'

const ExpDisplay = () => {
	const { selectedCamps, totalExp, level, totalRequired } = useContext(CampSelectionContext)
	const [copiedStateArray, setCopiedStateArray] = useState([])
	const expThresholds = [0, 280, 660, 1140, 1720, 2400, 3180, 4060, 5040, 6120, 7300, 8580, 9960, 11440, 13020, 14700, 16480, 18360]
	
	useEffect(() => {
		if (selectedCamps.length > 0) {
			// Set initial data-expvalue and data-level
			let currentExp = 0
			let currentLevel = 1
			for (let i = 0; i < selectedCamps.length; i++) {
				let expValue
				i === 0
					? expValue = Number(selectedCamps[i].dataset.expvalue) + 150
					: expValue = Number(selectedCamps[i].dataset.expvalue)
				currentExp += expValue
				if (currentExp >= expThresholds[currentLevel]) {
					currentLevel++
				}
				selectedCamps[i].setAttribute('data-level', currentLevel)
			}
			setCopiedStateArray(selectedCamps)
		}
		if(selectedCamps.length === 0) {
			setCopiedStateArray(selectedCamps)
		}
	}, [selectedCamps])
    
    

	return (  
		<div className="expDisplay">
			<table>
				<thead>
					<tr>
						<th>Camp ID</th>
						<th>Level</th>
						<th>Cumulative Gold</th>
					</tr>
				</thead>
				<tbody>
					{copiedStateArray.map((camp) => (
						<tr key={camp.id}>
							<td className="campName-td">{camp.id}</td>
							<td>{camp.dataset.level}</td>
							<td>{}</td>
						</tr>
					))}
				</tbody>
			</table>
			<p className="totalExp" data-testid="totalExp">Current: {totalExp}/{totalRequired[level -1]} Level: {level}</p>
		</div>

	)
}
 
export default ExpDisplay