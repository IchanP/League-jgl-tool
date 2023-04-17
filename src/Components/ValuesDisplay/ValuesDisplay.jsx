import './valuesdisplay.css'
import React, { useContext } from 'react'
import { SideBarContext } from '../../Contexts/SideBarContext'


const ValuesDisplay = () => {

	const { valuesActive } = useContext(SideBarContext)

	return ( 
		<>
			<div className="valuedisplay" data-isactive={valuesActive}>
            
			</div> 
		</>
	)
}
 
export default ValuesDisplay