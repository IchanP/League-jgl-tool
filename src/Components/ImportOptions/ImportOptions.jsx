import React, { useContext } from 'react'
import './importoptions.css'
import Button from '../Button/Button'
import { SideBarContext } from '../../Contexts/SideBarContext'

/**
 *Defines the options for importing.
 * @param {object} root0 - The react props object.
 * @param {Function} root0.onMouseEnter - Fired when user mouses over the div.
 * @param {Function} root0.onMouseLeave - Fired when the user leaves the div.
 * @param {Function} root0.jsonClick - Fired when the user clicks the JSON button.
 * @param {Function} root0.urlClick - Fired when the user clicks the URL button.
 * @returns {HTMLElement} - Returns the import options component
 */
const ImportOptions = ({onMouseEnter, onMouseLeave, jsonClick, urlClick}) => {

	const {importActive} = useContext(SideBarContext)

	return ( 
		<div className="importoptionscontainer" data-isactive={importActive} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<Button 
				Text='As JSON'
				testid='JSONimport'
				onClick={jsonClick}
			/>
			<Button 
				Text='As URL'
				testid='URLimport'
				onClick={urlClick}
			/>
		</div>
	)
}
 
export default ImportOptions