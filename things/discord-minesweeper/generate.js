function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTable(width, height, bombs) {
	width = width < 0 ? 0 : (width > 14 ? 14 : width);
	height = height < 0 ? 0 : (height > 14 ? 14 : height);
	bombs = bombs < 0 ? 0 : (bombs > 10 ? 10 : bombs);

	var table = [];
	for (var i = 0; i < width; i++) {
		table.push([]);
		for (var j = 0; j < height; j++) {
			table[i].push(0);
		}
	}

	var bombPos = [];
	for (var i = 0; i < bombs; i++) {
		bombPos.push([getRandomInt(0, width-1), getRandomInt(0, height-1)]);
	}

	for (var i = 0; i < table.length; i++) {
		for (var j = 0; j < table[i].length; j++) {
			if(isBomb([i,j], bombPos)) {
				table[i][j] = "B";
			} else {
				table[i][j] = getAdjacent([i,j], bombPos);
			}
		}	
	}

	return table;
}

function getAdjacent(position, bombs) {
	var count = 0;
	for (var i = 0; i < bombs.length; i++) {
		var adjacents = [
			[position[0], position[1]-1],    // North
			[position[0]+1, position[1]],    // East
			[position[0], position[1]+1],    // South
			[position[0]-1, position[1]],    // West
			[position[0]+1, position[1]-1],  // Northeast
			[position[0]-1, position[1]-1],  // Northwest
			[position[0]+1, position[1]+1],  // Southeast
			[position[0]-1, position[1]+1]  // Southwest
		]
		
		for (var j = 0; j < adjacents.length; j++) {
			if(adjacents[j][0] === bombs[i][0] && 
			   adjacents[j][1] === bombs[i][1]) {
				count++;
			}
		}
	}

	return count;
}

function isBomb(position, bombs) {
	for (var i = 0; i < bombs.length; i++) {
		if(position[0] === bombs[i][0] &&
		   position[1] === bombs[i][1]) {
			return true;
		}
	}

	return false;
}

function printTable(table, bombs) {
	console.log("¡Juguemos al buscaminas!\n_B: Bomba. Si encuentras una, pierdes_\n**Objetivo**: Encontrar las " + bombs + " bombas");
	var string = "";
	for (var i = 0; i < table.length; i++) {
		for (var j = 0; j < table[i].length; j++) {
			string += "||`" + table[i][j] + "`|| ";
		}
		console.log(string);
		string = "";
	}
}

printTable(generateTable(8, 8, 3), 3);