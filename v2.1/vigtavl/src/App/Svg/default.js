import React from 'react'

import Svg from '.';

const defaultStyle = {
	height: '2rem',
}

const DefaultSvg = ({ children }) => (
	<Svg
	  style={defaultStyle}
	  viewBox="0,0,2.2,2.2"
	>
	  {children}
	</Svg>
);

export default DefaultSvg;
