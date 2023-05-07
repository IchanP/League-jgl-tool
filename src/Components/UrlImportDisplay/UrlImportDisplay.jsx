import './urlimportdisplay.css'
import React from 'react'
import { useContext } from 'react'
import { SideBarContext } from '../../Contexts/SideBarContext'

/**
 * Defines the display for when the user presses the url import button.
 * @returns {HTMLElement} - Returns the display.
 */
const UrlImportDisplay = () => {
	const {urlImportActive, setUrlImportActive, createUrlImport} = useContext(SideBarContext)

	return ( 
		<div className="urlimportdisplaycontainer">
			{urlImportActive && <div className='urlImportPopup' onClick={() => setUrlImportActive(false)}>
				<div className="seturlimport" onClick={(e) => e.stopPropagation()}>
					<h1 className="importh1url">Import URL</h1>
					<input type="text" className="textfieldImport" id="textfieldImport"/>
					<button className="cancelimport" onClick={() => setUrlImportActive(false)}>X</button>
					<button className='importbutton' data-testid="importPopup" onClick={() => {
						const textarea = document.getElementById('textfieldImport')
						createUrlImport(textarea.value)
					}}>IMPORT</button>
				</div>
			</div>
			}
		</div>

	)
}
 
export default UrlImportDisplay