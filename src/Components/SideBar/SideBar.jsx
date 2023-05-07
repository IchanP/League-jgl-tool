import './sidebar.css'
import React, { useContext } from 'react'
import Button from '../Button/Button'
import  { SideBarContext } from '../../Contexts/SideBarContext'
import ExportOptions from '../ExportOptions/ExportOptions'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'

/**
 * Defines a JSX sidebar element.
 * @returns {HTMLElement} Returns a sidebar element.
 */
const SideBar = () => {
	const {exportUrl, exportObject} = useContext(CampSelectionContext)
	const {valuesOnClick, importOnClick, valuesOnEnter, valuesOnLeave, setCopiedActive, exportOnHover, exportOnLeave} = useContext(SideBarContext)

	return ( 
		<>
			<div className="sideBarDiv">
				<SideBarContext.Consumer>
					{() => {
						return <>
							<Button Text="Values" onClick={valuesOnClick} onMouseEnter={valuesOnEnter} onMouseLeave={valuesOnLeave}/>
							<Button Text="Import" onClick={importOnClick}/>
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
								urlClick={async () => {
									try {
										await navigator.clipboard.writeText(exportUrl)
										setCopiedActive(true)
										setTimeout(() => {
											setCopiedActive(false)
										}, 2000)
									} catch (err) {
										console.log('fail')
									} 
								}}/>
						</>
					}}	
				</SideBarContext.Consumer>
			</div>
		</>
	)
}
 
export default SideBar