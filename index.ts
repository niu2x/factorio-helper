// #!/usr/bin/env node

// let Logic = require('logic-solver');
// let Blueprint = require('factorio-blueprint');


// let area_width = 4;
// let area_height = 4;

// class FactorioSolver {
// 	constructor(width, height) {

// 		this.solver = new Logic.Solver();

// 		this.map_width = width;
// 		this.map_height = height;

// 		this.vars = {

// 		}

// 		for (var x = 0; x < this.map_width; x++) {
// 			for (var y = 0; y < this.map_height; y++) {
// 				let belt = this.getBooleanVarName('belt', x, y)
// 				let used = this.getBooleanVarName('used', x, y)
// 				this.vars[belt] = belt;
// 				this.vars[used] = used;
// 			}
// 		}

// 		for (var x = 0; x < this.map_width; x++) {
// 			for (var y = 0; y < this.map_height; y++) {

// 				let belt = this.getBooleanVarName('belt', x, y)
// 				let used = this.getBooleanVarName('used', x, y)

// 				let is_belt = belt;
// 				let is_used = used;

// 				this.solver.require(Logic.implies(is_belt, is_used))
// 			}
// 		}


// 		for (var x = 0; x < this.map_width; x++) {
// 			for (var y = 0; y < this.map_height; y++) {

// 				let belt = this.getBooleanVarName('belt', x, y)
// 				let used = this.getBooleanVarName('used', x, y)

// 				let is_belt = belt;
// 				let is_used = used;

// 				this.solver.require(Logic.implies(is_belt, is_used))
// 			}
// 		}
		

// 		this.solver.require(this.getBooleanVarName("belt", 1, 1))
// 	}

// 	encode() {

// 		let sol = this.solver.solve();
// 		let true_vars = sol.getTrueVars();

// 		let my_blueprint = new Blueprint();

// 		for (var x = 0; x < this.map_width; x++) {
// 			for (var y = 0; y < this.map_height; y++) {
// 				let belt = this.getBooleanVarName('belt', x, y)

// 				if (true_vars.includes(belt)) {

// 					my_blueprint.createEntity('transport-belt', {
// 						'x': x ,
// 						'y': y ,
// 					})
// 				}

// 			}
// 		}

// 		return my_blueprint.encode()
// 	}

// 	getBooleanVarName(type, x, y) {
// 		return `type,${x},${y}`;
// 	}
// };

// let design = new FactorioSolver(5, 4)
// console.log(design.encode())

// // let myBlueprint = new Blueprint("0eJy1l91ugzAMhd/F1+mUBLoWLvca01RB622RaEAhVKsQ775QumqqphVb4Y6fHH+2TjgKPZRVh40z1kPeg9nXtoX8tYfWfNiiGp/5c4OQg/F4BAG2OI533hW2bWrnVyVWHgYBxh7wC3I1CL5YD28C0HrjDU5t/K0Q0NRtWFTbkRGEq+RpLeA8XYR6B+NwP72X14rnne2OJbrQori1ZZturBam9q6udiV+FidThzX9MM5BpuvHdL0cXT2mJ8vR5WN6Gp2uCb6vl6PP8P15OfoM3zfL0Wf4vo1OVwTfs+XoM3xXcjn8DONV/LRTBOdV/LiTlKiPn3eS4n38wJMU7+MnnqR4Hz3ySNZHjzyS89Ejj2R89Mij+K5nJl4463lTXQ969xttwoXT5E+HDt+NxcMqlNo79Ahj9/eqlKWaWJrFoqoSVoeapUpYHWqWSnE6lKyxFKdByRGxhmJ5xZqJ5RRrA7K+K9b2Y31VyTUZOSiqamJJDupfUUjDy19y/uuPXMAJXXspo7cq3WR6k+osS7KwXaoiJHVY/XJbPQzfwhFAyg==");
// // console.log(myBlueprint)

// // myBlueprint.createEntity('transport-belt', {
// // 	x: 0,
// // 	y: 0
// // }, Blueprint.UP);

// // console.log(myBlueprint.encode())

import {Item, Direction} from "./blueprint/type"
import {BlueprintCodec} from "./blueprint/codec"
import {BlueprintBuilder} from "./blueprint/builder"

let codec = new BlueprintCodec()
let builder = new BlueprintBuilder()
builder.setLabel("MyName")
builder.addEntity({
	type: Item.EXPRESS_TRANSPORT_BELT,
	pos: {
		x: 0,
		y: 0,
	},
	direction: Direction.UP,
})

builder.addEntity({
	type: Item.EXPRESS_TRANSPORT_BELT,
	pos: {
		x: 1,
		y: 0,
	},
	direction: Direction.DOWN,
})
builder.addEntity({
	type: Item.EXPRESS_TRANSPORT_BELT,
	pos: {
		x: 2,
		y: 0,
	},
	direction: Direction.LEFT,
})
builder.addEntity({
	type: Item.EXPRESS_TRANSPORT_BELT,
	pos: {
		x: 3,
		y: 0,
	},
	direction: Direction.RIGHT,
})


console.log(codec.encode(builder.build()))
