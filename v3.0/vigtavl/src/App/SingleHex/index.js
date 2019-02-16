import React from 'react'

import DefaultHex from '../Hex/default';
import DefaultSvg from '../Svg/default';

const SingleHex = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultHex {...hexProps} />
	 </DefaultSvg>
);

export default SingleHex;