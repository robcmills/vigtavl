(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(8),o=a.n(i),s=a(2),c=a(3),h=a(5),u=a(4),d=a(6),f=(a(15),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).renderTitle=function(){var e=a.props.title;return l.a.createElement("h3",{className:"title",onClick:a.handleClickTitle},a.state.isExpanded?"-":"+","\xa0",e)},a.renderText=function(){if(a.state.isExpanded)return a.props.text.split("\n").map(function(e,t){return l.a.createElement("div",{key:t},e)})},a.renderBullets=function(){if(a.state.isExpanded){var e=a.props.bullets.map(function(e,a){var n="string"===typeof e||l.a.isValidElement(e)?e:l.a.createElement(t,e);return l.a.createElement("li",{key:a},n)});return l.a.createElement("ul",null,e)}},a.handleClickTitle=function(e){e.stopPropagation(),a.setState({isExpanded:!a.state.isExpanded})};var n=a.props.initialIsExpanded;return a.state={isExpanded:void 0===n||n},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bullets,a=e.text,n=e.title;return l.a.createElement("div",null,n&&this.renderTitle(),a&&this.renderText(),t&&this.renderBullets())}}]),t}(r.Component)),p=a(1),m=(n={},Object(p.a)(n,void 0,"Wheat"),Object(p.a)(n,"sea","DeepSkyBlue"),Object(p.a)(n,"forest","ForestGreen"),Object(p.a)(n,"mountain","Sienna"),n),y=function(e){return e*(Math.PI/180)},g=Math.cos(y(60)),k=Math.sin(y(60)),b=function(e){var t=e.children,a=e.style,n=e.viewBox;return l.a.createElement("svg",{style:a,viewBox:n},t)},x=function(e){var t=e.fill,a=e.onClick,n=e.radius,r=e.stroke,i=e.strokeWidth,o=e.style,s=e.x,c=e.y,h=n*g,u=n*k,d=[[0,n],[u,h],[u,-h],[0,-n],[-u,-h],[-u,h]].map(function(e){return"".concat(s+e[0],",").concat(c+e[1])}).join(" ");return l.a.createElement("polygon",{fill:t,onClick:a,points:d,stroke:r,strokeWidth:i,style:o})},v={},w=function(e){var t=e.fill,a=e.radius,n=e.stroke,r=e.strokeWidth,i=e.style,o=e.x,s=e.y;return l.a.createElement(x,{fill:t||"wheat",radius:a||1,stroke:n||"black",strokeWidth:r||.1,style:i||v,x:"number"===typeof o?o:1.1,y:"number"===typeof s?s:1.1})},E=1*k,P=1*g,A=function(e){var t=e.hexes,a=e.size,n=e.style,r=2.2+(1+P)*(a-1)*2,i=[-.1-E*(a-1),-r,.2+E*a*2+2*E*(a-1),r].join(",");return l.a.createElement(b,{style:n,viewBox:i},t.map(function(e,t){var a=e.file.charCodeAt(0)-97,n=e.rank-1,r=E+a*E*2-n*E,i=-(1+n*(1+P));return l.a.createElement(w,{fill:m[e.type],key:t,x:r,y:i})}))},C=[{file:"a",rank:1,type:"sea"},{file:"a",rank:2},{file:"a",rank:3},{file:"a",rank:4},{file:"b",rank:1},{file:"b",rank:2},{file:"b",rank:3},{file:"b",rank:4,type:"forest"},{file:"b",rank:5},{file:"c",rank:1},{file:"c",rank:2},{file:"c",rank:3},{file:"c",rank:4},{file:"c",rank:5},{file:"c",rank:6},{file:"d",rank:1},{file:"d",rank:2,type:"forest"},{file:"d",rank:3},{file:"d",rank:4,type:"mountain"},{file:"d",rank:5},{file:"d",rank:6},{file:"d",rank:7,type:"sea"},{file:"e",rank:2},{file:"e",rank:3},{file:"e",rank:4},{file:"e",rank:5},{file:"e",rank:6},{file:"e",rank:7},{file:"f",rank:3},{file:"f",rank:4},{file:"f",rank:5},{file:"f",rank:6},{file:"f",rank:7},{file:"g",rank:4,type:"sea"},{file:"g",rank:5},{file:"g",rank:6},{file:"g",rank:7}],M=function(){return l.a.createElement(A,{hexes:C,size:4,style:{height:"10rem"}})},S=[{file:"a",rank:1,type:"sea"},{file:"a",rank:2},{file:"a",rank:3},{file:"a",rank:4},{file:"a",rank:5},{file:"b",rank:1},{file:"b",rank:2},{file:"b",rank:3},{file:"b",rank:4,type:"forest"},{file:"b",rank:5},{file:"b",rank:6},{file:"c",rank:1},{file:"c",rank:2},{file:"c",rank:3},{file:"c",rank:4},{file:"c",rank:5},{file:"c",rank:6},{file:"c",rank:7},{file:"d",rank:1},{file:"d",rank:2,type:"forest"},{file:"d",rank:3},{file:"d",rank:4},{file:"d",rank:5},{file:"d",rank:6},{file:"d",rank:7,type:"sea"},{file:"d",rank:8},{file:"e",rank:1},{file:"e",rank:2,type:"mountain"},{file:"e",rank:3},{file:"e",rank:4},{file:"e",rank:5},{file:"e",rank:6,type:"mountain"},{file:"e",rank:7},{file:"e",rank:8},{file:"e",rank:9},{file:"f",rank:2},{file:"f",rank:3},{file:"f",rank:4},{file:"f",rank:5},{file:"f",rank:6},{file:"f",rank:7},{file:"f",rank:8},{file:"f",rank:9},{file:"g",rank:3},{file:"g",rank:4},{file:"g",rank:5},{file:"g",rank:6},{file:"g",rank:7},{file:"g",rank:8},{file:"g",rank:9,type:"sea"},{file:"h",rank:4,type:"sea"},{file:"h",rank:5},{file:"h",rank:6},{file:"h",rank:7},{file:"h",rank:8},{file:"h",rank:9},{file:"i",rank:5},{file:"i",rank:6},{file:"i",rank:7,type:"forest"},{file:"i",rank:8},{file:"i",rank:9}],T=function(){return l.a.createElement(A,{hexes:S,size:5,style:{height:"10rem"}})},j={height:"2rem"},I=function(e){var t=e.children;return l.a.createElement(b,{style:j,viewBox:"0,0,2.2,2.2"},t)},O=function(e){var t=e.hexProps;return l.a.createElement(I,null,l.a.createElement(w,t))},V=[{title:"Introduction",text:"Players take control of an army to battle against their opponents while maneuvering to control limited resources that can be used to grow their armies."},{title:"Game Components",bullets:["48 wooden land hexes","6 wooden sea hexes","5 wooden forest hexes","4 wooden mountain hexes","9 wooden village pieces of each color","6 wooden town pieces of each color","3 wooden castle pieces of each color","9 wooden soldier pieces of each color","6 wooden archer pieces of each color","3 wooden knight pieces of each color","4 player boards","12 small 1-gold tokens","12 medium 2-gold tokens","12 large 3-gold tokens","6 black dice","6 white dice"]},{title:"Object of the Game",text:"Be the player with the most victory points at the end of the game. Obtain victory points in the following ways:",bullets:["Kill/capture opponent units","Seize opponent buildings","Free your imprisoned units"]},{title:"Setup",bullets:[{title:"Step 1: Build the board",bullets:["For a 2 player game, a hexagon shaped board with a side dimension of 4 hexes. Randomly place 3 sea hexes, 2 forest hexes and 1 mountain hex.","Example:",l.a.createElement(M,null),"For a 3 or 4 player game, a hexagon shaped board with a side dimension of 5 hexes. Randomly place 4 sea hexes, 3 forest hexes and 2 mountain hexes.","Example:",l.a.createElement(T,null)]},{title:"Hex Types",bullets:[{title:"Land",bullets:[l.a.createElement(O,null),"Default hex type","Eligible sites for building"]},{title:"Sea (resource)",bullets:[l.a.createElement(O,{hexProps:{fill:"DeepSkyBlue"}}),"Provides access to fishing and trade","Produces 1 Gold per occupied or built adjacent hex per Income Phase"]},{title:"Forrest (resource)",bullets:[l.a.createElement(O,{hexProps:{fill:"ForestGreen"}}),"Provides access to hunting and lumber","Produces Gold if occupied per Income Phase"]},{title:"Mountain (resource)",bullets:[l.a.createElement(O,{hexProps:{fill:"Sienna"}}),"Provides access to mining valuable minerals and ore","Produces 3 Gold if occupied per Income Phase"]}]},{title:"Step 2: Placement",text:"In turn order each player chooses an empty land hex and places one building and one unit together per turn in the following order:",bullets:["3 Villages & 3 Soldiers","2 Towns & 2 Archers","1 Castle & 1 Knight","(units and buildings are placed together on the same chosen hex)",{title:"Example",bullets:["Player 1 places first Village & Soldier","Player 2 places first Village & Soldier","Player 1 places second Village & Soldier","Player 2 places second Village & Soldier","Player 1 places third Village & Soldier","Player 2 places third Village & Soldier","Player 1 places first Town & Archer","Player 2 places first Town & Archer","Player 1 places second Town & Archer","Player 2 places second Town & Archer","Player 1 places Castle & Knight","Player 2 places Castle & Knight"]}]}]},{title:"Rounds",text:"The game is played in a series of rounds. The number of rounds played depends on the number of players.",bullets:["2 players: 6 rounds","3 players: 5 rounds","4 players: 4 rounds","Each round consists of 4 phases:",{title:"Income Phase",text:"All players simultaneously collect gold for occupied resource hexes.",bullets:["For each building or occupied hex adjacent to 1 or more sea hexes collect 1 gold","For each occupied forest hex collect 2 gold","For each occupied mountain hex collect 3 gold"]},{title:"Build Phase",text:"In turn order, each player may recruit or build or pass one at a time until all players have had 3 opportunities",bullets:[{title:"Recruit",bullets:["Add a new combat unit to the board by paying the value in gold and placing according to type:","Soldiers can only be recruited in Villages (max of 3 per phase)","Archers can only be recruited in Towns (max of 2 per phase)","Knights can only be recruited in Castles (max of 1 per phase)"]},{title:"Build",bullets:["Players may build new structures on any land hex they occupy or empty adjacent hex to their existing buildings","Existing buildings can be upgraded","To build or upgrade simply pay value of building in gold","Villages cost 1 gold (max of 3 per phase)","Towns cost 2 gold (max of 2 per phase)","Castles cost 3 gold (max of 1 per phase)"]}]},{title:"Movement Phase",bullets:["In turn order, each player may move one unit or pass","Continue until each player has had 3 opportunities","Soliers may be moved a max of 3 times per phase (can be same unit/battalion)","Archers may be moved a max of 2 times per phase (can be same archer)","Knights may be moved a max of 1 time per phase","Note that multiple soliers on the same hex can be moved together as a battalion"]},{title:"Battle Phase",text:"The battle phase is conducted in three stages:",bullets:[{title:"Ranged Attacks",bullets:["In turn order, each player may conduct one ranged attack","Continue until each player has had 2 opportunities to attack","To conduct a ranged attack, choose one of your Archers that has opponent units within range, then choose a target unit to aim at. Roll 1 D6.","Archers range extends in straight lines outward from the hex up to 3 hexes away. However when targeting hexes farther away, accuracy diminishes, resulting in a smaller chance of hitting the target.","If target is on an adjacent hex (range of 1) then a roll result of 3, 2, or 1 results in a successful hit and kills the target unit (50% chance)","If target is on a hex at range of 2 then a roll result of 2 or 1 results in a successful hit and kills the target unit (33% chance)","If target is on a hex at range of 3 then a roll result of 1 results in a successful hit and kills the target unit (17% chance)","A successful hit results in 2 hit points of damage to the target unit. This is enough to kill another archer or solier, but not enough to kill a knight with a single hit because knights have 3 health points. In order to kill a knight with ranged attacks, players must successfully score two hits in the same phase on the same target knight. Hits do not carry over to subsequent rounds.","Killed units are removed from the board and the attacker collects a number of victory points equal to the value of the killed unit","Archers may not range attack units on the same hex. If opponent units are on the same hex as an archer then that would be a melee battle to be resolved as explained in the next section."]},{title:"Battles",bullets:["Any hex occupied by more than one player becomes a melee battle.",'Each player involved rolls a number of dice equal to the sum of their units "Melee Attack" values that are involved. Involved units are the units located on the battle hex. The single highest die rolled is the only die compared. The highest die wins the battle. Ties are re-rolled.',"If more than 2 players are involved in a battle, and a 2-way tie is rolled between other players, then the other player either wins the battle if his die is higher than the tie, or is defeated if his die is lower, and becomes prisoner of the winner of the tied re-roll.","Units that lose the battle are captured. Captured units are moved to the closest building that belongs to the winner of the battle, where they become prisoners (denoted by laying the units on their side).","If multiple buildings are equidistant then the capturer may choose.","Max Prisoner occupancy for each unit type is the same as their max occupancy per hex. See Units section for values."]},{title:"Seizing",bullets:["After all battles have been resolved, if any player occupies a hex with an opponent building that is undefended, that player may seize the building and swap out the piece with the same building type of their own color and receive victory points equal to its value.","If seizing a building with prisoners, all prisoners belonging to the seizer are freed. Any prisoners belonging to other players become the prisoners of the buildings new owner.","If prisoners are freed, receive victory points equal to the value of all freed prisoner units."]}]}]},{title:"Units",bullets:[{title:"Soldier",bullets:["Cost/Victory points when captured/freed: 1","Melee Attack: 1","Movement: Any direction","Movement Range: 1 Hex","Max Recruits/Movements per phase: 3","Maximum Occupancy per Hex: 3","Can only be recruited in a Village","Battalion: Up to 3 Soldiers located on the same hex may be moved together as a single unit"]},{title:"Archer",bullets:["Cost/Victory points when captured/freed: 2","Melee Attack: 1","Movement: Diagonally","Movement Range: 1 Hex","Max Movements per phase: 2","Maximum Occupancy per Hex: 2","Can only be recruited in a Town","Capable of ranged attacks"]},{title:"Knight",bullets:["Cost/Victory points when captured/freed: 3","Melee Attack: 3","Movement: Any direction, straight line only","Movement Range: 3 Hexes","Max Movements per phase: 1","Maximum Occupancy per Hex: 1","Can only be recruited in a Castle"]}]},{title:"Buildings",bullets:[{title:"Village",bullets:["Cost/Victory points: 1","Produces: Soldiers"]},{title:"Town",bullets:["Cost/Victory points: 2","Produces: Archers or Soldiers"]},{title:"Castle",bullets:["Cost/Victory points: 3","Produces: Knights, Archers or Soldiers"]}]}],B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderRules=function(){return V.map(function(e,t){return l.a.createElement(f,Object.assign({},e,{key:t}))})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"VigTavl \u2694 v2.1"),l.a.createElement("p",null,"A turn-based strategy game of medieval combat."),l.a.createElement("p",null,"Author: Robert C. Mills"),l.a.createElement("p",null,"2 to 4 players | 11+ | 45 - 60 minutes")),this.renderRules())}}]),t}(r.Component);o.a.render(l.a.createElement(B,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.9e5e1c37.chunk.js.map