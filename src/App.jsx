import './App.css'
import React from 'react'
import Footer from './Components/Footer/Footer'
import Map from './Components/Map/Map'
import LineContextProvider, { LineContext } from './Contexts/Linecontext'

function App() {

	return (
		<div className="App">
			<h1 className="mainTitle">Jingle Gap</h1>
			<LineContextProvider>
				<LineContext.Consumer>
					{() => {
						return <>
							<Map />
						</>
					}}
				</LineContext.Consumer>
			</LineContextProvider>
			<Footer />
		</div>
	)
}

export default App
