import React from 'react'

import WhiteCastle from './white';
import DefaultHex from '../Hex/default';
import DefaultSvg from '../Svg/default';

const SingleCastle = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultHex fill="white" />
	  <WhiteCastle {...hexProps} />
	 </DefaultSvg>
);

export default SingleCastle;