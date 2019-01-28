import React from 'react'

import DefaultCircle from '../Circle/default';

import { colorToFillAndStrokeMap } from '../constants'

const Soldier = ({ color, radius, x, y }) => {
	const fillAndStroke = colorToFillAndStrokeMap[color]
	return <DefaultCircle {...fillAndStroke} radius={radius} x={x} y={y} />
}

export default Soldier;