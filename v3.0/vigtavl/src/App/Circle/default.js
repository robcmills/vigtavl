import React from 'react'

import Circle from '.';

const defaultStyle = {}

const DefaultCircle = ({ fill, radius, stroke, strokeWidth, style, x, y }) => (
	<Circle
		fill={fill || 'white'}
	  stroke={stroke || "black"}
	  strokeWidth={strokeWidth || 0.1}
	  style={style || defaultStyle}
	  radius={typeof radius === 'number' ? radius : 0.75 }
	  x={typeof x === 'number' ? x : 1.1}
	  y={typeof y === 'number' ? y : 1.1}
	/>
);

export default DefaultCircle;
