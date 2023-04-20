import './App.css'
import React from 'react'
import Footer from './Components/Footer/Footer'
import Map from './Components/Map/Map'
import CampSelectionContextProvider, {CampSelectionContext} from './Contexts/CampSelectionContext'
import ExpDisplay from './Components/ExpDisplay/ExpDisplay'

function App() {

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
			<Footer />
		</div>
	)
}

export default App
