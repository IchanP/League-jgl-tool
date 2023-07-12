import './downloadoptions.css'
import React from 'react'

/**
 * Defines the options for downloading the app.
 * @param {object} root0 - The react props object.
 * @param {boolean} root0.optiosnActive - React state deciding whether to show or hide the element.
 * @param {Function} root0.onMouseEnter - Fires when user hovers the div.
 * @param {Function} root0.onMouseLeave - Fires when user leaves the div.
 * @returns {HTMLElement} - Returns a render of the options.
 */
const DownloadOptions = ({optiosnActive, onMouseEnter, onMouseLeave}) => {
	return ( 
		<div className="downloadoptionscontainer" data-isactive={optiosnActive} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<a href="https://dl.dropboxusercontent.com/s/g606sxd7gbpepdk/electron-league-app-1.0.0-setup.exe?dl=0" className='downloadLink' download="true">Windows</a>
		</div>
	)
}
 
export default DownloadOptions