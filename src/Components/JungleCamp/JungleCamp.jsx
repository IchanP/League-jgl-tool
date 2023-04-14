import React, { useContext, useState } from 'react'
import './junglecamp.css'
import { LineContext } from '../../Contexts/Linecontext'

const JungleCamp = ({ theCamp, goldValue, expValue }) => {
	
	const [campSelected, setCampSelected] = useState(false)

	const [campName] = theCamp.split('-')

	const { addPressedButton, removePressedButton } = useContext(LineContext)

	return ( 
		// eslint-disable-next-line react/no-unknown-property
		<button className="buttonCamp" id={theCamp} data-iscampselected={campSelected} onClick={() => {
			if (campSelected === false) {
				setCampSelected(true)
				addPressedButton(theCamp)
			} else {
				setCampSelected(false)
				removePressedButton(theCamp)
			}
		}}>
			<img src={`./images/${campName}.png`} alt={campName} className="campImage"></img> 
		</button>
	)
}
 
export default JungleCamp