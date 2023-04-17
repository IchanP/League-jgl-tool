import './selectchamp.css'
import React from 'react'
import { useState } from 'react'
import { championNames } from '../../Data/Arrays'

const SelectChamp = () => {

      
	const [input, setInput] = useState('')
	const [matches, setMatches] = useState([])
	
	const handleInput = (event) => {
		const input = event.target.value
		const inputToLower = input.toLowerCase()
		// Find matching names
		const matches = championNames.filter(name => name.toLowerCase().includes(inputToLower))
      
		setInput(input)
		setMatches(matches)
	}
  
	const liClick = (e) => {
		console.log(e.dataset.value)
		setMatches([])
	}

	const handleBlur = () => {
		setTimeout(() => {
			setMatches([])
		}, 100)
	}

	return ( 
		<div className="champcontainer">
			<div className="champimages">
                
			</div>
			<div className="searchbarcontainer">
				<input type="text" value={input} onChange={handleInput} onFocus={handleInput} onBlur={handleBlur}/>
				{matches.length > 0 && (
					<div className="options">
						<ul className="optul">
							{matches.map(match => (
								<li key={match} data-value={match} className='optli' onClick={(e) => { liClick(e.target) }}>
									<img src={`./images/${match}.png`} alt={match} className="championImg" />
									<div className="optli-text" data-value={match}>{match}</div>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

 
export default SelectChamp