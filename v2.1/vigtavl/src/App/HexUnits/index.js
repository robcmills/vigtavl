import React from 'react'

import Soldier from '../Soldier'

const HexUnits = ({ units, x, y }) => {
	if (units.length === 1) {
		const unit = units[0];
		if (unit.type === 'soldier') {
			return <Soldier color={unit.color} radius={0.5} x={x} y={y} />
		}
	}
};

export default HexUnits;
