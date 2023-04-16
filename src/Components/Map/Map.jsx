import './map.css'
import React from 'react'
import map from './images/map11.png'
import JungleCamp from '../JungleCamp/JungleCamp'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import ResetButton from '../ResetButton/ResetButton'

const Map = () => {

	const camps = [
		{
			position:'Gromp-Blue',
			expValue: 200,
			goldValue: 80,
		},
		{
			position: 'Blue-Sentinel-Blue',
			expValue: 175,
			goldValue: 90,    
		},
		{
			position: 'Murkwolf-Blue',
			expValue: 160,
			goldValue: 85,
		},
		{
			position: 'Raptor-Blue',
			expValue: 150,
			goldValue: 75,
		},
		{
			position: 'Red-Brambleback-Blue',
			expValue: 175,
			goldValue: 90,
		},
		{
			position: 'Krugs-Blue',
			expValue: 201,
			goldValue: 109,
		},
		{
			position: 'Scuttlecrab-Top',
			expValue: 180,
			goldValue: 55,
		},
		{
			position: 'Scuttlecrab-Bottom',
			expValue: 180,
			goldValue: 55,
		}, 	
		{
			position:'Gromp-Red',
			expValue: 200,
			goldValue: 80,
		},
		{
			position: 'Blue-Sentinel-Red',
			expValue: 175,
			goldValue: 90,    
		},
		{
			position: 'Murkwolf-Red',
			expValue: 160,
			goldValue: 85,
		},
		{
			position: 'Raptor-Red',
			expValue: 150,
			goldValue: 75,
		},
		{
			position: 'Red-Brambleback-Red',
			expValue: 175,
			goldValue: 90,
		},
		{
			position: 'Krugs-Red',
			expValue: 201,
			goldValue: 109,
		},
	]

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