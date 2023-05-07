import { useContext } from 'react'
import './importdisplay.css'
import { SideBarContext } from '../../Contexts/SideBarContext'
import React from 'react'

/**
 * Defines the display for when user presses import button.
 * @returns {HTMLElement} - Returns the display.
 */
const ImportDisplay = () => {
	const {importActive, setImportActive, createImport } = useContext(SideBarContext)
	return ( 
		<div className="importdisplaycontainer">
			{importActive && <div className="importpopup" onClick={() => setImportActive(false)}>
				<div className="setimport" onClick={(e) => e.stopPropagation()}>
					<h1 className="importh1">Import</h1>
					<p className="importP">We currently only support JSON imports in the app!</p>
					<textarea placeholder='Paste your import here' id="textareaImport" cols="30" rows="10" className='importTextArea'></textarea>
					<button className="cancelimport" onClick={() => setImportActive(false)}>X</button>
					<button className='importbutton' data-testid="importPopup" onClick={() => {
						const textarea = document.getElementById('textareaImport')
						createImport(textarea.value)
					}}>IMPORT</button>
				</div>
			</div>
			}
		</div>
	)
}
 
export default ImportDisplay