import './map.css'
import React, { useContext } from 'react'
import map from './images/map11.png'
import JungleCamp from '../JungleCamp/JungleCamp'
import { LineContext } from '../../Contexts/Linecontext'

const Map = () => {

	const { pressedButtons } = useContext(LineContext)

	console.log(pressedButtons)

	const camps = [
		{
			position:'gromp-blue',
			goldValue: 200,
			expValue: 80,
		},
		{
			position: 'bluesentinel-blue',
			goldValue: 175,
			expValue: 90,    
		},
		{
			position: 'murkwolf-blue',
			goldValue: 160,
			expValue: 85,
		},
		{
			position: 'raptor-blue',
			goldValue: 150,
			expValue: 75,
		},
		{
			position: 'redbrambleback-blue',
			goldValue: 175,
			expValue: 90,
		},
		{
			position: 'krugs-blue',
			goldValue: 201,
			expValue: 109,
		},
		{
			position: 'scuttlecrab-top',
			goldValue: 180,
			expValue: 55,
		},
		{
			position: 'scuttlecrab-bottom',
			goldValue: 180,
			expValue: 55,
		}, 	
		{
			position:'gromp-red',
			goldValue: 200,
			expValue: 80,
		},
		{
			position: 'bluesentinel-red',
			goldValue: 175,
			expValue: 90,    
		},
		{
			position: 'murkwolf-red',
			goldValue: 160,
			expValue: 85,
		},
		{
			position: 'raptor-red',
			goldValue: 150,
			expValue: 75,
		},
		{
			position: 'redbrambleback-red',
			goldValue: 175,
			expValue: 90,
		},
		{
			position: 'krugs-red',
			goldValue: 201,
			expValue: 109,
		},
	]

	return ( 
		<div className="mapwrap">
			<img src={map} alt="gamemap" className="mapholder" />
			{camps.map((camp) =>  (
				<JungleCamp 
					key={camp.position}
					theCamp={camp.position}
					goldValue={camp.goldValue}
					expValue={camp.expValue}
				/>
			))}
		</div>
	)
}
 
export default Map