import Creep from "../creep"
import {getOpenMiningSpot} from "../../empire/Empire"

/**
	A harvester is a creep that basically stays in one poisition for its entire lifespan
	Each room will have pre determined positions for mining, the creep will stand in the position
	until it dies. 

**/ 

export default class Harvester extends Creep {


	miningPosition: WorldPos;


	constructor(miningPosition: WorldPos){
		// Haha no real coding if everything is null
		super("null", "null but in string form", ["WORK"]);
		this.miningPosition = getOpenMiningSpot
	}


	mine(){

		
	}


}


