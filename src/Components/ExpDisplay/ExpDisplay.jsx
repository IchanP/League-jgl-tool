import React, { useEffect, useContext, useState } from 'react'
import './expdisplay.css'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'

const ExpDisplay = () => {
	const { selectedCamps, totalExp, level, totalRequired } = useContext(CampSelectionContext)
	return (  
		<div className="expDisplay">
			{selectedCamps.map((camp) => (
				<p className="campValues" key={camp.id}>{camp.id} and expvalue: {camp.dataset.expvalue} and goldvalue: {camp.dataset.goldvalue}</p>
			))}
			<p className="totalExp" data-testid="totalExp">Current: {totalExp}/{totalRequired[level -1]} Level: {level}</p>
		</div>
	)
}
 
export default ExpDisplay