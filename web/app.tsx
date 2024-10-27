import React, {useState, ReactNode} from 'react'
import {BlueprintCodec} from "../blueprint/codec"
import About from "./page/about"
import BlueprintDecoder from "./page/blue_page_decoder"


// const menus: Map<string, any> = new Map();
// menus.set("Decoder", BlueprintDecoder);
// menus.set("About", About);

function Menu({ onClick } : {onClick: any} ) {

	const handleClick = (event: any)=>{
		event.preventDefault();
		onClick(event.target.id)
	}

	const menuList = ["Blueprint Decoder", "About"]

	return <div className="sidebar">
				<ul>
					{menuList.map((elem) => {
						return <li><a onClick={handleClick} id={elem} >{elem}</a></li>
					})}
				</ul>
			</div>
}

function Content({pageName}: {pageName: string}) {
	if(pageName == 'Blueprint Decoder')
		return <BlueprintDecoder/>;
	else
		return <About/>
}

export default function App() {

	const [pageName, setPageName] = useState("About");
	const handleMenu = (name: string)=>{
		setPageName(name);
	}
	return (
		<>
			<Menu onClick={handleMenu}/>
			<main>
				<Content pageName={pageName} />
			</main>
		</>
	)
}

