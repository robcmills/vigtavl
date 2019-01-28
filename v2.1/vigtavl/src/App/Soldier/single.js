import React from 'react'

import DefaultCircle from '../Circle/default';
import DefaultSvg from '../Svg/default';

const Soldier = props => (
	<DefaultSvg>
		<DefaultCircle {...props} />
	</DefaultSvg>
)

export default Soldier;