import './App.css'
// eslint-disable-next-line
import { useState, useEffect } from 'react'

const App = () => {
	const [colorR, setColorR] = useState(0);
	const [colorG, setColorG] = useState(0);	
	
	const nums = []
	
	const divStyle = {
		// width: "3rem",
		aspectRatio: "1/1",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		background: "rgb(0, 0, 0)"
	}
	
	for(let i = 1; i < 45; i++) {
		nums.push(i)
	}
	
	return <>
		<div style={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
			<label style={ { display: "block" } }>R: { colorR }</label>
			<input type="range" value={ colorR } max="255" onChange={ e => setColorR(e.target.value) } />		
		</div>
		
		<div style={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
			<label style={ { display: "block" } }>G: { colorG }</label>
			<input type="range" value={ colorG } max="255" onChange={ e => setColorG(e.target.value) } />		
		</div>
				

		
		{nums.map(i => <>
			<div style={ { ...divStyle, width: `${i}rem`, background: `rgb(${colorR}, ${colorG}, ${i+50})`, zIndex: 0-i } }/>
		</>)}
	</>
}

export default App