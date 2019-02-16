import React from 'react'

import WhiteTown from './white';
import DefaultHex from '../Hex/default';
import DefaultSvg from '../Svg/default';

const SingleTown = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultHex fill="white" />
	  <WhiteTown {...hexProps} />
	 </DefaultSvg>
);

export default SingleTown;