import { createContext, useState } from 'react'
import React from 'react'

export const SideBarContext = createContext()

const SideBarContextProvider = ({children}) => {

	const [importActive, setImportActive] = useState(false)
	const [valuesActive, setValuesActive] = useState(false)
	const [valuesClicked, setValuesClicked] = useState(false)
    
	const valuesOnEnter = () => {
		setValuesActive(true)
	}

	const valuesOnLeave = () => {
		valuesClicked === false
			? setValuesActive(false)
			: {}
	}

	const valuesOnClick = () => {
		if(valuesActive && valuesClicked) {
			setValuesClicked(false)
			setValuesActive(false)
		} else if (valuesActive && !valuesClicked) {
			setValuesClicked(true)
			setValuesActive(true)
		}  
		if (!valuesActive) {
			setValuesActive(true)
			setValuesClicked(true)
			setImportActive(false)
		}
	}

	const importOnClick = () => {
		setImportActive(true)
	}
	const exportOnClick = () => {
		console.log('export on click')
		// TODO add saved to clipboard
	}

	return <SideBarContext.Provider
		value={{
			importActive: importActive,
			valuesActive: valuesActive,
			valuesOnEnter: valuesOnEnter,
			valuesOnLeave: valuesOnLeave,
			valuesOnClick: valuesOnClick,
			importOnClick: importOnClick,
			exportOnClick: exportOnClick,
		}}
	>
		{children}
	</SideBarContext.Provider>
}

export default SideBarContextProvider
