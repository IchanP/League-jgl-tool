import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SideBar from './Components/SideBar/SideBar'
import SideBarContextProvider from './Contexts/SideBarContext'
import ValuesDisplay from './Components/ValuesDisplay/ValuesDisplay'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<SideBarContextProvider>
			<ValuesDisplay />
			<SideBar />
		</SideBarContextProvider>
	</React.StrictMode>,
)
