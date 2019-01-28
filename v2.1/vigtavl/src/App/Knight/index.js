import React from 'react'

import DefaultSquare from '../Square/default'

import { colorToFillAndStrokeMap } from '../constants'

const Knight = ({ color, x, y }) => {
	const fillAndStroke = colorToFillAndStrokeMap[color]
	return <DefaultSquare {...fillAndStroke} radius={0.45} x={x} y={y} />
}

export default Knight