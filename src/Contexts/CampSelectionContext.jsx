import { createContext, useState } from 'react'
import React from 'react'

export const CampSelectionContext = createContext()

const CampSelectionContextProvider = ({children}) => {

	const [campNumber, setCampNumber] = useState(0)
	const [selectedCamps, setSelectedCamps] = useState([])
  
	return <CampSelectionContext.Provider
		value={{
			// Add attributes here
			campNumber: campNumber,
			addToCampNumber: (e) => {
				console.log('adding camp:' + e)
				setCampNumber(campNumber + 1)
				setSelectedCamps([...selectedCamps, e])
			},
			removeFromCampNumber: (e) => {
				const updatedSelectedCamps = selectedCamps.filter((element) => element !== e)
				setSelectedCamps(updatedSelectedCamps)
				setCampNumber(updatedSelectedCamps.length)
				return updatedSelectedCamps
			},
			selectedCamps: selectedCamps
		}}
	>
		{children}
	</CampSelectionContext.Provider>
}

export default CampSelectionContextProvider
