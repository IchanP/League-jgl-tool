import { createContext, useContext, useState } from 'react'
import React from 'react'

export const SideBarContext = createContext()

const SideBarContextProvider = ({children}) => {

	const valuesOnClick = () => {
		console.log('values on click')
	}
	const importOnClick = () => {
		console.log('import on click')
	}
	const exportOnClick = () => {
		console.log('export on click')
	}

	return <SideBarContext.Provider
		value={{
			valuesOnClick: valuesOnClick,
			importOnClick: importOnClick,
			exportOnClick: exportOnClick,
		}}
	>
		{children}
	</SideBarContext.Provider>
}

export default SideBarContextProvider
