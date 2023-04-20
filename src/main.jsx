import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SideBar from './Components/SideBar/SideBar'
import SideBarContextProvider from './Contexts/SideBarContext'
import ValuesDisplay from './Components/ValuesDisplay/ValuesDisplay'
import CampSelectionContextProvider from './Contexts/CampSelectionContext'
import Copied from './Components/Copied/Copied'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CampSelectionContextProvider>
			<App />
		</CampSelectionContextProvider>
		<SideBarContextProvider>
			<ValuesDisplay />
			<Copied />
			<SideBar />
		</SideBarContextProvider>
	</React.StrictMode>,
)
