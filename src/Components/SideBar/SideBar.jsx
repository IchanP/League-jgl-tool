import './sidebar.css'
import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import  { SideBarContext } from '../../Contexts/SideBarContext'
import ExportOptions from '../ExportOptions/ExportOptions'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import ImportOptions from '../ImportOptions/ImportOptions'
import DownloadOptions from '../DownloadOptions/DownloadOptions'

/**
 * Defines a JSX sidebar element.
 * @returns {HTMLElement} Returns a sidebar element.
 */
const SideBar = () => {
	const { exportObject } = useContext(CampSelectionContext)
	const {valuesOnClick, importOnHover, valuesOnEnter, valuesOnLeave, exportOnClick, setCopiedActive, exportOnHover, exportOnLeave, importOnLeave, setJsonImportActive, setUrlImportActive} = useContext(SideBarContext)


	const [downloadOptionsActive, setDownloadOptionsActive] = useState(false)

	return ( 
		<>
			<div className="sideBarDiv">
				<SideBarContext.Consumer>
					{() => {
						return <>
							<Button Text="Values" onClick={valuesOnClick} onMouseEnter={valuesOnEnter} onMouseLeave={valuesOnLeave}/>
							<Button Text="Import" onMouseEnter={importOnHover} onMouseLeave={importOnLeave}/>
							<ImportOptions 
								onMouseEnter={importOnHover} onMouseLeave={importOnLeave}
								jsonClick={() => {
									setJsonImportActive(true)
								}}
								urlClick={() => {
									setUrlImportActive(true)
								}}
							/>
							<Button Text="Export" onMouseLeave={exportOnLeave} onMouseEnter={exportOnHover} testid="exportButton"/>							
							<ExportOptions onMouseEnter={exportOnHover} onMouseLeave={exportOnLeave} 
								jsonClick={async () => {
									try {
										await navigator.clipboard.writeText(JSON.stringify(exportObject))
										setCopiedActive(true)
										setTimeout(() => {
											setCopiedActive(false)
										}, 2000)
									} catch (err) {
										console.log('fail')
									}
								}} 
								urlClick={exportOnClick}/>
							<Button Text='Download App'
								onMouseEnter={() => setDownloadOptionsActive(true)}
								onMouseLeave={() => setDownloadOptionsActive(false)}
							/>
							<DownloadOptions 
								optiosnActive={downloadOptionsActive}
								onMouseEnter={() => setDownloadOptionsActive(true)}
								onMouseLeave={() => setDownloadOptionsActive(false)}
							/>
						</>
					}}	
				</SideBarContext.Consumer>
			</div>
		</>
	)
}
 
export default SideBar