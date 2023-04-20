import React from 'react'
import './button.css'

const Button = ({Text, onClick}) => {
	return ( 
		<>
			<button className="sideB" onClick={onClick}>{Text}</button>
		</>
	)
}
 
export default Button