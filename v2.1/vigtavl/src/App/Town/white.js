import React from 'react'

import Town from '.';

const defaultStyle = {}

const WhiteTown = ({ fill, radius, stroke, strokeWidth, style, x, y }) => (
	<Town
		fill={fill || 'white'}
	  stroke={stroke || "black"}
	  strokeWidth={strokeWidth || 0.1}
	  style={style || defaultStyle}
	  x={typeof x === 'number' ? x : 1.1}
	  y={typeof y === 'number' ? y : 1.1}
	/>
);

export default WhiteTown;
