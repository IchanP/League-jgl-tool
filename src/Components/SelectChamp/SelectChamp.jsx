import './selectchamp.css'
import React from 'react'
import { useState } from 'react'
import { championNames } from '../../Data/Arrays'

const SelectChamp = () => {

      
	const [input, setInput] = useState('')
	const [matches, setMatches] = useState([])
	
	const handleInput = (event) => {
		const input = event.target.value.toLowerCase()
      
		// Find matching names
		const matches = championNames.filter(name => name.toLowerCase().includes(input))
      
		setInput(input)
		setMatches(matches)
	}
  

	return ( 
		<div className="champcontainer">
			<div className="champimages">
                
			</div>
			<div className="searchbarcontainer">
				<input type="text" value={input} onChange={handleInput} />
				{matches.length > 0 && (
					<select>
						{matches.map(match => (
							<option key={match} value={match}>
								{match}
							</option>
						))}
					</select>
				)}
			</div>
		</div>
	)
}

 
export default SelectChamp