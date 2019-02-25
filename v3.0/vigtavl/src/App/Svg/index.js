import React from 'react'

const Svg = ({ children, className, style, viewBox }) => (
	<svg
	  className={className}
		style={style}
		viewBox={viewBox}
	>
	  {children}
	 </svg>
);

export default Svg;