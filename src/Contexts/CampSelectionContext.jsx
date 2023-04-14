import { createContext, useState } from 'react'
import React from 'react'

export const CampSelectionContext = createContext()

const CampSelectionContextProvider = ({children}) => {

	const [campNumber, setCampNumber] = useState(0)
	const [selectedCamps, setSelectedCamps] = useState([])
	// add stats and functions here
	const addToCampNumber = (e) => {
		setCampNumber(campNumber + 1)
		setSelectedCamps([...selectedCamps, e])
		console.log(selectedCamps)
	}
	const removeFromCampNumber = (e) => {
		setSelectedCamps(selectedCamps.filter((element) => element !== e))
		setCampNumber(campNumber - 1)
		console.log(selectedCamps)
	}
	return <CampSelectionContext.Provider
		value={{
			// Add attributes here
			campNumber: campNumber,
			addToCampNumber: addToCampNumber,
			removeFromCampNumber: removeFromCampNumber,
			selectedCamps: selectedCamps
		}}
	>
		{children}
	</CampSelectionContext.Provider>
}

export default CampSelectionContextProvider