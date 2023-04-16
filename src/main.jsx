import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SideBar from './Components/SideBar/SideBar'
import SideBarContextProvider from './Contexts/SideBarContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<SideBarContextProvider>
			<SideBar></SideBar>
		</SideBarContextProvider>
	</React.StrictMode>,
)
