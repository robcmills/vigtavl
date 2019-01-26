import React from 'react'

import DefaultBoard from './Board/default'
import PlacementBoard from './Board/placement'
import FourPlayerBoard from './Board/four-player'
import SingleHex from './SingleHex'
import Soldier from './Soldier'
import Archer from './Archer'
import Knight from './Knight'
import SingleWhiteVillage from './Village/single'
import SingleWhiteTown from './Town/single'
import SingleWhiteCastle from './Castle/single'

export default [{
  title: 'Introduction',
  text: 'Players take control of an army to battle against their opponents while maneuvering to control limited resources that can be used to grow their armies.',
}, {
  title: 'Game Components',
  bullets: [
    '48 wooden land hexes',
    '6 wooden sea hexes',
    '5 wooden forest hexes',
    '4 wooden mountain hexes',
    '9 wooden village pieces of each color',
    '6 wooden town pieces of each color',
    '3 wooden castle pieces of each color',
    '9 wooden soldier pieces of each color',
    '6 wooden archer pieces of each color',
    '3 wooden knight pieces of each color',
    '4 player boards',
    '12 small 1-gold tokens',
    '12 medium 2-gold tokens',
    '12 large 3-gold tokens',
    '6 black dice',
    '6 white dice',
  ],
}, {
  title: 'Object of the Game',
  text: 'Be the player with the most victory points at the end of the game. Obtain victory points in the following ways:',
  bullets: [
    'Kill/capture opponent units',
    'Seize opponent buildings',
    'Free your imprisoned units',
  ],
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
        'Produces 1 Gold per occupied or built adjacent hex per Income Phase',
      ],
    }, {
      title: 'Forrest (resource)',
      bullets: [
        <SingleHex hexProps={{ fill: 'ForestGreen' }} />,
        'Provides access to hunting and lumber',
        'Produces Gold if occupied per Income Phase',
      ],
    }, {
      title: 'Mountain (resource)',
      bullets: [
        <SingleHex hexProps={{ fill: 'Sienna' }} />,
        'Provides access to mining valuable minerals and ore',
        'Produces 3 Gold if occupied per Income Phase',
      ],
    }],
  }, {
    title: 'Step 2: Placement',
    text: 'In turn order each player chooses an empty land hex and places one building and one unit together per turn in the following order:',
    bullets: [
      '3 Villages & 3 Soldiers',
      '2 Towns & 2 Archers',
      '1 Castle & 1 Knight',
      '(units and buildings are placed together on the same chosen hex)',
      {
        title: 'Example',
        bullets: [
          'Player 1 places first Village & Soldier',
          'Player 2 places first Village & Soldier',
          'Player 1 places second Village & Soldier',
          'Player 2 places second Village & Soldier',
          'Player 1 places third Village & Soldier',
          'Player 2 places third Village & Soldier',
          'Player 1 places first Town & Archer',
          'Player 2 places first Town & Archer',
          'Player 1 places second Town & Archer',
          'Player 2 places second Town & Archer',
          'Player 1 places Castle & Knight',
          'Player 2 places Castle & Knight',
        ]
      },
      <PlacementBoard />,
    ],
  }],
}, {
  title: 'Rounds',
  text: 'The game is played in a series of rounds. The number of rounds played depends on the number of players.',
  bullets: [
    '2 players: 6 rounds',
    '3 players: 5 rounds',
    '4 players: 4 rounds',
    'Each round consists of 4 phases:',
  {
    title: 'Income Phase',
    text: 'All players simultaneously collect gold for occupied resource hexes.',
    bullets: [
      'For each building or occupied hex adjacent to 1 or more sea hexes collect 1 gold',
      'For each occupied forest hex collect 2 gold',
      'For each occupied mountain hex collect 3 gold',
    ]
  }, {
    title: 'Build Phase',
    text: 'In turn order, each player may recruit or build or pass one at a time until all players have had 3 opportunities',
    bullets: [{
      title: 'Recruit',
      bullets: [
        'Add a new combat unit to the board by paying the value in gold and placing according to type:',
        'Soldiers can only be recruited in Villages (max of 3 per phase)',
        'Archers can only be recruited in Towns (max of 2 per phase)',
        'Knights can only be recruited in Castles (max of 1 per phase)',
      ],
    }, {
      title: 'Build',
      bullets: [
        'Players may build new structures on any land hex they occupy or empty adjacent hex to their existing buildings',
        'Existing buildings can be upgraded',
        'To build or upgrade simply pay value of building in gold',
        'Villages cost 1 gold (max of 3 per phase)',
        'Towns cost 2 gold (max of 2 per phase)',
        'Castles cost 3 gold (max of 1 per phase)',
      ],
    }],
  }, {
    title: 'Movement Phase',
    bullets: [
      'In turn order, each player may move one unit or pass',
      'Continue until each player has had 3 opportunities',
      'Soliers may be moved a max of 3 times per phase (can be same unit/battalion)',
      'Archers may be moved a max of 2 times per phase (can be same archer)',
      'Knights may be moved a max of 1 time per phase',
      'Note that multiple soliers on the same hex can be moved together as a battalion',
    ],
  }, {
    title: 'Battle Phase',
    text: 'The battle phase is conducted in three stages:',
    bullets: [{
      title: 'Ranged Attacks',
      bullets: [
        'In turn order, each player may conduct one ranged attack',
        'Continue until each player has had 2 opportunities to attack',
        'To conduct a ranged attack, choose one of your Archers that has opponent units within range, then choose a target unit to aim at. Roll 1 D6.',
        'Archers range extends in straight lines outward from the hex up to 3 hexes away. However when targeting hexes farther away, accuracy diminishes, resulting in a smaller chance of hitting the target.',
        'If target is on an adjacent hex (range of 1) then a roll result of 3, 2, or 1 results in a successful hit and kills the target unit (50% chance)',
        'If target is on a hex at range of 2 then a roll result of 2 or 1 results in a successful hit and kills the target unit (33% chance)',
        'If target is on a hex at range of 3 then a roll result of 1 results in a successful hit and kills the target unit (17% chance)',
        'A successful hit results in 2 hit points of damage to the target unit. This is enough to kill another archer or solier, but not enough to kill a knight with a single hit because knights have 3 health points. In order to kill a knight with ranged attacks, players must successfully score two hits in the same phase on the same target knight. Hits do not carry over to subsequent rounds.',
        'Killed units are removed from the board and the attacker collects a number of victory points equal to the value of the killed unit',
        'Archers may not range attack units on the same hex. If opponent units are on the same hex as an archer then that would be a melee battle to be resolved as explained in the next section.',
      ],
    }, {
      title: 'Battles',
      bullets: [
        'Any hex occupied by more than one player becomes a melee battle.',
        'Each player involved rolls a number of dice equal to the sum of their units "Melee Attack" values that are involved. Involved units are the units located on the battle hex. The single highest die rolled is the only die compared. The highest die wins the battle. Ties are re-rolled.',
        'If more than 2 players are involved in a battle, and a 2-way tie is rolled between other players, then the other player either wins the battle if his die is higher than the tie, or is defeated if his die is lower, and becomes prisoner of the winner of the tied re-roll.',
        'Units that lose the battle are captured. Captured units are moved to the closest building that belongs to the winner of the battle, where they become prisoners (denoted by laying the units on their side).',
        'If multiple buildings are equidistant then the capturer may choose.',
        'Max Prisoner occupancy for each unit type is the same as their max occupancy per hex. See Units section for values.',
      ],
    }, {
      title: 'Seizing',
      bullets: [
        'After all battles have been resolved, if any player occupies a hex with an opponent building that is undefended, that player may seize the building and swap out the piece with the same building type of their own color and receive victory points equal to its value.',
        'If seizing a building with prisoners, all prisoners belonging to the seizer are freed. Any prisoners belonging to other players become the prisoners of the buildings new owner.',
        'If prisoners are freed, receive victory points equal to the value of all freed prisoner units.',
      ],
    }],
  }],
}, {
  title: 'Units',
  bullets: [{
    title: 'Soldier',
    bullets: [
      <Soldier />,
      'Cost/Victory points when captured/freed: 1',
      'Melee Attack: 1',
      'Movement: Any direction',
      'Movement Range: 1 Hex',
      'Max Recruits/Movements per phase: 3',
      'Maximum Occupancy per Hex: 3',
      'Can only be recruited in a Village',
      'Battalion: Up to 3 Soldiers located on the same hex may be moved together as a single unit',
    ],
  }, {
    title: 'Archer',
    bullets: [
      <Archer />,
      'Cost/Victory points when captured/freed: 2',
      'Melee Attack: 1',
      'Movement: Diagonally',
      'Movement Range: 1 Hex',
      'Max Movements per phase: 2',
      'Maximum Occupancy per Hex: 2',
      'Can only be recruited in a Town',
      'Capable of ranged attacks',
    ],
  }, {
    title: 'Knight',
    bullets: [
      <Knight />,
      'Cost/Victory points when captured/freed: 3',
      'Melee Attack: 3',
      'Movement: Any direction, straight line only',
      'Movement Range: 3 Hexes',
      'Max Movements per phase: 1',
      'Maximum Occupancy per Hex: 1',
      'Can only be recruited in a Castle',
    ],
  }],
}, {
  title: 'Buildings',
  bullets: [{
    title: 'Village',
    bullets: [
      <SingleWhiteVillage />,
      'Cost/Victory points: 1',
      'Produces: Soldiers',
    ],
  }, {
    title: 'Town',
    bullets: [
      <SingleWhiteTown />,
      'Cost/Victory points: 2',
      'Produces: Archers or Soldiers',
    ],
  }, {
    title: 'Castle',
    bullets: [
      <SingleWhiteCastle />,
      'Cost/Victory points: 3',
      'Produces: Knights, Archers or Soldiers',
    ],
  }],
}];

