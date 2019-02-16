import React from 'react'

import DefaultCircle from '../Circle/default';
import DefaultSvg from '../Svg/default';

const SingleSoldier = props => (
	<DefaultSvg>
		<DefaultCircle {...props} />
	</DefaultSvg>
)

export default SingleSoldier;