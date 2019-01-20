import React from 'react'

import DefaultSquare from '../Square/default';
import DefaultSvg from '../Svg/default';

const Knight = ({ hexProps }) => (
	<DefaultSvg>
	  <DefaultSquare {...hexProps} />
	 </DefaultSvg>
);

export default Knight;