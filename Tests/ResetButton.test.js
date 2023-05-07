import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import CampSelectionContextProvider from '../src/Contexts/CampSelectionContext.jsx'
import App from '../src/App'
import SideBarContextProvider from '../src/Contexts/SideBarContext'

describe('Reset Button component', () => {
	it('Should reset all order of camps when pressed', async () => {
		const {getByTestId} = render(
			<CampSelectionContextProvider>
				<SideBarContextProvider>
					<App />
				</SideBarContextProvider>
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
				<SideBarContextProvider>
					<App />
				</SideBarContextProvider>
			</CampSelectionContextProvider>
		)

		const allButtons = document.getElementsByClassName('buttonCamp')
		for (let i = 0; i < 14; i++) {
			act(() => {
				fireEvent.click(allButtons[i])
			})
		}
		const pElements = document.getElementsByClassName('campName-td')
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

describe('Reset Button component', () => {
	it('Should reset the total exp and level when pressed', async () => {
		const {getByTestId} = render(
			<CampSelectionContextProvider>
				<SideBarContextProvider>
					<App />
				</SideBarContextProvider>
			</CampSelectionContextProvider>
		)

		const grompButton = document.getElementById('Gromp-Blue')
		const blueBuffButton = document.getElementById('Blue-Sentinel-Blue')
		
		act(() => {
			fireEvent.click(grompButton)
		})
		act(() => {
			fireEvent.click(blueBuffButton)
		})

		const totalExpP = getByTestId('totalExp')
		expect(totalExpP).toHaveTextContent('245')
		expect(totalExpP).toHaveTextContent('Level 2')

		const resetButton = getByTestId('resetButtonMap')

		act(() => {
			fireEvent.click(resetButton)
		})

		expect(totalExpP).toHaveTextContent('0/280')
		expect(totalExpP).toHaveTextContent('Level 1')
	})
})

describe('Reset Button Component', () => {
	it('Should set the data-iscampselected attribute on buttons to false', async () => {

		const {getByTestId} = render(
			<CampSelectionContextProvider>
				<SideBarContextProvider>
					<App />
				</SideBarContextProvider>
			</CampSelectionContextProvider>
		)

		const grompButton = document.getElementById('Gromp-Blue')
		const blueBuffButton = document.getElementById('Blue-Sentinel-Blue')
		
		act(() => {
			fireEvent.click(grompButton)
		})
		act(() => {
			fireEvent.click(blueBuffButton)
		})

		expect(grompButton).toHaveAttribute('data-iscampselected', 'true')
		expect(blueBuffButton).toHaveAttribute('data-iscampselected', 'true')

		const resetButton = getByTestId('resetButtonMap')
		act(() => {
			fireEvent.click(resetButton)
		})

		expect(grompButton).toHaveAttribute('data-iscampselected', 'false')
		expect(blueBuffButton).toHaveAttribute('data-iscampselected', 'false')
	})
})