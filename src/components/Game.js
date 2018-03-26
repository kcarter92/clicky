import React from "react";
import mikekromb from "../images/mikekromb.jpg"
import mrpoopybutthole from "../images/mrpoopybutthole.jpg"
import picklerick from "../images/picklerick.jpg"
import scaryterry from "../images/scaryterry.jpg"
import snowball from "../images/snowball.jpg"
import squanchy from "../images/squanchy.jpg"
import President from "../images/President.jpg"
import zeep from "../images/zeep.jpg"
import rick from "../images/rick.jpg"
import morty from "../images/morty.jpg"
import evilmorty from "../images/evilmorty.jpg"
import jessica from "../images/jessica.jpg"

const Game = () => (
	<div>
		<img className="Cards" alt="Mike Kromboulous" src={mikekromb}/>
		<img className="Cards" alt="Rick" src={rick}/>
		<img className="Cards" alt="Mr. Poopybutthole" src={mrpoopybutthole}/>
		<img className="Cards" alt="Evil Morty" src={evilmorty}/>
		<img className="Cards" alt="Scary Terry, Bitch!"src={scaryterry}/>
		<img className="Cards" alt="Snowball" src={snowball}/>
		<img className="Cards" alt="President" src={President}/>
		<img className="Cards" alt="Pickle Rick"src={picklerick}/>		
		<img className="Cards" alt="Zeep" src={zeep}/>
		<img className="Cards" alt="Morty" src={morty}/>
		<img className="Cards" alt="Squanchy" src={squanchy}/>
		<img className="Cards" alt="Jessica" src={jessica}/>	
	</div>
);

export default Game;