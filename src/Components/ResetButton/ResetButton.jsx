import './resetbutton.css'
import React from 'react'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import { useContext } from 'react'

/**
 * Defines a reset button
 * @returns {HTMLElement} Returns a reset button element.
 */
const ResetButton = () => {

	const { resetAll } = useContext(CampSelectionContext)

	return ( 
		<button data-testid="resetButtonMap" id="resetAllCamps" className="reset" onClick={resetAll}>X</button>
	)
}
 
export default ResetButton