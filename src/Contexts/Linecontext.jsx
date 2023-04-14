import { createContext, useState } from 'react'
import React from 'react'

export const LineContext = createContext()

const LineContextProvider = ({children}) => {

	// Add code here
	const [pressedButtons, setPressedButtons ] = useState([])

	const addPressedButton = (id) => {
		setPressedButtons([...pressedButtons, id])
	}

	const removePressedButton = (id) => {

	}

	return <LineContext.Provider
		value={{
			addPressedButton: addPressedButton,
			removePressedButton: removePressedButton,
			pressedButtons: pressedButtons
		}}
	>
		{children}
	</LineContext.Provider>
}

export default LineContextProvider
