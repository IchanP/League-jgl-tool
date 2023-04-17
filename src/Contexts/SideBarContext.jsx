import { createContext, useState } from 'react'
import React from 'react'

export const SideBarContext = createContext()

const SideBarContextProvider = ({children}) => {

	const [valuesActive, setValuesActive] = useState(false)
	const [importActive, setImportActive] = useState(false)

	const valuesOnClick = () => {
		if (!valuesActive) {
			setValuesActive(true)
			setImportActive(false)
		} else {
			setValuesActive(false)
		}
	}
	const importOnClick = () => {
		setValuesActive(false)
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
			valuesOnClick: valuesOnClick,
			importOnClick: importOnClick,
			exportOnClick: exportOnClick,
		}}
	>
		{children}
	</SideBarContext.Provider>
}

export default SideBarContextProvider
