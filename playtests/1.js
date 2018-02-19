
var red = {
	actionCards: [
		{ type: 'build' },
		{ type: 'buy' },
		{ type: 'move', number: 2 },
	],
	gold: 6,
}

var orange = {
	actionCards: [
		{ type: 'build', number: 2 },
		{ type: 'buy', number: 2 },
		{ type: 'move', number: 2 },
	],
	gold: 6,
}

var blue = {
	actionCards: [
		{ type: 'build', number: 2 },
		{ type: 'buy' },
		{ type: 'move' },
	],
	gold: 6,
}

var rounds = [{
	moves: {
		red: ['knightMOVEc2', 'villageBUILD', 'BUYmove'],
		orange: ['knightMOVEsoldier', 'villageBUILD', 'BUYrandom'],
		blue: ['knightMOVEsoldier', 'villageBUILD', 'BUYbuild'],
	},
}, {
	moves: {
		red: ['knightMOVEd2', 'knightMOVEf4', 'townBUILD'],
		orange: ['archerMOVEg6', 'BUILD-wallg5f4', 'BUY2random'],
		blue: ['townBUILD', 'BUILDe8', 'pass'],
	},
}]
