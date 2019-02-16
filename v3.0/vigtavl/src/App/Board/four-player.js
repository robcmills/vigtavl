import React from 'react'

import Board from '.'

const hexes = [
	{ file: 'a', rank: 1, type: 'sea' },
	{ file: 'a', rank: 2 },
	{ file: 'a', rank: 3 },
	{ file: 'a', rank: 4 },
	{ file: 'a', rank: 5 },
	{ file: 'b', rank: 1 },
	{ file: 'b', rank: 2 },
	{ file: 'b', rank: 3 },
	{ file: 'b', rank: 4, type: 'forest' },
	{ file: 'b', rank: 5 },
	{ file: 'b', rank: 6 },
	{ file: 'c', rank: 1 },
	{ file: 'c', rank: 2 },
	{ file: 'c', rank: 3 },
	{ file: 'c', rank: 4 },
	{ file: 'c', rank: 5 },
	{ file: 'c', rank: 6 },
	{ file: 'c', rank: 7 },
	{ file: 'd', rank: 1 },
	{ file: 'd', rank: 2, type: 'forest' },
	{ file: 'd', rank: 3 },
	{ file: 'd', rank: 4 },
	{ file: 'd', rank: 5 },
	{ file: 'd', rank: 6 },
	{ file: 'd', rank: 7, type: 'sea' },
	{ file: 'd', rank: 8 },
	{ file: 'e', rank: 1 },
	{ file: 'e', rank: 2, type: 'mountain' },
	{ file: 'e', rank: 3 },
	{ file: 'e', rank: 4 },
	{ file: 'e', rank: 5 },
	{ file: 'e', rank: 6, type: 'mountain' },
	{ file: 'e', rank: 7 },
	{ file: 'e', rank: 8 },
	{ file: 'e', rank: 9 },
	{ file: 'f', rank: 2 },
	{ file: 'f', rank: 3 },
	{ file: 'f', rank: 4 },
	{ file: 'f', rank: 5 },
	{ file: 'f', rank: 6 },
	{ file: 'f', rank: 7 },
	{ file: 'f', rank: 8 },
	{ file: 'f', rank: 9 },
	{ file: 'g', rank: 3 },
	{ file: 'g', rank: 4 },
	{ file: 'g', rank: 5 },
	{ file: 'g', rank: 6 },
	{ file: 'g', rank: 7 },
	{ file: 'g', rank: 8 },
	{ file: 'g', rank: 9, type: 'sea' },
	{ file: 'h', rank: 4, type: 'sea' },
	{ file: 'h', rank: 5 },
	{ file: 'h', rank: 6 },
	{ file: 'h', rank: 7 },
	{ file: 'h', rank: 8 },
	{ file: 'h', rank: 9 },
	{ file: 'i', rank: 5 },
	{ file: 'i', rank: 6 },
	{ file: 'i', rank: 7, type: 'forest' },
	{ file: 'i', rank: 8 },
	{ file: 'i', rank: 9 },
]

const FourPlayerBoard = () => (
	<Board
		hexes={hexes}
		size={5}
		style={{ height: '10rem' }}
	/>
);

export default FourPlayerBoard;