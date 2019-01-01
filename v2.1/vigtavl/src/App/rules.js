export default [{
	title: 'Objective',
	text: 'Get Victory Points:',
	bullets: [
		'Defeat/Capture Units',
		'Build/Seize',
		'Free Prisoners',
	],
}, {
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
				'Players may build new structures on any land hex they occupy or empty adjacent hex to their existing buildings',
				'Existing buildings can be upgraded',
				'To build or upgrade simply pay value of building in gold',
			],
		}],
	}, {
		title: 'Movement Phase',
		bullets: [
			'In turn order, each player may move one unit or pass',
			'Continue until each player has had 3 opportunities to move',
			'If all players pass then phase ends',
			'See also “Max movements per phase” for each unit type',
		],
	}, {
		title: 'Battle Phase',
		bullets: [{
			title: 'Ranged Attacks',
			bullets: [
				'In turn order, each player may conduct one ranged attack',
				'Continue until each player has had 3 opportunities to attack',
				'To conduct a ranged attack, choose one of your Archers that has opponent units within range, then choose a target unit to aim at. Roll 1 D6.',
				'Archers range extends in straight lines outward from the hex up to 3 hexes away. However when targeting hexes farther away, accuracy diminishes, resulting in a smaller chance of hitting the target.',
				'If target is on an adjacent hex (range of 1) then a roll result of 3, 2, or 1 results in a successful hit and kills the target unit (50% chance)',
				'If target is on a hex at range of 2 then a roll result of 2 or 1 results in a successful hit and kills the target unit (33% chance)',
				'If target is on a hex at range of 3 then a roll result of 1 results in a successful hit and kills the target unit (17% chance)',
				'Archers may not range attack units on the same hex. If opponent units are on the same hex as an archer then that would be a melee battle to be resolved as explained in the next section.',
			],
		}, {
			title: 'Battles',
			bullets: [
				'Any hex occupied by more than one player becomes a melee battle.',
				'Each player involved rolls a number of dice equal to the sum of their units "Melee Attack" values that are involved. Involved units are the units located on the battle hex. The single highest die rolled is the only die compared. The highest die wins the battle. Ties are re-rolled.',
				'If more than 2 players are involved in a battle, and a 2-way tie is rolled between other players, then the other player either wins the battle if his die is higher than the tie, or is defeated if his die is lower, and becomes prisoner of the winner of the tied re-roll.',
				'Units that lose the battle are captured. Captured units are moved to the closest building that belongs to the winner of the battle, where they become prisoners (denoted by laying the units on their side).',
				'If multiple buildings are equidistant then the capturer may choose.',
				'Max Prisoner occupancy for each unit type is the same as their max occupancy per hex. See Units section for values.',
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
			'Cost/Victory points when captured/freed: 1',
			'Melee Attack: 1',
			'Movement: Any direction',
			'Movement Range: 1 Hex',
			'Max Movements per phase: 3',
			'Maximum Occupancy per Hex: 3',
			'Can only be recruited in a Village',
			'Battalion: Up to 3 Soldiers located on the same hex may be moved together as a single unit',
		],
	}, {
		title: 'Archer',
		bullets: [
			'Cost/Victory points when captured/freed: 2',
			'Melee Attack: 1',
			'Movement: Diagonally',
			'Movement Range: 1 Hex',
			'Max Movements per phase: 2',
			'Maximum Occupancy per Hex: 2',
			'Can only be recruited in a Town',
			'Capable of ranged attacks',
		],
	}, {
		title: 'Knight',
		bullets: [
			'Cost/Victory points when captured/freed: 3',
			'Melee Attack: 3',
			'Movement: Any direction, straight line only',
			'Movement Range: 3 Hexes',
			'Max Movements per phase: 1',
			'Maximum Occupancy per Hex: 1',
			'Can only be recruited in a Castle',
		],
	}],
}, {
	title: 'Buildings',
	bullets: [{
		title: 'Village',
		bullets: [
			'Cost/Victory points: 1',
			'Produces: Soldiers',
		],
	}, {
		title: 'Town',
		bullets: [
			'Cost/Victory points: 2',
			'Produces: Archers',
		],
	}, {
		title: 'Castle',
		bullets: [
			'Cost/Victory points: 3',
			'Produces: Knights',
		],
	}],
}];

