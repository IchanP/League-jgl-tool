import React, { useState } from 'react'
import './sideselect.css'

/**
 * Defines a sideselector component.
 * @returns {HTMLElement} - Returns a sideselector element
 */
const SideSelect = () => {
  
	/**
	 * Verifies that the other checkbox is not unchecked before unchecking the checkbox.
	 * @param {HTMLElement} target - The target element
	 */
	const sidesOnChange = (target) => {
		const isChecked = target.checked
		const id = target.id
		const otherId = id === 'bluebox' ? 'redbox' : 'bluebox'
		const otherCheckbox = document.getElementById(otherId)
      
		if (!isChecked) {
			// if target checkbox is checked, verify if the other checkbox is also checked
			if (!otherCheckbox.checked) {
				// if the other checkbox is unchecked, prevent unchecking the target checkbox
				target.checked = true
				return
			}
		} 
	}
      
      
      
      
  
	return (
		<>
			<p className="selectsidep">Select side(s)</p>
			<label className="sidebox-label" htmlFor="bluebox" id="bluelabel">
				<input
					type="checkbox"
					className="sidebox"
					id="bluebox"
					defaultChecked
					onChange={(e) => sidesOnChange(e.target)}
				/>
			</label>
			<label className="sidebox-label" htmlFor="redbox" id="redlabel">
				<input
					type="checkbox"
					className="sidebox"
					id="redbox"
					defaultChecked
					onChange={(e) => sidesOnChange(e.target)}
				/>
			</label>
		</>
	)
}
  

 
export default SideSelect
