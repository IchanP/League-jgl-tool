import './sidebar.css'
import React from 'react'
import Button from '../Button/Button'
import SideBarContextProvider, { SideBarContext } from '../../Contexts/SideBarContext'

const SideBar = () => {
	return ( 
		<>
			<div className="sideBarDiv">
				<SideBarContextProvider>
					<SideBarContext.Consumer>
						{() => {
							return <>
								<Button Text="Values" />
								<Button Text="Import"/>
								<Button Text="Export"/>	
							</>
						}}	
					</SideBarContext.Consumer>
				</SideBarContextProvider>
			</div>
		</>
	)
}
 
export default SideBar