import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SideBarContextProvider from './Contexts/SideBarContext'
import CampSelectionContextProvider from './Contexts/CampSelectionContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CampSelectionContextProvider>		
			<SideBarContextProvider>
				<App />
			</SideBarContextProvider>
		</CampSelectionContextProvider>
	</React.StrictMode>,
)
