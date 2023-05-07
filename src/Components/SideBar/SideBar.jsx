import './sidebar.css'
import React, { useContext } from 'react'
import Button from '../Button/Button'
import  { SideBarContext } from '../../Contexts/SideBarContext'
import ExportOptions from '../ExportOptions/ExportOptions'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import ImportOptions from '../ImportOptions/ImportOptions'

/**
 * Defines a JSX sidebar element.
 * @returns {HTMLElement} Returns a sidebar element.
 */
const SideBar = () => {
	const { exportObject, selectedChampions } = useContext(CampSelectionContext)
	const {valuesOnClick, importOnHover, valuesOnEnter, valuesOnLeave, exportOnClick, setCopiedActive, exportOnHover, exportOnLeave, importOnLeave, setJsonImportActive} = useContext(SideBarContext)

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
							/>
							<Button Text="Export" onMouseLeave={exportOnLeave} onMouseEnter={exportOnHover} testid="exportButton"/>							
							<ExportOptions onMouseEnter={exportOnHover} onMouseLeave={exportOnLeave} 
								jsonClick={async () => {
									console.log(selectedChampions)
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
						</>
					}}	
				</SideBarContext.Consumer>
			</div>
		</>
	)
}
 
export default SideBar