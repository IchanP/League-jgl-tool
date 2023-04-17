import './sidebar.css'
import React, { useContext } from 'react'
import Button from '../Button/Button'
import  { SideBarContext } from '../../Contexts/SideBarContext'

const SideBar = () => {

	const {valuesOnClick, importOnClick, exportOnClick, valuesOnEnter, valuesOnLeave} = useContext(SideBarContext)

	return ( 
		<>
			<div className="sideBarDiv">
				<SideBarContext.Consumer>
					{() => {
						return <>
							<Button Text="Values" onClick={valuesOnClick}onMouseEnter={valuesOnEnter} onMouseLeave={valuesOnLeave}/>
							<Button Text="Import" onClick={importOnClick}/>
							<Button Text="Export" onClick={exportOnClick}/>	
						</>
					}}	
				</SideBarContext.Consumer>
			</div>
		</>
	)
}
 
export default SideBar