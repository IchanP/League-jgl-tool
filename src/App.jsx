import './App.css'
import React, { useContext, useEffect } from 'react'
import Footer from './Components/Footer/Footer'
import Map from './Components/Map/Map'
import CampSelectionContextProvider from './Contexts/CampSelectionContext'
import { CampSelectionContext } from './Contexts/CampSelectionContext'
import ExpDisplay from './Components/ExpDisplay/ExpDisplay'
import SelectChamp from './Components/SelectChamp/SelectChamp'
import ValuesDisplay from './Components/ValuesDisplay/ValuesDisplay'
import Copied from './Components/Copied/Copied'
import SideBar from './Components/SideBar/SideBar'
import JsonImportDisplay from './Components/JsonImportDisplay/JsonImportDisplay'
import UrlImportDIsplay from './Components/UrlImportDisplay/UrlImportDisplay'

// App component
function App() {

	const { setSelectedCamps, selectedCamps} = useContext(CampSelectionContext)
	const pathname = window.location.pathname
	useEffect(() => {
		setSelectedCamps([])
		const pathnameParts = pathname.split('/')
		const newSideSelected = pathnameParts[1]
		const encodedIds = pathname.split('/').slice(2, -1).join('/')
		if (encodedIds) {
			const decodedIds = window.atob(encodedIds)
			const campIds = decodedIds.split(':')
			const camps = campIds.map((id) => document.getElementById(id))
			/**
			 * Clicks on each camp element and adds it to the selectedCamps state.
			 */
			const clickCamps = async () => {
				for (let i = 0; i < camps.length; i++) {
					setSelectedCamps((prevCamps) => [...prevCamps, camps[i]])
				}
			}
			clickCamps()
		}
		if (newSideSelected === 'Blue') {
			const redBox = document.getElementById('redbox')
			redBox.checked = false
		} else if (newSideSelected === 'Red') {
			const blueBox = document.getElementById('bluebox')
			blueBox.checked = false
		}
	}, [])

  
	/**
	 * Clicks on all selected camps whenever the selectedCamps state updates.
	 */
	useEffect(() => {
	/**
	 * Clicks on each selected camp element.
	 */
		const clickSelectedCamps = async () => {
			for (let i = 0; i < selectedCamps.length; i++) {
				await selectedCamps[i].click()
			}
		}
		clickSelectedCamps()
	}, [selectedCamps])

	return (
		<div className="App">
			<h1 className="mainTitle">PAL Routes</h1>
			<CampSelectionContextProvider>		
				<ValuesDisplay />
				<Copied />
				<SideBar />
				<JsonImportDisplay />
				<UrlImportDIsplay />
				<CampSelectionContext.Consumer>
					{() => { 
						return <>
							<Map />
							<div className="div rightSideGrid">
								<ExpDisplay />
							</div>
							<SelectChamp>
							</SelectChamp>
						</>
					}}
				</CampSelectionContext.Consumer>
			</CampSelectionContextProvider>
			<Footer />
		</div>
	)
}

export default App
