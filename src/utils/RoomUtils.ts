/*
export function getRoomMiningSpots(roomName: string){
	const room = Game.rooms[roomName]
	const sources: Array<Source> = room.find(FIND_SOURCES);	        
        for(var energySource in sources){
          // For every source find the maximum harvesting tiles
          // ###
          // #0# Check Tiles around source
          // ###

          let harvestingTiles = [];

          let roomTerrain = room.getTerrain();
          // Pictures will be removed later, here for understanding.
          // X##
          // #0#
          // ###
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x-1, energySource.pos.y-1));

          // #X#
          // #0#
          // ###
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x, energySource.pos.y-1));

          // ##X
          // #0#
          // ###
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x+1, energySource.pos.y-1));

          // ###
          // #0X
          // ###
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x+1, energySource.pos.y));

          // ###
          // #0#
          // ##X
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x+1, energySource.pos.y+1));

          // ###
          // #0#
          // #X#
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x, energySource.pos.y+1));

          // ###
          // #0#
          // X##
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x-1, energySource.pos.y-1));

          // ###
          // X0#
          // ###
          if(roomTerrain.get(energySource.pos.x, energySource.pos.y) != TERRAIN_MASK_WALL) harvestingTiles.push((energySource.pos.x-1, energySource.pos.y));


          // For every source, count the available harvesting tiles and add worker spots
          var availableSpots = harvestingTiles.length;

          var workerSpots = new Array();
          for(var i = 0; i < availableSpots; i++){
            jsons.push({workerSpot: 'Open', tile: harvestingTiles[i]});
          }
      }

}
*/

/*
	Search the room for the most naturally enclosed space that meets the minimum dimensions
	(Also added weights if one enclosed area of same value has mining spots within in)

*/
export function findMostEnclosedSpace(room: string, width: number, height: number){
	const terrain = new Room.Terrain(room)
	const matrix = new PathFinder.CostMatrix;
	const visual = new RoomVisual(room);
	var count = 0
	for(let y = 0; y < 50; y++){
		for(let x = 0; x < 50; x++){
			count++;
			const tile = terrain.get(x,y);
			let weight: number = 0
			// If tile is wall then skip
			if(tile === TERRAIN_MASK_WALL){
				weight = 0
			}else{
				let distLeft:number = 0;
				let distRight:number = 0;
				let distUp:number = 0;
				let distDown:number = 0;
				for(let i = y; i < 50; i++){
					if(terrain.get(x, i) != TERRAIN_MASK_WALL){
						distDown++;
					}else{
						break;
					}
				}
				for(let i = y; i > 0; i--){
				if(terrain.get(x, i) != TERRAIN_MASK_WALL){
						distUp++;
					}else{
						break;
					}
				}
				for(let i = x; i < 50; i++){
				if(terrain.get(i, y) != TERRAIN_MASK_WALL){
						distRight++;
					}else{
						break;
					}
				}
				for(let i = x; i > 0; i--){
				if(terrain.get(i, y) != TERRAIN_MASK_WALL){
						distLeft++;
					}else{
						break;
					}
				}
        	visual.text(String(Math.min(Math.min(distLeft, distRight), Math.min(distUp, distDown))), x, y);
			//visual.text(String(distLeft), x, y);
			}
        	matrix.set(x, y, weight);



		}
	}


}