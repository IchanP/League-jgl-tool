import React from 'react'
import { render, fireEvent, waitFor, act, getByTestId } from '@testing-library/react'
import Map from '../src/Components/Map/Map'
import '@testing-library/jest-dom'
import CampSelectionContextProvider from '../src/Contexts/CampSelectionContext.jsx'
import JungleCamp from '../src/Components/JungleCamp/JungleCamp'
/*
describe('JungleCamp component', () => {
	it('should set campSelected to true when button with id "gromp-blue" is clicked once', async () => {
		render(
			<CampSelectionContextProvider>
				<Map />
			</CampSelectionContextProvider>
		)
		const grompBlueButton = document.getElementById('gromp-blue')

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
		const grompBlueButton = document.getElementById('gromp-blue')

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
		const grompBlueButton = document.getElementById('gromp-blue')
		const grompRedButton = document.getElementById('gromp-red')
		const blueSentinelBlueButton = document.getElementById('bluesentinel-blue')
		const blueSentinelRedButton = document.getElementById('bluesentinel-red')
		const krugsRedButton = document.getElementById('krugs-red')
		const krugsBlueButton = document.getElementById('krugs-blue')
		const raptorsBlueButton = document.getElementById('raptor-blue')
		const raptorsRedButton = document.getElementById('raptor-red')
		const wolfsRedButton = document.getElementById('murkwolf-red')
		const wolfsBlueButton = document.getElementById('murkwolf-blue')
		const redBuffBlueButton = document.getElementById('redbrambleback-blue')
		const redBuffRedButton = document.getElementById('redbrambleback-red')
		const scuttleTopButton = document.getElementById('scuttlecrab-top')
		const scuttleBotButton = document.getElementById('scuttlecrab-bottom')

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
}) */

describe('JungleCamp component', () => {
	it('Should dynamically lower the camp order after earlier is unselected', async () => {
		render(<CampSelectionContextProvider>
			<JungleCamp theCamp='gromp-blue'></JungleCamp>
		</CampSelectionContextProvider>
		)
		
		const grompBlueButton = document.getElementById('gromp-blue')
		console.log(grompBlueButton.id)

		act(() => {
			fireEvent.click(grompBlueButton)
		})

		await waitFor(() => {
			expect(grompBlueButton).toBeTruthy()
		})

		const pElement = getByTestId(grompBlueButton, 'gromp-blue')
		console.log(pElement.innerHTML)
	})
})