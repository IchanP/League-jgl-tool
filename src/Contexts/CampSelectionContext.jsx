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
	}
	const removeFromCampNumber = (e) => {
		setCampNumber(campNumber - 1)
		setSelectedCamps(selectedCamps.filter((element) => element !== e))
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