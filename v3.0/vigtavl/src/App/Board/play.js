import React from 'react'

import Board from '.'

const blackArcher = { type: 'archer', color: 'black' }
const blackKnight = { type: 'knight', color: 'black' }
const blackSoldier = { type: 'soldier', color: 'black' }
const whiteArcher = { type: 'archer', color: 'white' }
const whiteKnight = { type: 'knight', color: 'white' }
const whiteSoldier = { type: 'soldier', color: 'white' }

const hexes = [
	{ file: 'a', rank: 1, type: 'sea' },
	{ file: 'a', rank: 2 },
	{ file: 'a', rank: 3, type: 'village', color: 'black', units: [blackSoldier] },
	{ file: 'a', rank: 4, type: 'village', color: 'white', units: [whiteSoldier] },
	{ file: 'b', rank: 1 },
	{ file: 'b', rank: 2, type: 'castle', color: 'white', units: [whiteKnight] },
	{ file: 'b', rank: 3 },
	{ file: 'b', rank: 4, type: 'forest' },
	{ file: 'b', rank: 5 },
	{ file: 'c', rank: 1, type:'village', color: 'black', units: [blackSoldier] },
	{ file: 'c', rank: 2 },
	{ file: 'c', rank: 3 },
	{ file: 'c', rank: 4, type: 'village', color: 'black', units: [blackSoldier] },
	{ file: 'c', rank: 5 },
	{ file: 'c', rank: 6 },
	{ file: 'd', rank: 1 },
	{ file: 'd', rank: 2, type: 'forest' },
	{ file: 'd', rank: 3, type: 'village', color: 'white', units: [whiteSoldier] },
	{ file: 'd', rank: 4, type: 'mountain' },
	{ file: 'd', rank: 5, type: 'town', color: 'black', units: [blackArcher] },
	{ file: 'd', rank: 6, type: 'castle', color: 'black', units: [blackKnight] },
	{ file: 'd', rank: 7 },
	{ file: 'e', rank: 2, type: 'town', color: 'white', units: [whiteArcher] },
	{ file: 'e', rank: 3 },
	{ file: 'e', rank: 4 },
	{ file: 'e', rank: 5, type: 'town', color: 'black', units: [blackArcher] },
	{ file: 'e', rank: 6, type: 'sea' },
	{ file: 'e', rank: 7 },
	{ file: 'f', rank: 3 },
	{ file: 'f', rank: 4, type: 'town', color: 'white', units: [whiteArcher] },
	{ file: 'f', rank: 5 },
	{ file: 'f', rank: 6 },
	{ file: 'f', rank: 7 },
	{ file: 'g', rank: 4, type: 'sea' },
	{ file: 'g', rank: 5 },
	{ file: 'g', rank: 6, type: 'village', color: 'white', units: [whiteSoldier] },
	{ file: 'g', rank: 7 },
]

const PlayBoard = ({ className }) => (
	<Board
	  className={className}
		hexes={hexes}
		size={4}
	/>
);

export default PlayBoard;