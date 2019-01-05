import React from 'react'

const Svg = ({ children, style, viewBox }) => (
	<svg
		style={style}
		viewBox={viewBox}
	>
	  {children}
	 </svg>
);

export default Svg;