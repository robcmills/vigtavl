export default [{
	title: 'Objective',
	text: 'Get Victory Points:',
	bullets: [
		'Defeat/Capture Units',
		'Seize Buildings',
		'Free Prisoners',
	],
},{
	title: 'Hex Types',
	bullets: [{
		title: 'Land',
		bullets: [
			'Default hex type',
			'Eligible sites for building',
		],
	}, {
		title: 'Sea (resource)',
		bullets: [
			'Provide access to fishing and trade',
			'Produce 1 Gold per occupied adjacent hex per Income Phase',
		],
	}, {
		title: 'Forrest (resource)',
		bullets: [
			'Provide access to hunting and lumber',
			'Produce 2 Gold if occupied per Income Phase',
		],
	}, {
		title: 'Mountain (resource)',
		bullets: [
			'Provide access to mining valuable minerals and ore',
			'Produce 3 Gold if occupied per Income Phase',
		],
	}],
}, {
	title: 'Placement Phase',
	text: 'In turn order each player chooses an eligible hex and places the following:' +
		'\n(eligible hexes are empty land hexes only)',
	bullets: [
		'1 Castle & 1 Knight',
		'2 Towns & 2 Archers',
		'3 Villages & 3 Soldiers',
	],
}, {
	title: 'Round',
	bullets: [{
		title: 'Income Phase',
		text: 'Collect gold for occupied resource hexes',
	}, {
		title: 'Build Phase',
		text: 'In turn order, each player may recruit or build or pass one at a time until all players have had 3 opportunities',
		bullets: [{
			title: 'Recruit',
			bullets: [
			  'Add a new combat unit to the board by paying the value and placing according to type:',
			  'Soldiers can only be recruited in Villages',
			  'Archers can only be recruited in Towns',
			  'Knights can only be recruited in Castles',
			],
		}, {
			title: 'Build',
			bullets: [
				'Players may build new Villages on any land hex they occupy or empty adjacent hex to their existing buildings',
				'Existing buildings can be upgraded',
				'To build or upgrade simply pay value of building in gold',
			],
		}],
	}, {
		title: 'Movement Phase',
		bullets: [
			'In turn order, each player may move one unit or pass ',
			'Continue until each player has had 3 opportunities to move',
			'If all players pass then phase ends',
			'(see also “Movement Restrictions”)',
		],
	}, {
		title: 'Battle Phase',
		bullets: [{
			title: 'Ranged Attacks',
			bullets: [
				'Archers that have opponent units within range may roll 2 attack dice. If either die is a 1 that is a hit and an opponent unit suffers 2 points of damage per hit. If both die are hits then opponent unit suffers 4 points of damage.',
				'If opponent unit has 2 or less health points then taking 2 damage will kill the unit and it is removed from the board. Attacker receives victory points for the value of the killed unit. If opponent unit has 3 or more health points then that unit can survive a single arrow hit and recover.',
				'If more than one opponent unit are present on a hex within range, the attacker need only specify the hex to be attacked. Any hits may be allocated to any opponent unit as decided by the attacker, however each hit may only be applied to one unit (for example a single arrow can not kill 2 soldiers).',
				'Ranged Attacks are limited to 2 per player per round.',
			],
		}, {
			title: 'Battles',
			bullets: [
				'Any hex occupied by more than one player becomes a battle.',
				'Each player involved rolls a number of dice equal to the total sum value of their units that are involved. Involved units are the units located on the battle hex. The single highest die rolled is the only die compared. The higher die wins the battle. Ties are re-rolled.',
				'If more than 2 players are involved in a battle, and a 2-way tie is rolled between other players, then the other player either wins the battle if his die is higher than the tie, or is defeated if his die is lower, and becomes prisoner of the winner of the tied re-roll.',
				'Units that lose the battle are captured. Captured units are moved to the closest building that belongs to the winner of the battle, where they become prisoners (denoted by laying the units on their side).',
				'If multiple buildings are equidistant then the capturer may choose.',
				'See “Prisoner Limits” for capacity of building types.',
			],
		}, {
			title: 'Seizing',
			bullets: [
			  'After all battles have been resolved, if any player occupies a hex with an opponent building that is undefended, that player may seize the building and swap out the piece with the same building type of their own color and receive victory points equal to its value.',
			  'If seizing a building with prisoners, all prisoners belonging to the seizer are freed. Any prisoners belonging to other players become the prisoners of the buildings new owner.',
			  'If prisoners are freed, receive victory points equal to the value of all freed prisoner units.',
			],
		}],
	}],
}, {
	title: 'Units',
	bullets: [{
		title: 'Soldier',
		bullets: [
			'Health Points: 1',
			'Melee Attack: 1',
			'Ranged Attack: None',
			'Movement: Any direction',
			'Movement Range: 1 Hex',
			'Movements per phase: 3',
			'Maximum Occupancy per Hex: 3',
			'Battalion: Up to 3 Soldiers located on the same hex may be moved together as a single unit',
			'Can only be recruited in a Village',
		],
	}, {
		title: 'Archer',
		bullets: [
			'Health Points: 2',
			'Melee Attack: None',
			'Ranged Attack: 2',
			'Movement: Any direction including diagonal',
			'Movement Range: 1 Hex',
			'Movements per phase: 2',
			'Maximum Occupancy per Hex: 2',
			'Can only be recruited in a Town',
		],
	}, {
		title: 'Knight',
		bullets: [
			'Health Points: 3',
			'Melee Attack: 3',
			'Ranged Attack: None',
			'Movement: Any direction, straight line only',
			'Movement Range: 3 Hex',
			'Movements per phase: 1',
			'Maximum Occupancy per Hexsu: 1',
			'Can only be recruited in a Castle',
		],
	}],
}];

/*


Upgrade existing buildings

*/