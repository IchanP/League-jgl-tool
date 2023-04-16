import React from 'react'
import { render, fireEvent, waitFor, act, getByTestId } from '@testing-library/react'
import Map from '../src/Components/Map/Map'
import '@testing-library/jest-dom'
import CampSelectionContextProvider from '../src/Contexts/CampSelectionContext.jsx'
import JungleCamp from '../src/Components/JungleCamp/JungleCamp'

describe('JungleCamp component', () => {
	it('should set campSelected to true when button with id "gromp-blue" is clicked once', async () => {
		render(
			<CampSelectionContextProvider>
				<Map />
			</CampSelectionContextProvider>
		)
		const grompBlueButton = document.getElementById('Gromp-Blue')

		act(() => {
			fireEvent.click(grompBlueButton)
		})

		await waitFor(() => {
			expect(grompBlueButton).toBeTruthy()
		})

		expect(grompBlueButton).toHaveAttribute('data-iscampselected', 'true')

	})
})

describe('JungleCamp component', () => {
	it('should set campSelected to false when button with id "gromp-blue" is clicked twice', async () => {
		render(
			<CampSelectionContextProvider>
				<Map />
			</CampSelectionContextProvider>
		)
		const grompBlueButton = document.getElementById('Gromp-Blue')

		act(() => {
			fireEvent.click(grompBlueButton)
		})

		await waitFor(() => {
			expect(grompBlueButton).toBeTruthy()
		})

		expect(grompBlueButton).toHaveAttribute('data-iscampselected', 'true')

		act(() => {
			fireEvent.click(grompBlueButton)
		})

		expect(grompBlueButton).toHaveAttribute('data-iscampselected', 'false')
	})
})

describe('JungleCamp component', () => {
	it('Should be able to select all camps', async () => {
		render(
			<CampSelectionContextProvider>
				<Map />
			</CampSelectionContextProvider>
		)
		const grompBlueButton = document.getElementById('Gromp-Blue')
		const grompRedButton = document.getElementById('Gromp-Red')
		const blueSentinelBlueButton = document.getElementById('Blue-Sentinel-Blue')
		const blueSentinelRedButton = document.getElementById('Blue-Sentinel-Red')
		const krugsRedButton = document.getElementById('Krugs-Red')
		const krugsBlueButton = document.getElementById('Krugs-Blue')
		const raptorsBlueButton = document.getElementById('Raptor-Blue')
		const raptorsRedButton = document.getElementById('Raptor-Red')
		const wolfsRedButton = document.getElementById('Murkwolf-Red')
		const wolfsBlueButton = document.getElementById('Murkwolf-Blue')
		const redBuffBlueButton = document.getElementById('Red-Brambleback-Blue')
		const redBuffRedButton = document.getElementById('Red-Brambleback-Red')
		const scuttleTopButton = document.getElementById('Scuttlecrab-Top')
		const scuttleBotButton = document.getElementById('Scuttlecrab-Bottom')

		act(() => {
			fireEvent.click(grompBlueButton)
			fireEvent.click(grompRedButton)
			fireEvent.click(blueSentinelBlueButton)
			fireEvent.click(blueSentinelRedButton)
			fireEvent.click(krugsBlueButton)
			fireEvent.click(krugsRedButton)
			fireEvent.click(raptorsBlueButton)
			fireEvent.click(raptorsRedButton)
			fireEvent.click(wolfsBlueButton)
			fireEvent.click(wolfsRedButton)
			fireEvent.click(redBuffBlueButton)
			fireEvent.click(redBuffRedButton)
			fireEvent.click(scuttleTopButton)
			fireEvent.click(scuttleBotButton)

		})

		await waitFor(() => {
			expect(grompBlueButton).toBeTruthy()
			expect(grompRedButton).toBeTruthy()
			expect(blueSentinelRedButton).toBeTruthy()
			expect(blueSentinelBlueButton).toBeTruthy()
			expect(krugsRedButton).toBeTruthy()
			expect(krugsBlueButton).toBeTruthy()
			expect(raptorsBlueButton).toBeTruthy()
			expect(raptorsRedButton).toBeTruthy()
			expect(wolfsBlueButton).toBeTruthy()
			expect(wolfsRedButton).toBeTruthy()
			expect(redBuffBlueButton).toBeTruthy()
			expect(redBuffRedButton).toBeTruthy()
			expect(scuttleTopButton).toBeTruthy()
			expect(scuttleBotButton).toBeTruthy()
		})

		expect(grompBlueButton).toHaveAttribute('data-iscampselected', 'true')
		expect(grompRedButton).toHaveAttribute('data-iscampselected', 'true')
		expect(blueSentinelRedButton).toHaveAttribute('data-iscampselected', 'true')
		expect(blueSentinelBlueButton).toHaveAttribute('data-iscampselected', 'true')
		expect(krugsRedButton).toHaveAttribute('data-iscampselected', 'true')
		expect(krugsBlueButton).toHaveAttribute('data-iscampselected', 'true')
		expect(raptorsBlueButton).toHaveAttribute('data-iscampselected', 'true')
		expect(raptorsRedButton).toHaveAttribute('data-iscampselected', 'true')
		expect(wolfsBlueButton).toHaveAttribute('data-iscampselected', 'true')
		expect(wolfsRedButton).toHaveAttribute('data-iscampselected', 'true')
		expect(redBuffBlueButton).toHaveAttribute('data-iscampselected', 'true')
		expect(redBuffRedButton).toHaveAttribute('data-iscampselected', 'true')
		expect(scuttleTopButton).toHaveAttribute('data-iscampselected', 'true')
		expect(scuttleBotButton).toHaveAttribute('data-iscampselected', 'true')

		act(() => {
			fireEvent.click(grompBlueButton)
			fireEvent.click(grompRedButton)
			fireEvent.click(blueSentinelBlueButton)
			fireEvent.click(blueSentinelRedButton)
			fireEvent.click(krugsBlueButton)
			fireEvent.click(krugsRedButton)
			fireEvent.click(raptorsBlueButton)
			fireEvent.click(raptorsRedButton)
			fireEvent.click(wolfsBlueButton)
			fireEvent.click(wolfsRedButton)
			fireEvent.click(redBuffBlueButton)
			fireEvent.click(redBuffRedButton)
			fireEvent.click(scuttleTopButton)
			fireEvent.click(scuttleBotButton)
		})

		expect(grompBlueButton).toHaveAttribute('data-iscampselected', 'false')
		expect(grompRedButton).toHaveAttribute('data-iscampselected', 'false')
		expect(blueSentinelRedButton).toHaveAttribute('data-iscampselected', 'false')
		expect(blueSentinelBlueButton).toHaveAttribute('data-iscampselected', 'false')
		expect(krugsRedButton).toHaveAttribute('data-iscampselected', 'false')
		expect(krugsBlueButton).toHaveAttribute('data-iscampselected', 'false')
		expect(raptorsBlueButton).toHaveAttribute('data-iscampselected', 'false')
		expect(raptorsRedButton).toHaveAttribute('data-iscampselected', 'false')
		expect(wolfsBlueButton).toHaveAttribute('data-iscampselected', 'false')
		expect(wolfsRedButton).toHaveAttribute('data-iscampselected', 'false')
		expect(redBuffBlueButton).toHaveAttribute('data-iscampselected', 'false')
		expect(redBuffRedButton).toHaveAttribute('data-iscampselected', 'false')
		expect(scuttleTopButton).toHaveAttribute('data-iscampselected', 'false')
		expect(scuttleBotButton).toHaveAttribute('data-iscampselected', 'false')
	})
}) 

describe('JungleCamp component', () => {
	it('Should dynamically lower the camp order after earlier is unselected', async () => {
		render(<CampSelectionContextProvider>
			<JungleCamp theCamp='gromp-blue'></JungleCamp>
			<JungleCamp theCamp='murkwolf-blue'></JungleCamp>
			<JungleCamp theCamp='bluesentinel-blue'></JungleCamp>
			<JungleCamp theCamp='raptor-blue'></JungleCamp>
			<JungleCamp theCamp='krugs-blue'></JungleCamp>
		</CampSelectionContextProvider>
		)
		
		const grompBlueButton = document.getElementById('gromp-blue')
		const murkWolfBlueButton = document.getElementById('murkwolf-blue')
		const bluesentinelBlueButton = document.getElementById('bluesentinel-blue')
		const raptorBlueButton = document.getElementById('raptor-blue')
		const krugsBlueButton = document.getElementById('krugs-blue')
		act( () => {
			fireEvent.click(grompBlueButton)
		})

		act(() => {
			fireEvent.click(murkWolfBlueButton)
		})

		act(() => {
			fireEvent.click(bluesentinelBlueButton)
		})
		act(() => {
			fireEvent.click(raptorBlueButton)
		})
		act(() => {
			fireEvent.click(krugsBlueButton)
		})

		act(() => {
			fireEvent.click(murkWolfBlueButton)
		})

		await waitFor(() => {
			expect(grompBlueButton).toBeTruthy()
			expect(murkWolfBlueButton).toBeTruthy()
			expect(bluesentinelBlueButton).toBeTruthy()
			expect(raptorBlueButton).toBeTruthy()
			expect(krugsBlueButton).toBeTruthy()
		})

		const grompPelement = getByTestId(grompBlueButton, 'gromp-blue')
		let murkwolfPelement = null
		try {
			murkwolfPelement = getByTestId(murkWolfBlueButton, 'murkwolf-blue')
		} catch (error) {
			// do nothing, murkwolfPelement will be null
		}
		const blueSentinelPelement = getByTestId(bluesentinelBlueButton, 'bluesentinel-blue')
		const raptorPelement = getByTestId(raptorBlueButton, 'raptor-blue')
		const krugsPelement = getByTestId(krugsBlueButton, 'krugs-blue')

		expect(grompPelement).toHaveTextContent('1')
		expect(murkwolfPelement).toBeNull()
		expect(blueSentinelPelement).toHaveTextContent('2')
		expect(raptorPelement).toHaveTextContent('3')
		expect(krugsPelement).toHaveTextContent('4')
	})
}) 