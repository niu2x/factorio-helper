import {Item, getItemName, Direction, getDirectionValue} from "./type"

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
	version: number;
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
			version: 562949954142211,
		}
		for(let i = 0; i < this.entities.length; i ++) {
			let e = this.entities[i];
			let x: any = {
				entity_number: i+1,
				name: getItemName(e.type),
				position: e.pos,
			}
			if(e.direction != null) {
				x.direction = getDirectionValue(e.direction)
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