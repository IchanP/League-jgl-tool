import './map.css'
import React from 'react'
import map from './images/map11.png'

const Map = () => {
	return ( 
		<div className="mapwrap">
			<img src={map} alt="gamemap" className="mapholder"></img>
		</div>
	)
}
 
export default Map