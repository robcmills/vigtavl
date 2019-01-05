import React from 'react'

import Hex from '.';

const defaultStyle = {}

const DefaultHex = ({ fill, radius, stroke, strokeWidth, style, x, y }) => (
	<Hex
		fill={fill || 'wheat'}
	  radius={radius || 1}
	  stroke={stroke || "black"}
	  strokeWidth={strokeWidth || 0.1}
	  style={style || defaultStyle}
	  x={x || 0}
	  y={y || 0}
	/>
);

export default DefaultHex;
