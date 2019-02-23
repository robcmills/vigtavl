(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(8),o=a.n(i),s=a(2),c=a(3),u=a(5),d=a(4),f=a(6),h=(a(15),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).renderTitle=function(){var e=a.props.title;return l.a.createElement("h3",{className:"title",onClick:a.handleClickTitle},a.state.isExpanded?"-":"+","\xa0",e)},a.renderText=function(){if(a.state.isExpanded)return a.props.text.split("\n").map(function(e,t){return l.a.createElement("p",{key:t},e)})},a.renderBullets=function(){if(a.state.isExpanded){var e=a.props.bullets.map(function(e,a){var n="string"===typeof e||l.a.isValidElement(e)?e:l.a.createElement(t,e);return l.a.createElement("li",{key:a},n)});return l.a.createElement("ul",null,e)}},a.handleClickTitle=function(e){e.stopPropagation(),a.setState({isExpanded:!a.state.isExpanded})};var n=a.props.initialIsExpanded;return a.state={isExpanded:void 0===n||n},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bullets,a=e.text,n=e.title;return l.a.createElement("div",null,n&&this.renderTitle(),a&&this.renderText(),t&&this.renderBullets())}}]),t}(r.Component)),m=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"12rem"},src:"img/archer-artillery-diagram.svg",alt:"archer-artillery-diagram"}))},k=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"10rem"},src:"img/archer-attack-diagram.svg",alt:"archer-attack-diagram"}))},p=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"20rem",maxWidth:"100%"},src:"img/archer-movement-diagram.svg",alt:"archer-movement-diagram"}))},y=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"6rem"},src:"img/castle-example.svg",alt:"castle-example"}))},g=a(1),b=(n={},Object(g.a)(n,void 0,"Wheat"),Object(g.a)(n,"sea","DeepSkyBlue"),Object(g.a)(n,"forest","ForestGreen"),Object(g.a)(n,"mountain","Sienna"),n),x={black:{fill:"black",stroke:"white"},white:{fill:"white",stroke:"black"}},v=function(e){return e*(Math.PI/180)},E=(Math.cos(v(30)),Math.cos(v(60))),w=Math.sin(v(60)),P=(Math.cos(v(90)),Math.sin(v(90))),j=(Math.tan(v(30)),function(e){var t=e.children,a=e.style,n=e.viewBox;return l.a.createElement("svg",{style:a,viewBox:n},t)}),C=function(e){var t=e.fill,a=e.onClick,n=e.radius,r=e.stroke,i=e.strokeWidth,o=e.style,s=e.x,c=e.y,u=n*P,d=[[u,u],[u,-u],[-u,-u],[-u,u]].map(function(e){return"".concat(s+e[0],",").concat(c+e[1])}).join(" ");return l.a.createElement("polygon",{fill:t,onClick:a,points:d,stroke:r,strokeWidth:i,style:o})},A={},O=function(e){var t=e.fill,a=e.radius,n=e.stroke,r=e.strokeWidth,i=e.style,o=e.x,s=e.y;return l.a.createElement(C,{fill:t||"white",radius:a||.75,stroke:n||"black",strokeWidth:r||.1,style:i||A,x:"number"===typeof o?o:1.1,y:"number"===typeof s?s:1.1})},W=function(e){e.fill;var t=e.onClick,a=e.stroke,n=e.strokeWidth,r=e.style,i=e.x,o=e.y;return l.a.createElement(O,{fill:"wheat",onClick:t,radius:.45,stroke:a,strokeWidth:n,style:r,x:i,y:o})},S=function(e){var t=e.fill,a=e.onClick,n=e.radius,r=e.stroke,i=e.strokeWidth,o=e.style,s=e.x,c=e.y,u=n*E,d=n*w,f=[[d,u],[0,-n],[-d,u]].map(function(e){return"".concat(s+e[0],",").concat(c+e[1])}).join(" ");return l.a.createElement("polygon",{fill:t,onClick:a,points:f,stroke:r,strokeWidth:i,style:o})},T={},F=function(e){var t=e.fill,a=e.radius,n=e.stroke,r=e.strokeWidth,i=e.style,o=e.x,s=e.y;return l.a.createElement(S,{fill:t||"white",radius:a||1,stroke:n||"black",strokeWidth:r||.1,style:i||T,x:"number"===typeof o?o:1.1,y:"number"===typeof s?s:1.1})},V=function(e){e.fill;var t=e.onClick,a=e.stroke,n=e.strokeWidth,r=e.style,i=e.x,o=e.y;return l.a.createElement(F,{fill:"wheat",onClick:t,radius:.6,stroke:a,strokeWidth:n,style:r,x:i,y:o})},M=function(e){var t=e.fill,a=e.onClick,n=e.radius,r=e.stroke,i=e.strokeWidth,o=e.style,s=e.x,c=e.y;return l.a.createElement("circle",{fill:t,onClick:a,stroke:r,strokeWidth:i,style:o,r:n,cx:s,cy:c})},B={},U=function(e){var t=e.fill,a=e.radius,n=e.stroke,r=e.strokeWidth,i=e.style,o=e.x,s=e.y;return l.a.createElement(M,{fill:t||"white",stroke:n||"black",strokeWidth:r||.1,style:i||B,radius:"number"===typeof a?a:.75,x:"number"===typeof o?o:1.1,y:"number"===typeof s?s:1.1})},z=function(e){var t=e.fill,a=e.onClick,n=e.stroke,r=e.strokeWidth,i=e.style,o=e.x,s=e.y;return l.a.createElement(U,{fill:t,onClick:a,radius:.5,stroke:n,strokeWidth:r,style:i,x:o,y:s})},D=1*E,I=1*w,q=[[0,1],[I,D],[I,-D],[0,-1],[-I,-D],[-I,D]],G=function(e){var t=e.fill,a=e.onClick,n=e.stroke,r=e.strokeWidth,i=e.style,o=e.x,s=e.y,c=q.map(function(e){return"".concat(o+e[0],",").concat(s+e[1])}).join(" ");return l.a.createElement("polygon",{fill:t,onClick:a,points:c,stroke:n,strokeWidth:r,style:i})},K={},N=function(e){var t=e.fill,a=(e.radius,e.stroke),n=e.strokeWidth,r=e.style,i=e.x,o=e.y;return l.a.createElement(G,{fill:t||"wheat",stroke:a||"hsl(0, 0%, 30%)",strokeWidth:n||.1,style:r||K,x:"number"===typeof i?i:1.1,y:"number"===typeof o?o:1.1})},R=function(e){var t=e.color,a=e.x,n=e.y,r=x[t];return l.a.createElement(F,Object.assign({},r,{radius:.6,x:a,y:n}))},J=function(e){var t=e.color,a=e.x,n=e.y,r=x[t];return l.a.createElement(O,Object.assign({},r,{radius:.45,x:a,y:n}))},H=function(e){var t=e.color,a=e.radius,n=e.x,r=e.y,i=x[t];return l.a.createElement(U,Object.assign({},i,{radius:a,x:n,y:r}))},L=function(e){var t=e.units,a=e.x,n=e.y;if(1===t.length){var r=t[0];if("soldier"===r.type)return l.a.createElement(H,{color:r.color,radius:.5,x:a,y:n});if("archer"===r.type)return l.a.createElement(R,{color:r.color,x:a,y:n});if("knight"===r.type)return l.a.createElement(J,{color:r.color,x:a,y:n})}},Q=1*w,X=1*E,Y=function(e){var t=e.hexes,a=e.size,n=e.style,r=2.2+(1+X)*(a-1)*2,i=[-.1-Q*(a-1),-r,.2+Q*a*2+2*Q*(a-1),r].join(",");return l.a.createElement(j,{style:n,viewBox:i},t.map(function(e,t){var a=e.file.charCodeAt(0)-97,n=e.rank-1,r=Q+a*Q*2-n*Q,i=-(1+n*(1+X));return"castle"===e.type?l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(N,{fill:e.color,x:r,y:i}),l.a.createElement(W,{x:r,y:i})):"town"===e.type?l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(N,{fill:e.color,x:r,y:i}),l.a.createElement(V,{x:r,y:i})):"village"===e.type?l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(N,{fill:e.color,x:r,y:i}),l.a.createElement(z,{x:r,y:i})):l.a.createElement(N,{fill:b[e.type],key:t,x:r,y:i})}),t.map(function(e,t){if(!e.units)return null;var a=e.file.charCodeAt(0)-97,n=e.rank-1,r=Q+a*Q*2-n*Q,i=-(1+n*(1+X));return l.a.createElement(L,{key:"u"+t,units:e.units,x:r,y:i})}))},Z=[{file:"a",rank:1,type:"sea"},{file:"a",rank:2},{file:"a",rank:3},{file:"a",rank:4},{file:"b",rank:1},{file:"b",rank:2},{file:"b",rank:3},{file:"b",rank:4,type:"forest"},{file:"b",rank:5},{file:"c",rank:1},{file:"c",rank:2},{file:"c",rank:3},{file:"c",rank:4},{file:"c",rank:5},{file:"c",rank:6},{file:"d",rank:1},{file:"d",rank:2,type:"forest"},{file:"d",rank:3},{file:"d",rank:4,type:"mountain"},{file:"d",rank:5},{file:"d",rank:6},{file:"d",rank:7},{file:"e",rank:2},{file:"e",rank:3},{file:"e",rank:4},{file:"e",rank:5},{file:"e",rank:6,type:"sea"},{file:"e",rank:7},{file:"f",rank:3},{file:"f",rank:4},{file:"f",rank:5},{file:"f",rank:6},{file:"f",rank:7},{file:"g",rank:4,type:"sea"},{file:"g",rank:5},{file:"g",rank:6},{file:"g",rank:7}],$=function(){return l.a.createElement(Y,{hexes:Z,size:4,style:{height:"10rem"}})},_=[{file:"a",rank:1,type:"sea"},{file:"a",rank:2},{file:"a",rank:3},{file:"a",rank:4},{file:"a",rank:5},{file:"b",rank:1},{file:"b",rank:2},{file:"b",rank:3},{file:"b",rank:4,type:"forest"},{file:"b",rank:5},{file:"b",rank:6},{file:"c",rank:1},{file:"c",rank:2},{file:"c",rank:3},{file:"c",rank:4},{file:"c",rank:5},{file:"c",rank:6},{file:"c",rank:7},{file:"d",rank:1},{file:"d",rank:2,type:"forest"},{file:"d",rank:3},{file:"d",rank:4},{file:"d",rank:5},{file:"d",rank:6},{file:"d",rank:7,type:"sea"},{file:"d",rank:8},{file:"e",rank:1},{file:"e",rank:2,type:"mountain"},{file:"e",rank:3},{file:"e",rank:4},{file:"e",rank:5},{file:"e",rank:6,type:"mountain"},{file:"e",rank:7},{file:"e",rank:8},{file:"e",rank:9},{file:"f",rank:2},{file:"f",rank:3},{file:"f",rank:4},{file:"f",rank:5},{file:"f",rank:6},{file:"f",rank:7},{file:"f",rank:8},{file:"f",rank:9},{file:"g",rank:3},{file:"g",rank:4},{file:"g",rank:5},{file:"g",rank:6},{file:"g",rank:7},{file:"g",rank:8},{file:"g",rank:9,type:"sea"},{file:"h",rank:4,type:"sea"},{file:"h",rank:5},{file:"h",rank:6},{file:"h",rank:7},{file:"h",rank:8},{file:"h",rank:9},{file:"i",rank:5},{file:"i",rank:6},{file:"i",rank:7,type:"forest"},{file:"i",rank:8},{file:"i",rank:9}],ee=function(){return l.a.createElement(Y,{hexes:_,size:5,style:{height:"10rem"}})},te=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"10rem"},src:"img/knight-attack-diagram.svg",alt:"knight-attack-diagram"}))},ae=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"12rem"},src:"img/orientation-diagram.svg",alt:"orientation-diagram"}))},ne=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"6rem"},src:"img/valid-orientations.svg",alt:"valid-orientations"}))},re={height:"2rem"},le=function(e){var t=e.children;return l.a.createElement(j,{style:re,viewBox:"0,0,2.2,2.2"},t)},ie=function(e){return l.a.createElement(le,null,l.a.createElement(F,e))},oe=function(e){var t=e.hexProps;return l.a.createElement(le,null,l.a.createElement(N,t))},se=function(e){return l.a.createElement(le,null,l.a.createElement(O,e))},ce=function(e){return l.a.createElement(le,null,l.a.createElement(U,e))},ue=function(){return l.a.createElement("div",null,l.a.createElement("img",{style:{height:"10rem"},src:"img/soldier-attack-diagram.svg",alt:"soldier-attack-diagram"}))},de=[{title:"Introduction",text:"Players take control of an army to battle against their opponents while maneuvering to control limited resources that can be used to grow their armies."},{title:"Object of the Game",text:"The game ends if any of the following conditions are met:",bullets:["One player captures all opponent units","One player occupies all resource hexes","One player occupies all opponent buildings","All but one player forfeits"]},{title:"Game Components",bullets:["48 wooden land hexes","5 wooden sea hexes","4 wooden forest hexes","3 wooden mountain hexes","3 wooden village pieces of each color","2 wooden town pieces of each color","1 wooden castle piece of each color","9 wooden soldier pieces of each color","6 wooden archer pieces of each color","3 wooden knight pieces of each color","12 small 1-silver tokens","12 medium 2-silver tokens","12 large 3-silver tokens"]},{title:"Units",bullets:[{title:"Orientation",text:"Each unit on the battleboard at all times has an orientation. This is the direction that unit is facing.",bullets:["Visually, orientation is denoted by a small orientation triangle next to the unit symbol:",l.a.createElement(ae,null),'Textually, orientation is denoted by the ">" character followed by the coordinates of the adjacent hex that unit is facing towards',"For example, in the diagram above: Sb2>c2 (soldier at b2 facing c2)","Orientations always face towards the center of adjacent hexes",l.a.createElement(ne,null)]},{title:"Soldier",bullets:[l.a.createElement(ce,null),"Value: 1","Attack: Forward adjacent hex",l.a.createElement(ue,null),"Defend: Forward (adjacent melee and ranged arrows)","Movement: Any direction up to 3 hexes"]},{title:"Archer",bullets:[l.a.createElement(ie,null),"Value: 2","Attack: Forward up to 2 hex range (adjacent hex is range zero)",l.a.createElement(k,null),"Archers can attack opponent units behind other opponent units (if that unit is not oriented to protect itself with its shield)","For example, in the following diagram the white a2 archer can attack the black c2 knight but it can not attack the black b2 soldier because it is facing its shield toward the archer",l.a.createElement(m,null),"Defend: None. Archers do not carry a shield and are thus vulnerable to attack from any direction","Movement: Diagonally up to 2 hexes",l.a.createElement(p,null),"For example, an archer located at c3 has valid moves: a2, b1, b4, d2, d5, e4, e7, g5","Note that orientation does not affect valid moves"]},{title:"Knight",bullets:[l.a.createElement(se,null),"Value: 3","Attack: Adjacent forward-left, forward, forward-right",l.a.createElement(te,null),"Defend: Forward-left, forward, forward-right","Movement: Forward up to 3 hexes"]}]},{title:"Buildings",text:"Buildings are visually represented in diagrams by a small symbol of the strongest unit that they produce, without an orientation.",bullets:["For example in the following diagram is an archer unit and a castle:",l.a.createElement(y,null),{title:"Village",bullets:["Value: 1","Produces soldiers"]},{title:"Town",bullets:["Value: 2","Produces archers or soldiers"]},{title:"Castle",bullets:["Value: 3","Produces knights, archers or soldiers"]}]},{title:"Hex Types",bullets:[{title:"Land",bullets:[l.a.createElement(oe,null),"Default hex type","Eligible sites for building"]},{title:"Sea (resource)",bullets:[l.a.createElement(oe,{hexProps:{fill:"DeepSkyBlue"}}),"Provides access to fishing and trade","Produces 1 silver per resource action"]},{title:"Forrest (resource)",bullets:[l.a.createElement(oe,{hexProps:{fill:"ForestGreen"}}),"Provides access to hunting and lumber","Produces 2 silver per resource action"]},{title:"Mountain (resource)",bullets:[l.a.createElement(oe,{hexProps:{fill:"Sienna"}}),"Provides access to mining valuable minerals and ore","Produces 3 silver per resource action"]}]},{title:"Setup",bullets:[{title:"Step 1: Build the board",bullets:["For a 2 player game, a hexagon shaped board with a side dimension of 4 hexes. Randomly place 3 sea hexes, 2 forest hexes and 1 mountain hex.","Example:",l.a.createElement($,null),"For a 3 or 4 player game, a hexagon shaped board with a side dimension of 5 hexes. Randomly place 4 sea hexes, 3 forest hexes and 2 mountain hexes.","Example:",l.a.createElement(ee,null)]},{title:"Step 2: Placement",bullets:["In turn order each player places one building and one corresponding unit together per turn. Units correspond to buildings of equal value, e.g. a Soldier & Village are placed together.","Players must choose hexes that satisfy the following requirements:","- must not be a resource hex","- must not be occupied by opponent","- unit orientation must not threaten or be threatened by any opponent unit","Players place the following:","3 Villages & 3 Soldiers","2 Towns & 2 Archers","1 Castle & 1 Knight",{title:"Example",bullets:["Player 1 places first Village & Soldier","Player 2 places first Village & Soldier","Player 1 places second Village & Soldier","Player 2 places second Village & Soldier","Player 1 places third Village & Soldier","Player 2 places third Village & Soldier","Player 1 places first Town & Archer","Player 2 places first Town & Archer","Player 1 places second Town & Archer","Player 2 places second Town & Archer","Player 1 places Castle & Knight","Player 2 places Castle & Knight"]}]}]},{title:"Gameplay",text:"Each player performs one action in turn and play continues until an end condition is met."},{title:"Actions",bullets:["Move","Attack","Earn","Purchase"]},{title:"Movement",bullets:["Players may move one of their units to a different hex and/or orientation, according to the units individual movement abilities","Units may not move to an occupied hex","Units may not move through opponent occupied hexes","Units may move through self occupied hexes","Units may occupy an opponent building if unoccupied (this also blocks opponent production at that building)"]},{title:"Attack",text:"Players may attack an opponent unit with one of their own units.",bullets:["Units inflict an amount of damage equal to their value. e.g. the soldier inflicts 1 point of damage and the knight inflicts 3","Units have a number of health points equal to their value","If a units health points are depleted to zero then that unit falls in battle and is removed from the board","Until a units health points are depleted to zero it may still move and attack normally","If a unit takes damage but is not at zero health points, mark the amount of health it has by placing a silver token next to it matching its current health value",{title:"Shields",text:"Soldiers and knights are equipped with shields that can block attacks from certain directions. Players may not attack opponent units equipped with shields from these directions. They must maneuver to attack from the side or behind."}]},{title:"Earn",text:"As an action, players may collect silver for all resource hexes they currently occupy. The amount of silver produced per hex is determined by the type:",bullets:["Sea hexes produce 1 silver","Forrest hexes produce 2 silver","Mountain hexes produce 3 silver"]},{title:"Purchase",text:"As an action, players may spend silver to purchase new units and immediately place them according to the following:",bullets:["New units can only be placed in buildings of your own color","New units can only be placed in unoccupied buildings","Knights can only be placed in castles","Archers can be placed in castles or towns","Soldiers can be placed in any building type","There is no limit to how much silver can be spent, provided those units can be placed in eligible buildings"]}],fe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).renderRules=function(){return de.map(function(e,t){return l.a.createElement(h,Object.assign({},e,{key:t}))})},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"VigTavl \u2694 v3.0"),l.a.createElement("p",null,"A turn-based strategy game of medieval combat."),l.a.createElement("p",null,"Author: robcmills"),l.a.createElement("p",null,"2 to 4 players | 11+ | 45 - 60 minutes")),this.renderRules())}}]),t}(r.Component);o.a.render(l.a.createElement(fe,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.e028799c.chunk.js.map