import { createContext, useState } from 'react'
import React from 'react'

export const CampSelectionContext = createContext()

const CampSelectionContextProvider = ({children}) => {

	const [campNumber, setCampNumber] = useState(0)
	const [selectedCamps, setSelectedCamps] = useState([])
	const [totalExp, setTotalExp] = useState(0)
	const [totalGold, setTotalGold] = useState(0)
	const [level, setLevel] = useState(1)
	const totalRequired = [ 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280, 1380, 1480, 1580, 1680, 1780, 1880]
	const expAdd = (expvalue) => {
		if (selectedCamps.length === 0) {
			setTotalExp((Number(expvalue) + 150) - totalRequired[level - 1])
			Number(expvalue) + 150 >= totalRequired[level - 1]
				? setLevel(level + 1)
				: {}
		} else {
			if(totalExp + Number(expvalue) >= totalRequired[level - 1]) {
				setTotalExp((totalExp + Number(expvalue)) - totalRequired[level - 1])
				setLevel(level + 1)
			} else {
				setTotalExp(totalExp + Number(expvalue))
			}
		}
	}
	const expDetract = (expvalue) => {
		if(selectedCamps.length === 1) {
			setTotalExp(0)
			setLevel(level - 1)
		} else {
			if(totalExp - Number(expvalue) < 0) {
				const amountToDetract = totalExp - Number(expvalue)
				const nextRequiredExp = totalRequired[level - 2]
				setTotalExp(nextRequiredExp + amountToDetract)
				setLevel(level - 1)
			} else {
				setTotalExp(totalExp - Number(expvalue))
			}
		}
	}

	return <CampSelectionContext.Provider
		value={{
			// Add attributes here
			campNumber: campNumber,
			totalExp: totalExp,
			level: level,
			totalRequired: totalRequired,
			totalGold: totalGold,
			resetAll: () => {
				setSelectedCamps([])
				setCampNumber(0)
				setTotalGold(0)
				setLevel(1)
				setTotalExp(0)
			},
			addToCampNumber: (e) => {
				expAdd(e.dataset.expvalue)
				setTotalGold(totalGold + Number(e.dataset.goldvalue))
				setCampNumber(campNumber + 1)
				setSelectedCamps([...selectedCamps, e])
			},
			removeFromCampNumber: (e) => {
				expDetract(e.dataset.expvalue)
				const updatedSelectedCamps = selectedCamps.filter((element) => element !== e)
				setTotalGold(totalGold - Number(e.dataset.goldvalue))
				setSelectedCamps(updatedSelectedCamps)
				setCampNumber(updatedSelectedCamps.length)			
			},
			selectedCamps: selectedCamps
		}}
	>
		{children}
	</CampSelectionContext.Provider>
}

export default CampSelectionContextProvider
