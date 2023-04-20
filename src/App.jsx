import './App.css'
import React, { useContext, useEffect } from 'react'
import Footer from './Components/Footer/Footer'
import Map from './Components/Map/Map'
import CampSelectionContextProvider from './Contexts/CampSelectionContext'
import { CampSelectionContext } from './Contexts/CampSelectionContext'
import ExpDisplay from './Components/ExpDisplay/ExpDisplay'
import SelectChamp from './Components/SelectChamp/SelectChamp'

function App() {

	const pathname = window.location.pathname
	const { setSelectedCamps, selectedCamps} = useContext(CampSelectionContext)

	/**
	 * Fetches and selects camps based on the encoded IDs present in the URL pathname.
	 */
	useEffect(() => {
		setSelectedCamps([])
		const encodedIds = pathname.substring(1) // skip the first character, which is "/"
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
			<h1 className="mainTitle">Jingle Gap</h1>
			<CampSelectionContextProvider>
				<CampSelectionContext.Consumer>
					{() => { 
						return <>
							<Map />
							<div className="div rightSideGrid">
								<ExpDisplay />
							</div>
						</>
					}}
				</CampSelectionContext.Consumer>
			</CampSelectionContextProvider>
			<SelectChamp>
			</SelectChamp>
			<Footer />
		</div>
	)
}

export default App
