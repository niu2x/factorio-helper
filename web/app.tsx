import React, {useState} from 'react'
import {BlueprintCodec} from "../blueprint/codec"

function Menu() {
	return <div className="sidebar">
			sidebar
			</div>
}

function BlueprintDecoder() {
	const [inputValue, setInputValue] = useState("");
	const [decodeValue, setDecodeValue] = useState("");

	const handleChange = (event: any) => {
		const value = event.target.value;
		setInputValue(value);
		try{
			let codec = new BlueprintCodec();
			let bp = codec.decode(value)
	    	bp = JSON.stringify(bp, null, 2)
			setDecodeValue(bp);
		}
		catch(e) {
			setDecodeValue(JSON.stringify(e));
		}
	}

	return <>
		<input type="text" value={inputValue} onChange={handleChange}/>
		<p>{decodeValue}</p>
	</>
}

export default function App() {
	return (
		<>
			<Menu/>
			<main>
				<BlueprintDecoder />
			</main>
		</>
	)
}

