import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Map from '../src/Components/Map/Map'
import '@testing-library/jest-dom'
import CampSelectionContextProvider from '../src/Contexts/CampSelectionContext.jsx'
import App from '../src/App'

describe('Reset Button component', () => {
	it('Should reset all order of camps when pressed', async () => {
		const {getByTestId} = render(
			<CampSelectionContextProvider>
				<Map />
			</CampSelectionContextProvider>
		)
		const allButtons = document.getElementsByClassName('buttonCamp')
		for (let i = 0; i < 14; i++) {
			act(() => {
				fireEvent.click(allButtons[i])
			})
		}
		const pElements = document.getElementsByClassName('campOrder')
		for (let i = 0; i < 14; i++) {
			expect(pElements[i]).toHaveTextContent(i + 1)
		}

		const resetButton = getByTestId('resetButtonMap')

		act(() => {
			fireEvent.click(resetButton)
		})

		for (let i = 0; i < 14; i++) {
			expect(pElements[i]).toBeUndefined()
		}
	})
})

describe('Reset Button component', () => {
	it('Should reset the EXP display values when pressed', async () => {
		const {getByTestId} = render(
			<CampSelectionContextProvider>
				<App />
			</CampSelectionContextProvider>
		)

		const allButtons = document.getElementsByClassName('buttonCamp')
		for (let i = 0; i < 14; i++) {
			act(() => {
				fireEvent.click(allButtons[i])
			})
		}
		const pElements = document.getElementsByClassName('campValues')
		for (let i = 0; i < 14; i++) {
			expect(pElements[i]).toBeInTheDocument()
		}

		const resetButton = getByTestId('resetButtonMap')

		act(() => {
			fireEvent.click(resetButton)
		})

		for (let i = 0; i < 14; i++) {
			expect(pElements[i]).toBeUndefined()
		}
	})
})