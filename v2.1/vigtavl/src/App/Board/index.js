import React from 'react'

import { typeToFillMap, COS_60, SIN_60 } from '../constants'
import Svg from '../Svg'
import Castle from '../Castle'
import Town from '../Town'
import Village from '../Village'
import DefaultHex from '../Hex/default'

const HEX_RADIUS = 1 // vertical
const HORZ_RADIUS = HEX_RADIUS * SIN_60
const OPP = HEX_RADIUS * COS_60
const HEX_STROKE_WIDTH = 0.1

const Board = ({ hexes, size, style }) => {
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
    <Svg style={style} viewBox={viewBox}>
      {hexes.map((hex, index) => {
        const file = hex.file.charCodeAt(0) - 97
        const rank = hex.rank - 1
        const x = HORZ_RADIUS + file * HORZ_RADIUS * 2 - (rank * HORZ_RADIUS)
        const y = -(HEX_RADIUS + rank * (HEX_RADIUS + OPP))
        if (hex.type === 'castle') {
          return (
            <React.Fragment>
              <DefaultHex fill={hex.color} x={x} y={y} />
              <Castle key={index} x={x} y={y} />
            </React.Fragment>
          )
        }
        if (hex.type === 'town') {
          return (
            <React.Fragment>
              <DefaultHex fill={hex.color} x={x} y={y} />
              <Town key={index} x={x} y={y} />
            </React.Fragment>
          )
        }
        if (hex.type === 'village') {
          return (
            <React.Fragment>
              <DefaultHex fill={hex.color} x={x} y={y} />
              <Village key={index} x={x} y={y} />
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
      })}
    </Svg>
  )
}

export default Board