#!/usr/bin/env node

let Logic = require('logic-solver');
let Blueprint = require('factorio-blueprint');

var solver = new Logic.Solver();

solver.require('A00')
solver.require('A33')

for (var x = 0; x < 4; x++) {
	for (var y = 0; y < 4; y++) {
		let name = `A${x}${y}`;

		var neighbors = [];
		if (x > 0) {
			neighbors.push(`A${x-1}${y}`)
		};

		if (x < 4 - 1) {
			neighbors.push(`A${x+1}${y}`)
		};

		if (y > 0) {
			neighbors.push(`A${x}${y-1}`)
		};

		if (y < 4 - 1) {
			neighbors.push(`A${x}${y+1}`)
		};

		let n = 2;
		if (name == 'A00' || name == 'A33') {
			n = 1;
		}

		let cond = Logic.implies(name, Logic.equalBits(Logic.sum(neighbors), Logic.constantBits(n)));
		solver.require(cond);
	}
}

// solver.require(Logic.equalBits(Logic.sum(['A', 'B', 'C', 'D']), Logic.constantBits(2)))
// solver.require(Logic.exactlyOne("A", "B", "C"))

// // console.log(solver)

var solutions = [];
var sol;
while ((sol = solver.solve())) {

	let vars = sol.getTrueVars();

	console.log("XXXX")
	for (var y = 0; y < 4; y++) {
		for (var x = 0; x < 4; x++) {
			let name = `A${x}${y}`;
			if(vars.includes(name)) {
				console.log(x, y)
			}
		}
	}

	solver.forbid(sol.getFormula());
}

console.log(solutions)


let myBlueprint = new Blueprint();

myBlueprint.createEntity('transport-belt', {
	x: 0,
	y: 0
}, Blueprint.UP);

console.log(myBlueprint.encode())