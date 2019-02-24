import React from 'react'

import ArcherArtilleryDiagram from '../Archer/artillery-diagram'
import ArcherAttackDiagram from '../Archer/attack-diagram'
import ArcherMovementDiagram from '../Archer/movement-diagram'
import CastleExample from '../Castle/example'
import DefaultBoard from '../Board/default'
import FourPlayerBoard from '../Board/four-player'
import KnightAttackDiagram from '../Knight/attack-diagram'
import OrientationDiagram from '../Orientation/diagram'
import ValidOrientations from '../Orientation/valid'
import SingleArcher from '../Archer/single'
import SingleHex from '../SingleHex'
import SingleKnight from '../Knight/single'
import SingleSoldier from '../Soldier/single'
import SoldierAttackDiagram from '../Soldier/attack-diagram'

export default [{
  title: 'Introduction',
  text: 'Players take control of an army to battle against their opponents while maneuvering to control limited resources that can be used to grow their armies.',
}, {
  title: 'Object of the Game',
  text: 'The game ends if any of the following conditions are met:',
  bullets: [
    'One player captures all opponent units',
    'One player occupies all resource hexes',
    'One player occupies all opponent buildings',
    'All but one player forfeits',
  ],
}, {
  title: 'Game Components',
  bullets: [
    '48 wooden land hexes',
    '5 wooden sea hexes',
    '4 wooden forest hexes',
    '3 wooden mountain hexes',
    '3 wooden village pieces of each color',
    '2 wooden town pieces of each color',
    '1 wooden castle piece of each color',
    '9 wooden soldier pieces of each color',
    '6 wooden archer pieces of each color',
    '3 wooden knight pieces of each color',
    '12 small 1-silver tokens',
    '12 medium 2-silver tokens',
    '12 large 3-silver tokens',
  ],
}, {
  title: 'Units',
  bullets: [{
    title: 'Orientation',
    text: 'Each unit on the battleboard at all times has an orientation. This is the direction that unit is facing.',
    bullets: [
      'Visually, orientation is denoted by a small orientation triangle next to the unit symbol:',
      <OrientationDiagram />,
      'Textually, orientation is denoted by the ">" character followed by the coordinates of the adjacent hex that unit is facing towards',
      'For example, in the diagram above: Sb2>c2 (soldier at b2 facing c2)',
      'Orientations always face towards the center of adjacent hexes',
      <ValidOrientations />,
    ],
  }, {
    title: 'Soldier',
    bullets: [
      <SingleSoldier />,
      'Value: 1',
      'Attack: Forward adjacent hex',
      <SoldierAttackDiagram />,
      'Defend: Forward (adjacent melee and ranged arrows)',
      'Movement: Any direction up to 3 hexes',
    ],
  }, {
    title: 'Archer',
    bullets: [
      <SingleArcher />,
      'Value: 2',
      'Attack: Forward up to 2 hex range (adjacent hex is range zero)',
      <ArcherAttackDiagram />,
      'Archers can attack opponent units behind other opponent units (if that unit is not oriented to protect itself with its shield)',
      'For example, in the following diagram the white a2 archer can attack the black c2 knight but it can not attack the black b2 soldier because it is facing its shield toward the archer',
      <ArcherArtilleryDiagram />,
      'Defend: None. Archers do not carry a shield and are thus vulnerable to attack from any direction',
      'Movement: Diagonally up to 2 hexes',
      <ArcherMovementDiagram />,
      'For example, an archer located at c3 has valid moves: a2, b1, b4, d2, d5, e4, e7, g5',
      'Note that orientation does not affect valid moves',
    ],
  }, {
    title: 'Knight',
    bullets: [
      <SingleKnight />,
      'Value: 3',
      'Attack: Adjacent forward-left, forward, forward-right',
      <KnightAttackDiagram />,
      'Defend: Forward-left, forward, forward-right',
      'Movement: Forward up to 3 hexes',
    ],
  }],
}, {
  title: 'Buildings',
  text: 'Buildings are visually represented in diagrams by a small symbol of the strongest unit that they produce, without an orientation.',
  bullets: [
    'For example in the following diagram is an archer unit and a castle:',
    <CastleExample />,
    {
      title: 'Village',
      bullets: [
        'Value: 1',
        'Produces soldiers'
      ],
    }, {
      title: 'Town',
      bullets: [
        'Value: 2',
        'Produces archers or soldiers',
      ],
    }, {
      title: 'Castle',
      bullets: [
        'Value: 3',
        'Produces knights, archers or soldiers',
      ],
    }
  ],
}, {
  title: 'Hex Types',
  bullets: [{
    title: 'Land',
    bullets: [
      <SingleHex />,
      'Default hex type',
      'Eligible sites for building',
    ],
  }, {
    title: 'Sea (resource)',
    bullets: [
      <SingleHex hexProps={{ fill: 'DeepSkyBlue' }} />,
      'Provides access to fishing and trade',
      'Produces 1 silver per resource action',
    ],
  }, {
    title: 'Forrest (resource)',
    bullets: [
      <SingleHex hexProps={{ fill: 'ForestGreen' }} />,
      'Provides access to hunting and lumber',
      'Produces 2 silver per resource action',
    ],
  }, {
    title: 'Mountain (resource)',
    bullets: [
      <SingleHex hexProps={{ fill: 'Sienna' }} />,
      'Provides access to mining valuable minerals and ore',
      'Produces 3 silver per resource action',
    ],
  }],
}, {
  title: 'Setup',
  bullets: [{
    title: 'Step 1: Build the board',
    bullets: [
      'For a 2 player game, a hexagon shaped board with a side dimension of 4 hexes. Randomly place 3 sea hexes, 2 forest hexes and 1 mountain hex.',
      'Example:',
      <DefaultBoard />,
      'For a 3 or 4 player game, a hexagon shaped board with a side dimension of 5 hexes. Randomly place 4 sea hexes, 3 forest hexes and 2 mountain hexes.',
      'Example:',
      <FourPlayerBoard />,
    ],
  }, {
    title: 'Step 2: Placement',
    bullets: [
      'In turn order each player places one building and one corresponding unit together per turn. Units correspond to buildings of equal value, ' +
      'e.g. a Soldier & Village are placed together.',
      'Players must choose hexes that satisfy the following requirements:',
      '- must not be a resource hex',
      '- must not be occupied by opponent',
      '- unit orientation must not threaten or be threatened by any opponent unit',
      'Players place the following:',
      '3 Villages & 3 Soldiers',
      '2 Towns & 2 Archers',
      '1 Castle & 1 Knight',
    ],
  }],
}, {
  title: 'Gameplay',
  text: 'Each player performs one action in turn and play continues until an end condition is met.',
}, {
  title: 'Actions',
  bullets: [
    'Move',
    'Attack',
    'Earn',
    'Purchase',
  ],
}, {
  title: 'Movement',
  bullets: [
    'Players may move one of their units to a different hex and/or orientation, according to the units individual movement abilities',
    'Units may not move to an occupied hex',
    'Units may not move through opponent occupied hexes',
    'Units may move through self occupied hexes',
    'Units may occupy an opponent building if unoccupied (this also blocks opponent production at that building)',
  ],
}, {
  title: 'Attack',
  text: 'Players may attack an opponent unit with one of their own units.',
  bullets: [
    'Units inflict an amount of damage equal to their value. e.g. the soldier inflicts 1 point of damage and the knight inflicts 3',
    'Units have a number of health points equal to their value',
    'If a units health points are depleted to zero then that unit falls in battle and is removed from the board',
    'Until a units health points are depleted to zero it may still move and attack normally',
    'If a unit takes damage but is not at zero health points, mark the amount of health it has by placing a silver token next to it matching its current health value',
    {
      title: 'Shields',
      text: 'Soldiers and knights are equipped with shields that can block attacks from certain directions. Players may not attack opponent units equipped with shields from these directions. They must maneuver to attack from the side or behind.',
    }
  ],
}, {
  title: 'Earn',
  text: 'As an action, players may collect silver for all resource hexes they currently occupy. The amount of silver produced per hex is determined by the type:',
  bullets: [
    'Sea hexes produce 1 silver',
    'Forrest hexes produce 2 silver',
    'Mountain hexes produce 3 silver',
  ],
}, {
  title: 'Purchase',
  text: 'As an action, players may spend silver to purchase new units and immediately place them according to the following:',
  bullets: [
    'New units can only be placed in buildings of your own color',
    'New units can only be placed in unoccupied buildings',
    'Knights can only be placed in castles',
    'Archers can be placed in castles or towns',
    'Soldiers can be placed in any building type',
    'There is no limit to how much silver can be spent, provided those units can be placed in eligible buildings',
  ],
}, {
  title: 'Play',
  bullets: [<a href='#play'>Play</a>],
}];

