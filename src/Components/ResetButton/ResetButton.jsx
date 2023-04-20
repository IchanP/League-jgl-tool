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
		<button data-testid="resetButtonMap" className="reset" onClick={resetAll}/>
	)
}
 
export default ResetButton