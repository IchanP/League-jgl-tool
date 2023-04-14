import { createContext, useState } from 'react'
import React from 'react'

export const LineContext = createContext()

const LineContextProvider = ({children}) => {

	// Add code here

	return <LineContext.Provider
		value={{
			test: 'test'
		}}
	>
		{children}
	</LineContext.Provider>
}

export default LineContextProvider
