import React from 'react'
import './junglecamp.css'

const JungleCamp = ({ theCamp, goldValue, expValue }) => {
	console.log(theCamp + goldValue + expValue)
	const [campName] = theCamp.split('-')
	console.log(campName)
	return ( 
		<button className="buttonCamp" id={theCamp}>
			<img></img> 
		</button>
	)
}
 
export default JungleCamp