import React from 'react'

import DefaultTriangle from '../Triangle/default';

import { colorToFillAndStrokeMap } from '../constants'

const Archer = ({ color, x, y }) => {
	const fillAndStroke = colorToFillAndStrokeMap[color]
	return <DefaultTriangle {...fillAndStroke} radius={0.6} x={x} y={y} />
};

export default Archer;