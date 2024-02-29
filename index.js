#!/usr/bin/env node

let Logic = require('logic-solver');

var solver = new Logic.Solver();

solver.require(Logic.equalBits(Logic.sum(['A', 'B', 'C', 'D']), Logic.constantBits(2)))
solver.require(Logic.exactlyOne("A", "B", "C"))

// console.log(solver)

var solutions = [];
var sol;
while ((sol = solver.solve())) {
	solutions.push(sol.getTrueVars());
	solver.forbid(sol.getFormula());
}

console.log(solutions)