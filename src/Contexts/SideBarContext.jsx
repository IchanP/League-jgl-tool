import { createContext, useState } from 'react'
import React from 'react'

export const SideBarContext = createContext()

/**
 * A React component that provides context for the sidebar state.
 * @param {React.PropsWithChildren} props - The component props.
 * @returns {JSX.Element} - The JSX element to be rendered.
 */
const SideBarContextProvider = ({children}) => {

	const [importActive, setImportActive] = useState(false)
	const [jsonImportActive, setJsonImportActive] = useState(false)
	const [valuesActive, setValuesActive] = useState(false)
	const [valuesClicked, setValuesClicked] = useState(false)
	const [exportOptionsActive, setExportOptionsActive] = useState(false)
	const [copiedActive, setCopiedActive] = useState(false)
	const [newImport, setNewImport] = useState()
	const [urlImportActive, setUrlImportActive] = useState(false)
	/**
	 * Shows the values element when mousing over.
	 */
	const valuesOnEnter = () => {
		setValuesActive(true)
	}

	/**
	 * Hides the values element when leaving mouseover.
	 */
	const valuesOnLeave = () => {
		valuesClicked === false
			? setValuesActive(false)
			: {}
	}

	/**
	 * Shows the values element when clicked, doesn't hide it if mouse leaves element when clicked.
	 */
	const valuesOnClick = () => {
		if(valuesActive && valuesClicked) {
			setValuesClicked(false)
			setValuesActive(false)
		} else if (valuesActive && !valuesClicked) {
			setValuesClicked(true)
			setValuesActive(true)
		}  
		if (!valuesActive) {
			setValuesActive(true)
			setValuesClicked(true)
			setImportActive(false)
		}
	}

	/**
	 * Shows the import options when clicked.
	 */
	const importOnHover = () => {
		setImportActive(true)
	}
	/**
	 * Hides the import options when mouse leaves.
	 */
	const importOnLeave = () => {
		setImportActive(false)
	}

	/**
	 * Saves export string to clipboard when clicked.
	 */
	const exportOnClick = async () => {
		let url = window.location.href
		try {
			await navigator.clipboard.writeText(url)
			setCopiedActive(true)
			setTimeout(() => {
				setCopiedActive(false)
			}, 2000)
		} catch (err) {
			console.log('fail')
		}
	}

	/**
	 * Shows the export options when function is triggered.
	 */
	const exportOnHover =  () => {
		setExportOptionsActive(true)
	}
	
	/**
	 * Hides the export options when function is triggered.
	 */
	const exportOnLeave =  () => {
		setExportOptionsActive(false)
	}
	
	/**
	 * Imports json data
	 * @param {string} value - The value from the text area.
	 */
	const createJsonImport = (value) => {
		try {
			const data = JSON.parse(value)
			setNewImport(data)
		} catch (error) {
			console.error(error)
		}
		//	let newUrl = `${window.location.origin}/${data.side}/${data.route}/${data.champions}`
		//	window.history.pushState(null, null, newUrl)
		setJsonImportActive(false)
	}

	/**
	 * Imports route from url.
	 * @param {string} value - The value from text field.
	 */
	const createUrlImport = (value) => {
		if (/^https?:\/\//.test(value)) {
			setNewImport({side: value.split('/')[3], route: value.split('/')[4], champions: value.split('/')[5]})
		} else {
			// Maybe add error display
			console.log('The URL does not start with http:// or https://')
		}
		setUrlImportActive(false)
	}

	return <SideBarContext.Provider
		value={{
			importActive: importActive,
			valuesActive: valuesActive,
			valuesOnEnter: valuesOnEnter,
			valuesOnLeave: valuesOnLeave,
			valuesOnClick: valuesOnClick,
			importOnHover: importOnHover,
			importOnLeave: importOnLeave,
			exportOnClick: exportOnClick,
			copiedActive: copiedActive,
			setCopiedActive: setCopiedActive,
			exportOnHover: exportOnHover,
			exportOnLeave: exportOnLeave,
			exportOptionsActive: exportOptionsActive,
			jsonImportActive: jsonImportActive,
			setJsonImportActive: setJsonImportActive,
			createJsonImport: createJsonImport,
			newImport: newImport,
			urlImportActive: urlImportActive,
			setUrlImportActive: setUrlImportActive,
			createUrlImport: createUrlImport
		}}
	>
		{children}
	</SideBarContext.Provider>
}

export default SideBarContextProvider
