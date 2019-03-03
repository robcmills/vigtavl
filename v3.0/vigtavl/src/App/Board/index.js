import React, { Component } from 'react'

import { typeToFillMap, COS_60, SIN_60 } from '../constants'
import Svg from '../Svg'
import Castle from '../Castle'
import Town from '../Town'
import Village from '../Village'
import DefaultHex from '../Hex/default'
import HexUnits from '../HexUnits'

const HEX_RADIUS = 1 // vertical
const HORZ_RADIUS = HEX_RADIUS * SIN_60
const OPP = HEX_RADIUS * COS_60
const HEX_STROKE_WIDTH = 0.1

class Board extends Component {
  render() {
    const { className, size, style } = this.props
    const originX = -HEX_STROKE_WIDTH - HORZ_RADIUS * (size - 1)
    const height = (
      HEX_STROKE_WIDTH * 2 +
      HEX_RADIUS * 2 +
      (HEX_RADIUS + OPP) * (size - 1) * 2
    )
    const originY = -height
    const width = (
      HEX_STROKE_WIDTH * 2 +
      HORZ_RADIUS * size * 2 +
      HORZ_RADIUS * 2 * (size - 1)
    )
    const viewBox = [originX, originY, width, height].join(',')
    return (
      <Svg className={className} style={style} viewBox={viewBox}>
        {this.renderHexes()}
        {this.renderUnits()}
      </Svg>
    )
  }

  renderHexes = () => {
    const { hexes } = this.props
    return hexes.map((hex, index) => {
      const file = hex.file.charCodeAt(0) - 97
      const rank = hex.rank - 1
      const x = HORZ_RADIUS + file * HORZ_RADIUS * 2 - (rank * HORZ_RADIUS)
      const y = -(HEX_RADIUS + rank * (HEX_RADIUS + OPP) + HEX_STROKE_WIDTH)
      if (hex.type === 'castle') {
        return (
          <React.Fragment key={index}>
            <DefaultHex fill={hex.color} x={x} y={y} />
            <Castle x={x} y={y} />
          </React.Fragment>
        )
      }
      if (hex.type === 'town') {
        return (
          <React.Fragment key={index}>
            <DefaultHex fill={hex.color} x={x} y={y} />
            <Town x={x} y={y} />
          </React.Fragment>
        )
      }
      if (hex.type === 'village') {
        return (
          <React.Fragment key={index}>
            <DefaultHex fill={hex.color} x={x} y={y} />
            <Village x={x} y={y} />
          </React.Fragment>
        )
      }
      return (
        <DefaultHex
          fill={typeToFillMap[hex.type]}
          key={index}
          x={x}
          y={y}
        />
      )
    })
  }

  renderUnits = () => {
    const { hexes } = this.props
    return hexes.map((hex, index) => {
      if (!hex.units) {
        return null;
      }
      const file = hex.file.charCodeAt(0) - 97
      const rank = hex.rank - 1
      const x = HORZ_RADIUS + file * HORZ_RADIUS * 2 - (rank * HORZ_RADIUS)
      const y = -(HEX_RADIUS + rank * (HEX_RADIUS + OPP) + HEX_STROKE_WIDTH)
      return <HexUnits key={'u' + index} units={hex.units} x={x} y={y} />
    })
  }
}

export default Board