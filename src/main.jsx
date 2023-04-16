import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SideBar from './Components/SideBar/SideBar'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<SideBar></SideBar>
	</React.StrictMode>,
)
