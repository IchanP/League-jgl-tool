import { createContext, useState } from 'react'
import React, { useEffect } from 'react'

export const CampSelectionContext = createContext()

/**
 * A React component that provides context for exp and gold values.
 * @param {React.PropsWithChildren} props - The component props.
 * @returns {JSX.Element} - The JSX element to be rendered.
 */
const CampSelectionContextProvider = ({children}) => {
	const [sideSelected, setSideSelected] = useState(window.location.pathname.split('/')[1])
	const [campNumber, setCampNumber] = useState(0)
	const [selectedCamps, setSelectedCamps] = useState([])
	const [totalExp, setTotalExp] = useState(0)
	const [totalGold, setTotalGold] = useState(0)
	const [level, setLevel] = useState(1)
	const totalRequired = [ 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280, 1380, 1480, 1580, 1680, 1780, 1880]

	/**
	 * Adds experience to the totalExp state.
	 * @param {number} expvalue - The exp value to work with.
	 */
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

	useEffect(() => {
		const selectedCampIds = selectedCamps.map((camp) => camp.id).join(':')
		const encodedIds = window.btoa(selectedCampIds)
		const newUrl = `${window.location.origin}/${sideSelected}/${encodedIds}`
		window.history.pushState(null, null, newUrl)
	}, [sideSelected, selectedCamps])	

	/**
	 * Reduces experience for the totalExp state.
	 * @param {number} expvalue - The exp value to work with.
	 */
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
			/**
			 * Resets all states.
			 */
			resetAll: () => {
				setSelectedCamps([])
				setCampNumber(0)
				setTotalGold(0)
				setLevel(1)
				setTotalExp(0)
			},
			/**
			 * Saves the element target and retrieves values saved as attributes.
			 * @param {HTMLElement} e - The event target.
			 */
			addToCampNumber: (e) => {
				expAdd(e.dataset.expvalue)
				setTotalGold(totalGold + Number(e.dataset.goldvalue))
				setCampNumber(campNumber + 1)
				setSelectedCamps([...selectedCamps, e])
			},
			/**
			 * Removes the element target from state array and detracts its values from states.
			 * @param {HTMLElement} e - The event target.
			 */
			removeFromCampNumber: (e) => {
				expDetract(e.dataset.expvalue)
				const updatedSelectedCamps = selectedCamps.filter((element) => element !== e)
				setTotalGold(totalGold - Number(e.dataset.goldvalue))
				setSelectedCamps(updatedSelectedCamps)
				setCampNumber(updatedSelectedCamps.length)			
			},
			selectedCamps: selectedCamps,
			setSelectedCamps: setSelectedCamps,
			setSideSelected: setSideSelected,
			sideSelected: sideSelected
		}}
	>
		{children}
	</CampSelectionContext.Provider>
}

export default CampSelectionContextProvider
