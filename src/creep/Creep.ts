import {calculateMovementSpeed, calculateAttackDamage} from "../utils/CreepBodyCalculations"

/**
	** Creep Wrapper Class **

	The base class of a creep should be able to do the bare minimum a creep with
	no particular role or function can do.
	
	- Body Data
	- Moving
	

**/
export default class Creep{
	homeRoom: string,
	role: string;
	body: Body;
	movementSpeed: number;
	attackDamage: number;

	constructor(homeRoom:string, role: string, body: Body){
		this.homeRoom = homeRoom
		this.role = role;
		this.body = body;
		this.movementSpeed = calculateMovementSpeed(body);
		this.attackDamage = calculateAttackDamage(body);
	}

	/**
		Each creep should follow the same algorithm for moving and path finding,
		ideally all repetitive actions like mining and transport should be pre-baked and
		leave the CPU intensive operations for things like combat
	**/
	move(){
		//TODO Cheap and expensive move functions
	}
}

