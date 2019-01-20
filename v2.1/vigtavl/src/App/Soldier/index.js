import React from 'react'

import DefaultCircle from '../Circle/default';
import DefaultSvg from '../Svg/default';

const Soldier = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultCircle {...hexProps} />
	 </DefaultSvg>
);

export default Soldier;