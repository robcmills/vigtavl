import React from 'react'

import DefaultTriangle from '../Triangle/default';
import DefaultSvg from '../Svg/default';

const Archer = props => (
  <DefaultSvg>
    <DefaultTriangle {...props} />
  </DefaultSvg>
);

export default Archer;