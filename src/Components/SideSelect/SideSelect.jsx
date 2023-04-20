import React from 'react'
import './sideselect.css'

/**
 * Defines a sideselector component.
 * @returns {HTMLElement} - Returns a sideselector element
 */
const SideSelect = () => {
	return ( 
		<>
			<p className="selectsidep">Select side(s)</p>
			<label className='sidebox-label' htmlFor="bluebox" id="bluelabel">
				<input type="checkbox" className='sidebox' id="bluebox" defaultChecked/>
			</label>
			<label className='sidebox-label' htmlFor="redbox" id="redlabel">
				<input type="checkbox" className='sidebox' id="redbox" defaultChecked/>
			</label>
		</>
	)
}
 
export default SideSelect
