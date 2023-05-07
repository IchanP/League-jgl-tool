import './map.css'
import React, { useContext } from 'react'
import map from './images/map11.png'
import JungleCamp from '../JungleCamp/JungleCamp'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import ResetButton from '../ResetButton/ResetButton'
import { camps } from '../../Data/Arrays'
import { useEffect } from 'react'
import { SideBarContext } from '../../Contexts/SideBarContext'

/**
 * Defines a map element containing the jungle camps.
 * @returns {HTMLElement} Returns a map element.
 */
const Map = () => {

	const {newImport} = useContext(SideBarContext)

	useEffect(() => {
		if (newImport?.route) {
			const string = atob(newImport.route)
			let newArray = []
			newArray = string.split(':')
			clickCamps(newArray)
		}
	},[newImport])

	/**
	 * Clicks the camps in the array.
	 * @param {NodeList} array - A list of html elements.
	 */
	const clickCamps = async (array) => {
		const allCamps = document.getElementsByClassName('buttonCamp')
		for(const elements of allCamps) {
			if(elements.dataset.iscampselected === 'true') {
				await elements.click()
			}
		}
		for(const element of array) {
			const button = document.getElementById(element)
			await button.click()
		}
	}

	return (
		<CampSelectionContext.Consumer>
			{() => (
				<div className="mapwrap">
					<ResetButton />
					<img src={map} alt="gamemap" className="mapholder" />
					{camps.map((camp) => (
						<JungleCamp
							key={camp.position}
							theCamp={camp.position}
							goldValue={camp.goldValue}
							expValue={camp.expValue}
						/>
					))}
				</div>
			)}
		</CampSelectionContext.Consumer>
	)
}
 
export default Map