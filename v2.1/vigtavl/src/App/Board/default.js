import React from 'react'

import Board from '.'

// const hexes = ['a1', 'a2', 'b1', 'b2', 'b3', 'c2', 'c3'];
const hexes = [
	{ file: 'a', rank: 1, type: 'sea' },
	{ file: 'a', rank: 2 },
	{ file: 'a', rank: 3 },
	{ file: 'a', rank: 4 },
	{ file: 'b', rank: 1 },
	{ file: 'b', rank: 2 },
	{ file: 'b', rank: 3 },
	{ file: 'b', rank: 4, type: 'forest' },
	{ file: 'b', rank: 5 },
	{ file: 'c', rank: 1 },
	{ file: 'c', rank: 2 },
	{ file: 'c', rank: 3 },
	{ file: 'c', rank: 4 },
	{ file: 'c', rank: 5 },
	{ file: 'c', rank: 6 },
	{ file: 'd', rank: 1 },
	{ file: 'd', rank: 2, type: 'forest' },
	{ file: 'd', rank: 3 },
	{ file: 'd', rank: 4, type: 'mountain' },
	{ file: 'd', rank: 5 },
	{ file: 'd', rank: 6 },
	{ file: 'd', rank: 7, type: 'sea' },
	{ file: 'e', rank: 2 },
	{ file: 'e', rank: 3 },
	{ file: 'e', rank: 4 },
	{ file: 'e', rank: 5 },
	{ file: 'e', rank: 6 },
	{ file: 'e', rank: 7 },
	{ file: 'f', rank: 3 },
	{ file: 'f', rank: 4 },
	{ file: 'f', rank: 5 },
	{ file: 'f', rank: 6 },
	{ file: 'f', rank: 7 },
	{ file: 'g', rank: 4, type: 'sea' },
	{ file: 'g', rank: 5 },
	{ file: 'g', rank: 6 },
	{ file: 'g', rank: 7 },
]

const DefaultBoard = () => (
	<Board
		hexes={hexes}
		size={4}
		style={{ height: '10rem' }}
	/>
);

export default DefaultBoard;