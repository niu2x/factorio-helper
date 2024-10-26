import {Item, getItemName, Direction} from "./type"

type Position = {
	x: number,
	y: number,
};

type Entity = {
	type: Item;
	pos: Position;
	direction?: Direction;
};

type BlueprintData = {
	entities: object[];
	icons: [];
	item: "blueprint";
	label: string;
	version: 0;
};

type Blueprint = {
	blueprint: BlueprintData;
};

export class BlueprintBuilder {

	label: string = ""
	entities: Entity[] = []

	constructor() {
	}

	build(): Blueprint {
		let bp:BlueprintData = {
			entities: [],
			icons: [],
			item: "blueprint",
			label: this.label,
			version: 0,
		}
		for(let i = 0; i < this.entities.length; i ++) {
			let e = this.entities[i];
			let x: any = {
				entity_number: i+1,
				name: getItemName(e.type),
				position: e.pos,
			}
			if(e.direction) {
				
			}
			bp.entities.push(x)
		}
		return {
			blueprint: bp
		}
	}

	addEntity(entity: Entity) {
		this.entities.push(entity)
	}

	setLabel(label: string) {
		this.label = label;
	}
}