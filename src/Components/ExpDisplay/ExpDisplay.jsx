import React, { useEffect, useContext, useState } from 'react'
import './expdisplay.css'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'

const ExpDisplay = () => {
	const { selectedCamps, totalExp, level, totalRequired, totalGold } = useContext(CampSelectionContext)
	const [copiedStateArray, setCopiedStateArray] = useState([])
	const expThresholds = [0, 280, 660, 1140, 1720, 2400, 3180, 4060, 5040, 6120, 7300, 8580, 9960, 11440, 13020, 14700, 16480, 18360]
	
	useEffect(() => {
		if (selectedCamps.length > 0) {
			let currentGold = 0
			let currentExp = 0
			let currentLevel = 1
			for (let i = 0; i < selectedCamps.length; i++) {
				currentGold += Number(selectedCamps[i].dataset.goldvalue)
				let expValue
				i === 0
					? expValue = Number(selectedCamps[i].dataset.expvalue) + 150
					: expValue = Number(selectedCamps[i].dataset.expvalue)
				currentExp += expValue
				if (currentExp >= expThresholds[currentLevel]) {
					currentLevel++
				}
				selectedCamps[i].setAttribute('data-cumulativegold', currentGold)
				selectedCamps[i].setAttribute('data-level', currentLevel)
				selectedCamps[i].setAttribute('data-name', selectedCamps[i].id.split('-').join(' '))
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
						<th>Camp</th>
						<th>Level</th>
						<th>Cumulative Gold</th>
					</tr>
				</thead>
				<tbody>
					{copiedStateArray.map((camp) => (
						<tr key={camp.id}>
							<td className="campName-td">{camp.dataset.name}</td>
							<td>{camp.dataset.level}</td>
							<td>{camp.dataset.cumulativegold}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="expbar">		
				<div className="expbar-inner" style={{width: `${totalExp/totalRequired[level-1]*100}%`}}></div>
				<p className="totalExp" data-testid="totalExp"><span className="requiredExp">{totalExp}/{totalRequired[level -1]}</span> <br /> Level {level}</p>
			</div>
			<p className="totalGold" data-testid="totalGold">Total Gold<br /> {totalGold} </p>
		</div>

	)
}
 
export default ExpDisplay