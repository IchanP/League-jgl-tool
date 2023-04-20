import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import  { CampSelectionContext }  from '../src/Contexts/CampSelectionContext'
import CampSelectionContextProvider from '../src/Contexts/CampSelectionContext'
import { useContext } from 'react'
import React from 'react'

const TestComponent = () => {
	const {campNumber, addToCampNumber, removeFromCampNumber, selectedCamps } = useContext(CampSelectionContext)
	return (
		<>
			<p data-testid="campNumberElement">{campNumber}</p>
			<p data-testid="selectedCampsElement">{selectedCamps.length}</p>
			<button id="addButton" data-testid="addButton" onClick={(e) => {
				addToCampNumber(e.target)
			}}></button> 
			<button data-testid="removeButton" onClick={(e) => {
				removeFromCampNumber(e.target.previousElementSibling)
			}}></button>
		</>
	)
}

describe('<CampSelectionProvider />', () => {
	it('CampSelectionContext provides expected fields to child elements', async () => {
		const { getByTestId } = render(
			<CampSelectionContextProvider>
				<TestComponent />
			</CampSelectionContextProvider>
		)

		const addButton = getByTestId('addButton')
		const removeButton = getByTestId('removeButton')
		const campNumberP = getByTestId('campNumberElement')
		const selectedCampsP = getByTestId('selectedCampsElement')

		expect(campNumberP).toHaveTextContent('0')
		expect(selectedCampsP).toHaveTextContent('0')

		for (let i = 0; i < 100; i++) {
			act(() => {
				fireEvent.click(addButton)
			})
		}
		expect(campNumberP).toHaveTextContent('100')
		expect(selectedCampsP).toHaveTextContent('100')
		for (let i = 0; i < 100; i++) {
			act(() => {
				fireEvent.click(removeButton)
			})
		}
		expect(campNumberP).toHaveTextContent('0')
		expect(selectedCampsP).toHaveTextContent('0')
	})
})

describe('<CampSelectionProvider />', () => {
	it('removeFromCampNumber removes all matching elements from selectedCamps', async () => {
		const { getByTestId } = render(
			<CampSelectionContextProvider>
				<TestComponent />
			</CampSelectionContextProvider>
		)

		const addButton = getByTestId('addButton')
		const removeButton = getByTestId('removeButton')
		const campNumberP = getByTestId('campNumberElement')
		const selectedCampsP = getByTestId('selectedCampsElement')

		expect(campNumberP).toHaveTextContent('0')
		expect(selectedCampsP).toHaveTextContent('0')

		for (let i = 0; i < 100; i++) {
			act(() => {
				fireEvent.click(addButton)
			})
		}
		expect(campNumberP).toHaveTextContent('100')
		expect(selectedCampsP).toHaveTextContent('100')

		act(() => {
			fireEvent.click(removeButton)
		})

		expect(campNumberP).toHaveTextContent('0')
		expect(selectedCampsP).toHaveTextContent('0')
	})
})