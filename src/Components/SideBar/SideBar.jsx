import './sidebar.css'
import React, { useContext } from 'react'
import Button from '../Button/Button'
import SideBarContextProvider, { SideBarContext } from '../../Contexts/SideBarContext'

const SideBar = () => {

	const {valuesOnClick, importOnClick, exportOnClick} = useContext(SideBarContext)

	return ( 
		<>
			<div className="sideBarDiv">
				<SideBarContext.Consumer>
					{() => {
						return <>
							<Button Text="Values" onClick={valuesOnClick}/>
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