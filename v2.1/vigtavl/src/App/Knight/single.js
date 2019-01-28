import React from 'react'

import DefaultSquare from '../Square/default';
import DefaultSvg from '../Svg/default';

const SingleKnight = props => (
	<DefaultSvg>
	  <DefaultSquare {...props} />
	 </DefaultSvg>
);

export default SingleKnight;