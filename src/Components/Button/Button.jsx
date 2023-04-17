import React from 'react'
import './button.css'

const Button = ({Text, onClick, onMouseEnter, onMouseLeave}) => {
	return ( 
		<>
			<button className="sideB" onClick={onClick} onMouseEnter={onMouseEnter && onMouseEnter} onMouseLeave={onMouseLeave && onMouseLeave}>{Text}</button>
		</>
	)
}
 
export default Button