import './map.css'
import React from 'react'
import map from './images/map11.png'
import JungleCamp from '../JungleCamp/JungleCamp'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import ResetButton from '../ResetButton/ResetButton'

const Map = () => {

	const camps = [
		{
			position:'gromp-blue',
			expValue: 200,
			goldValue: 80,
		},
		{
			position: 'bluesentinel-blue',
			expValue: 175,
			goldValue: 90,    
		},
		{
			position: 'murkwolf-blue',
			expValue: 160,
			goldValue: 85,
		},
		{
			position: 'raptor-blue',
			expValue: 150,
			goldValue: 75,
		},
		{
			position: 'redbrambleback-blue',
			expValue: 175,
			goldValue: 90,
		},
		{
			position: 'krugs-blue',
			expValue: 201,
			goldValue: 109,
		},
		{
			position: 'scuttlecrab-top',
			expValue: 180,
			goldValue: 55,
		},
		{
			position: 'scuttlecrab-bottom',
			expValue: 180,
			goldValue: 55,
		}, 	
		{
			position:'gromp-red',
			expValue: 200,
			goldValue: 80,
		},
		{
			position: 'bluesentinel-red',
			expValue: 175,
			goldValue: 90,    
		},
		{
			position: 'murkwolf-red',
			expValue: 160,
			goldValue: 85,
		},
		{
			position: 'raptor-red',
			expValue: 150,
			goldValue: 75,
		},
		{
			position: 'redbrambleback-red',
			expValue: 175,
			goldValue: 90,
		},
		{
			position: 'krugs-red',
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