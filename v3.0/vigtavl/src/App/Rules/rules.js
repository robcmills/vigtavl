import React from 'react'

import ArcherArtilleryDiagram from '../Archer/artillery-diagram'
import ArcherAttackDiagram from '../Archer/attack-diagram'
import ArcherMovementDiagram from '../Archer/movement-diagram'
import CastleExample from '../Castle/example'
import DefaultBoard from '../Board/default'
import FourPlayerBoard from '../Board/four-player'
import KnightAttackDiagram from '../Knight/attack-diagram'
import OrientationDiagram from '../Orientation/diagram'
import SimultaneousAttack1 from '../Attack/simultaneous1'
import SimultaneousAttack2 from '../Attack/simultaneous2'
import SingleArcher from '../Archer/single'
import SingleHex from '../SingleHex'
import SingleKnight from '../Knight/single'
import SingleSoldier from '../Soldier/single'
import SoldierAttackDiagram from '../Soldier/attack-diagram'
import SoldierStandoff from '../Attack/standoff'
import ValidOrientations from '../Orientation/valid'
import VulnerableSoldier from '../Attack/vulnerable'

export default [{
  title: 'Introduction',
  text: 'Players take control of an army to battle against their opponents while maneuvering to control limited resources that can be used to grow their armies.',
}, {
  title: 'Object of the Game',
  text: 'The game ends if any of the following conditions are met:',
  bullets: [
    'One player occupies all resource hexes',
    'One player captures all opponent units',
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
    '12 wooden soldier pieces of each color',
    '12 wooden archer pieces of each color',
    '12 wooden knight pieces of each color',
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
      'Movement: 3 hexes any direction',
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
      'Movement: 2 hexes diagonally',
      <ArcherMovementDiagram />,
      'For example, an archer located at c3 has valid moves: a2, b1, b4, d2, d5, e4, e7, g5',
      'Note that orientation does not affect valid moves but an Archer can only attack in the direction of its current orientation.',
    ],
  }, {
    title: 'Knight',
    bullets: [
      <SingleKnight />,
      'Value: 3',
      'Attack: Adjacent forward-left, forward, forward-right',
      <KnightAttackDiagram />,
      'Defend: Forward-left, forward, forward-right',
      'Movement: 1 hex any direction',
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
    'Only one unit may occupy any given hex at any time',
  ],
}, {
  title: 'Attack',
  text: 'Players may attack an opponent unit with one or more of their own units.',
  bullets: [
    'Attacked units are captured and removed from the board',
    'The attacking unit does not move to occupy the hex of the captured unit',
    'Attacks are denoted with an "x" followed by the coordinate of the attacked unit. There is no need to specify the attacking unit, since multiple units may simultaneously attack the same opponent unit.',
    {
      title: 'Shields',
      bullets: [
        'Soldiers and knights are equipped with shields that can block attacks from the same hexes they are able to attack.',
        'Players may not attack opponent units equipped with shields from these directions. They must maneuver to attack from the side or behind or attack with multiple units simultaneously.',
        'For example, in the following diagram two soldiers are facing each other. The soldier attacks and defends the adjacent hex to its orientation. Thus these two soldiers can not attack each other and are effectively in a standoff, much like pawns in Chess.',
        <SoldierStandoff />,
        "However, if the attacked unit is not oriented to defend itself then it is vulnerable to attack. In the following diagram, the black soldier is now oriented away from the attacking white soldier. If it is white's turn to play, the black soldier may be captured.",
        <VulnerableSoldier />,
        'If multiple units are oriented to attack the same hex then the defending unit can use its shield to block only one attack, resulting in the defending unit being captured.',
        'For example, in the following diagram the black knight is able to defend against the attacking white soldier. Remember that the knight attacks and defends the forward hex as well as left-forward and right-forward hexes.',
        <SimultaneousAttack1 />,
        'However if white moves another unit in to attack then black will not be able to defend both attacks and will be captured',
        <SimultaneousAttack2 />,
      ],
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

