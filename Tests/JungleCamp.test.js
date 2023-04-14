import React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import Map from '../src/Components/Map/Map'
import '@testing-library/jest-dom'
import CampSelectionContextProvider from '../src/Contexts/CampSelectionContext.jsx'

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

