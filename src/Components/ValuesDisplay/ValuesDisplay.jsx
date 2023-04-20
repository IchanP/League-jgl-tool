import './valuesdisplay.css'
import React, { useContext } from 'react'
import { SideBarContext } from '../../Contexts/SideBarContext'
import coinImage from '../../assets/currency_rp_490px.png'

const ValuesDisplay = () => {

	const campValues = [
		{
			name: 'Gromp',
			exp: '200',
			gold: '80'
		},
		{
			name: 'Blue Sentinel',
			exp: '175',
			gold: '90'
		},
		{
			name: 'Murk Wolf',
			exp: '160',
			gold: '85'
		},
		{
			name: 'Raptors',
			exp: '150',
			gold: '75'
		},
		{
			name: 'Red Brambleback',
			exp: '175',
			gold: '90'
		},
		{
			name: 'Krugs',
			exp: '201',
			gold: '109'
		},
		{
			name: 'Scuttlecrab',
			exp: '180',
			gold: '55'
		}
	]

	const { valuesActive } = useContext(SideBarContext)

	return ( 
		<>
			<div className="valuedisplay" data-isactive={valuesActive}>
				<table>
					<thead>
						<tr>
							<th className='value-display-th'>Camp</th>
							<th className='value-display-th'>Experience</th>
							<th className='value-display-th'
							>Gold</th>
						</tr>
					</thead>
					<tbody>
						{campValues.map((camp) => (
							<tr key={camp.name}>
								<td>{camp.name}</td>
								<td>{camp.exp}</td>
								<td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{camp.gold}
									<img src={coinImage} alt="image of a coin" className="coinTd" />
								</td>
							</tr>
						))}
					</tbody>
				</table>

			</div> 
		</>
	)
}
 
export default ValuesDisplay