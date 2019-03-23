import React from 'react'

import ArcherArtilleryDiagram from '../Archer/artillery-diagram'
import ArcherAttackDiagram from '../Archer/attack-diagram'
import ArcherMovementDiagram from '../Archer/movement-diagram'
import CastleExample from '../Castle/example'
import EmptyBoardDiagram from '../Board/empty'
import ExampleResourcePlacementDiagram from '../Board/example-resource-placement'
import ExampleNonRandomBoard from '../Board/non-random'
import ExampleUnitPlacement from '../Board/example-unit-placement'
import KnightAttackDiagram from '../Knight/attack-diagram'
import OrientationDiagram from '../Orientation/diagram'
import SimultaneousAttack1 from '../Attack/simultaneous1'
import SimultaneousAttack2 from '../Attack/simultaneous2'
import SingleArcher from '../Archer/single'
import SingleHex from '../SingleHex'
import SingleKnight from '../Knight/single'
import SingleSoldier from '../Soldier/single'
import SoldierStandoff from '../Attack/standoff'
import SpearAttackDefend from '../Spear/attack-defend'
import ValidOrientations from '../Orientation/valid'
import VulnerableSoldier from '../Attack/vulnerable'

export default [{
  title: 'Goal',
  bullets: [
    'Collect resources, grow your army, vanquish your opponents.',
    'The winner is the player with the highest score at the end.',
    'Scores are calculated as the sum of the values of all units remaining on the board plus unspent resources.',
    "The game ends immediately when the last resource is collected or any player's last unit on the board is captured.",
  ],
}, {
  title: 'Game Components',
  bullets: [
    '48 land hexes',
    '9 sea hexes',
    '9 forest hexes',
    '9 mountain hexes',
    '3 village pieces of each color',
    '2 town pieces of each color',
    '1 castle piece of each color',
    '9 soldier units of each color',
    '6 archer units of each color',
    '3 knight units of each color',
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
      'Weapon: Spear and shield',
      'Attack/Defend: Forward adjacent hex',
      <SpearAttackDefend />,
      'Shiled can defend against arrow attacks',
      'Movement: 3 hexes any direction or combination of directions',
    ],
  }, {
    title: 'Archer',
    bullets: [
      <SingleArcher />,
      'Value: 2',
      'Weapon: Bow and arrow',
      'Attack: One direction forward up to 2 hex range (adjacent hex is range zero)',
      <ArcherAttackDiagram />,
      'Archers can attack opponent units behind other opponent units (if that unit is not oriented to protect itself with its shield)',
      'For example, in the following diagram the white a2 archer can attack the black c2 knight but it can not attack the black b2 soldier because it is facing its shield toward the archer',
      <ArcherArtilleryDiagram />,
      'Defend: None. Archers do not carry a shield and are thus vulnerable to attack from any direction',
      'Movement: 2 hexes diagonally (one direction only)',
      <ArcherMovementDiagram />,
      'In the diagram above, the archer located at c3 has valid moves a2, b1, b4, d2, d5, e4, e7, and g5 and can attack d4, e5, and f6',
      'Note that orientation does not affect valid moves but an Archer can only attack in the direction of its current orientation.',
    ],
  }, {
    title: 'Knight',
    bullets: [
      <SingleKnight />,
      'Value: 3',
      'Weapon: Double bladed battle axe and shield',
      'Attack/Defend: Adjacent forward-left, forward, forward-right',
      <KnightAttackDiagram />,
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
      'Eligible sites for placement',
    ],
  }, {
    title: 'Sea (resource)',
    bullets: [
      <SingleHex hexProps={{ fill: 'DeepSkyBlue' }} />,
      'Provides access to fishing and trade',
      'Value: 1',
    ],
  }, {
    title: 'Forrest (resource)',
    bullets: [
      <SingleHex hexProps={{ fill: 'ForestGreen' }} />,
      'Provides access to hunting and lumber',
      'Value: 2',
    ],
  }, {
    title: 'Mountain (resource)',
    bullets: [
      <SingleHex hexProps={{ fill: 'Sienna' }} />,
      'Provides access to mining valuable minerals and ore',
      'Value: 3',
    ],
  }],
}, {
  title: 'Setup',
  bullets: [{
    title: 'Step 1: Build the board',
    bullets: [
      'Construct a hexagon shaped board with a side dimension of 4 hexes like so:',
      <EmptyBoardDiagram />,
    ],
  }, {
    title: 'Step 2: Place Resources',
    text: 'There are two methods of resource placement:',
    bullets: [
      'Random',
      'Non-random',
    ],
  }, {
    title: 'Random Resource Placement',
    bullets: [
      'Use dice rolls to randomly determine coordinates to place resources.',
      'Roll 2 dice, a white D6 and a black D6.',
      'The first roll of both dice determines the target file. If the black die is even then count left to right, if the black die is odd then count right to left the value of the white die.',
      'The second roll of both dice determines the target rank. If the black die is even then count top to bottom, if the black die is odd then count bottom to top the value of the white die.',
      'Place resource hexes one at a time at the coordinates determined by consecutive dice rolls in the following order:',
      '3 mountains, 3 forrest and 3 sea hexes.',
      'If a die coordinate is not within the board then just re-roll it.',
      'If a die coordinate is a hex that already has a resource, simply stack the new resource on top of the existing one.',
      'Example result:',
      <ExampleResourcePlacementDiagram />,
    ],
  }, {
    title: 'Non-random Resource Placement',
    bullets: [
      'Use your imagination and place resources however you like. The recommended distribution is:',
      '3 mountains, 3 forrest and 3 sea hexes',
      'Example:',
      <ExampleNonRandomBoard />,
    ],
  }, {
    title: 'Step 3: Place Units',
    bullets: [
      'In turn order each player places one building and one corresponding unit together on the same hex per turn. Units correspond to buildings of equal value, ' +
      'i.e. a soldier & village are placed together, archer and town, knight and castle.',
      'Players must choose hexes that satisfy the following requirements:',
      '- must not be a resource hex',
      '- must not be occupied by opponent',
      '- unit orientation must not threaten or be threatened by any opponent unit',
      'For a 2 player game, players place the following:',
      '3 soldiers & 3 villages',
      '2 archers & 2 towns',
      '1 knight & 1 castle',
      'For a 3 player game, players place the following:',
      '1 soldier & 1 village',
      '1 archer & 1 town',
      '1 knight & 1 castle',
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
    'Collect',
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
    'The attacking unit may move to occupy the hex of the captured unit if desired, and only if that hex is adjacent to the attacker.',
    'The attacking unit may choose a new orientation after moving onto the attacked hex.',
    'Attacks are denoted with an "x" followed by the coordinate of the attacked unit.',
    {
      title: 'Shields',
      bullets: [
        'Soldiers and knights are equipped with shields that can block attacks from the same hexes they are able to attack.',
        'Players may not attack opponent units equipped with shields from these directions. They must maneuver to attack from the side or behind or attack with multiple units simultaneously.',
        'For example, in the following diagram two soldiers are facing each other. The soldier attacks and defends the adjacent hex to its orientation. Thus these two soldiers can not attack each other and are effectively in a standoff, much like pawns in Chess.',
        <SoldierStandoff />,
        "However, if the attacked unit is not oriented to defend itself then it is vulnerable to attack. In the following diagram, the black soldier is now oriented away from the attacking white soldier. If it is white's turn to play, the black soldier may be captured.",
        <VulnerableSoldier />,
      ],
    }, {
      title: 'Double Attack',
      bullets: [
        'If multiple units are oriented to attack the same hex then the defending unit can use its shield to block only one attack, resulting in the defending unit being captured.',
        'For example, in the following diagram the black knight is able to defend against the attacking white soldier. Remember that the knight attacks and defends the forward hex as well as left-forward and right-forward hexes.',
        <SimultaneousAttack1 />,
        'However if white moves another unit in to attack then black will not be able to defend both attacks and will be captured',
        <SimultaneousAttack2 />,
      ],
    }
  ],
}, {
  title: 'Collect',
  text: 'As an action, players may collect a resource hex they currently occupy. The resource hex is removed from the board and kept near the player who collected it.',
}, {
  title: 'Purchase',
  text: 'As an action, players may spend resources to purchase new units and immediately place them according to the following rules:',
  bullets: [
    'New units can only be placed in buildings of your own color',
    'New units can only be placed in unoccupied buildings',
    'Knights can only be placed in castles',
    'Archers can be placed in castles or towns',
    'Soldiers can be placed in any building type',
    'There is no limit to how many resources can be spent, provided those units can be placed in eligible buildings.',
    'Purchases are denoted by the "+" character, followed by the coordinate of the building in which the unit is placed, followed by the coordinates of the adjacent hex that unit is oriented towards.',
  ],
// }, {
//   title: 'Play',
//   bullets: [<a href='#play'>Play</a>],
}];

