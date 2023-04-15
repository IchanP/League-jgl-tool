import './resetbutton.css'
import React from 'react'
import { CampSelectionContext } from '../../Contexts/CampSelectionContext'
import { useContext } from 'react'

const ResetButton = () => {

	const { resetAll } = useContext(CampSelectionContext)

	return ( 
		<button className="reset" onClick={resetAll}/>
	)
}
 
export default ResetButton