import React, { useState } from 'react'
import './junglecamp.css'

const JungleCamp = ({ theCamp, goldValue, expValue }) => {
	
	const [campSelected, setCampSelected] = useState(false)

	const [campName] = theCamp.split('-')
	return ( 
		// eslint-disable-next-line react/no-unknown-property
		<button className="buttonCamp" id={theCamp} data-iscampselected={campSelected} onClick={() => {
			campSelected === false
				? setCampSelected(true)
				: setCampSelected(false)
		}}>
			<img src={`./images/${campName}.png`} alt={campName} className="campImage"></img> 
		</button>
	)
}
 
export default JungleCamp