import { createContext, useContext, useState } from 'react'
import React from 'react'

export const SideBarContext = createContext()

const SideBarContextProvider = ({children}) => {
	return <SideBarContext.Provider>
		{children}
	</SideBarContext.Provider>
}

export default SideBarContextProvider
