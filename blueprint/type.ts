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
		return 0;
	}
	else if(d == Direction.RIGHT) {
		return 0;
	}
	else if(d == Direction.UP) {
		return 0;
	}
	else {
		return 0;
	}
}

export {
	Direction,
	Item,
	getItemName,
	getDirectionValue,
}