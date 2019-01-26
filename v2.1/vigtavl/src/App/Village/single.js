import React from 'react'

import WhiteVillage from './white';
import DefaultHex from '../Hex/default';
import DefaultSvg from '../Svg/default';

const SingleVillage = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultHex fill="white" />
	  <WhiteVillage {...hexProps} />
	 </DefaultSvg>
);

export default SingleVillage;