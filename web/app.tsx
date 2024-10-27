import React, {useState} from 'react'
import {BlueprintCodec} from "../blueprint/codec"
import BlueprintDecoder from "./page/blue_page_decoder"

function Menu() {
	return <div className="sidebar">
			sidebar
			</div>
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

