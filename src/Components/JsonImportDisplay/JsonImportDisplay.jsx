import { useContext } from 'react'
import './jsonimportdisplay.css'
import { SideBarContext } from '../../Contexts/SideBarContext'
import React from 'react'

/**
 * Defines the display for when user presses json import button.
 * @returns {HTMLElement} - Returns the display.
 */
const JsonImportDisplay = () => {
	const {jsonImportActive, createJsonImport, setJsonImportActive } = useContext(SideBarContext)
	return ( 
		<div className="importdisplaycontainer">
			{jsonImportActive && <div className="importpopup" onClick={() => setJsonImportActive(false)}>
				<div className="setimport" onClick={(e) => e.stopPropagation()}>
					<h1 className="importh1">Import JSON</h1>
					<textarea placeholder='Paste your import here' id="textareaImport" cols="30" rows="10" className='importTextArea'></textarea>
					<button className="cancelimport" onClick={() => setJsonImportActive(false)}>X</button>
					<button className='importbutton' data-testid="importPopup" onClick={() => {
						const textarea = document.getElementById('textareaImport')
						createJsonImport(textarea.value)
					}}>IMPORT</button>
				</div>
			</div>
			}
		</div>
	)
}
 
export default JsonImportDisplay