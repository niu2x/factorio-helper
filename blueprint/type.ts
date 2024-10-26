enum Item {
	EXPRESS_TRANSPORT_BELT,
}

let names: Map<Item, string> = new Map<Item, string>([
	[Item.EXPRESS_TRANSPORT_BELT , "express-transport-belt"],
]);

function getItemName(item: Item) {
	return names.get(item)
}

enum Direction {
	LEFT,
	RIGHT,
	UP,
	DOWN,
}

function getDirectionValue(d: Direction): number {
	if(d == Direction.LEFT) {
		return 12;
	}
	else if(d == Direction.RIGHT) {
		return 4;
	}
	else if(d == Direction.UP) {
		return 0;
	}
	else {
		return 8;
	}
}

export {
	Direction,
	Item,
	getItemName,
	getDirectionValue,
}