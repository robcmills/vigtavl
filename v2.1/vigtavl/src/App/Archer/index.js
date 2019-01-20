import React from 'react'

import DefaultTriangle from '../Triangle/default';
import DefaultSvg from '../Svg/default';

const Archer = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultTriangle {...hexProps} />
	 </DefaultSvg>
);

export default Archer;