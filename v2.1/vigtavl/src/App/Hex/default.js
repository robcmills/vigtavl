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
	  x={x || 1.1}
	  y={y || 1.1}
	/>
);

export default DefaultHex;
