import React, { useContext, useEffect, useState } from 'react'
import './junglecamp.css'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'

const JungleCamp = ({ theCamp, goldValue, expValue }) => {
	
	const {campNumber, addToCampNumber, removeFromCampNumber, selectedCamps} = useContext(CampSelectionContext)
	const [campSelected, setCampSelected] = useState(false)
	const [orderInRoute, setOrderInRoute] = useState(null)
	const [positionInArray, setPositionInArray] = useState(null)
	const [campName] = theCamp.split('-')

	useEffect(() => {
		if (campSelected === true && selectedCamps[selectedCamps.length - 1]?.id === theCamp) {
			setOrderInRoute(campNumber)
			setPositionInArray(campNumber - 1)
		} else if (campSelected === true && theCamp !== selectedCamps[positionInArray]?.id) {
			setOrderInRoute(orderInRoute - 1)
			setPositionInArray(positionInArray - 1)
		}
	},[campNumber])

	useEffect(() => {
		if (selectedCamps.length === 0) {
			setCampSelected(false)
			setOrderInRoute(null)
			setPositionInArray(null)
		}
	},[selectedCamps])

	return ( 
		<>
			<button className="buttonCamp" id={theCamp} data-iscampselected={campSelected} onClick={(e) => {
				if(campSelected === false) {
					setCampSelected(true)
					setPositionInArray(selectedCamps.length)
					addToCampNumber(e.target)
				} else {
					setCampSelected(false)
					setPositionInArray(null)
					removeFromCampNumber(e.target)
				}
			}}>
				{campSelected && <p className="campOrder" data-testid={theCamp}>{orderInRoute}</p>}
				<img src={`./images/${campName}.png`} alt={campName} className="campImage" id={campName + 'img'}></img> 
			</button>
		</>
	)
}
 
export default JungleCamp