//Player parameters
var count = 2;
var max = 5;
var min = 2;

//Runtime variables
var current = 0;
var last = [0, 0];
var left = count;
    //Player list
var players = [];
var bodyparts = languages[lang].bodyparts;
var colors = languages[lang].colors;

document.getElementById('plus').addEventListener('click', function(e){
    if(count === max){
        count = max;
    } else {
        count++;
    }
    document.getElementById('count').innerHTML = count;
});

document.getElementById('minus').addEventListener('click', function(e){
    if(count === min){
        count = min;
    } else {
        count--;
    }
    document.getElementById('count').innerHTML = count;
});

document.getElementById('set').addEventListener('click', function(e){
    document.getElementById('players').style.display = 'none';
    document.getElementById('roulette').style.display = 'initial';
    configure();
});

document.getElementById('spin').addEventListener('click', function(e){
    spin();
});

function configure(){
    for (var i = 0; i < count; i++) {
        players[i] = {name: languages[lang].playername + ' ' + (i+1), body: [null, null, null, null]};
        document.getElementById('removeplayer').innerHTML += '<div id="j' + i + '" class="pure-button button-delete" onclick="remove(' + i + ')">' + languages[lang].player + (i+1) + ' </div> ';
    }
    left = count;
}

function hasBodyPartsNotPlaced(player){
    for (var i = 0; i < players[player].body.length; i++) {
        if (players[player].body[i] === null){
            return true;
        }
    }
    return false;
}

function getFirstBodyPartNotPlaced(player){
    for (var i = 0; i < players[player].body.length; i++) {
        if (players[player].body[i] === null){
            return i;
        }
    }
    return -1;
}

function hasFreeDots(color){
    var c = 0;

    for (var i = 0; i < players.length; i++) {
        if(players[i] === null) continue;
        for (var j = 0; j < players[i].body.length; j++) {
            if(players[i].body[j] === color){
                c++;
            }
        }
    }

    return c < 6;
}

function setBodyPart(player, bodypart, color){
    players[player].body[bodypart] = color;
}

function getBodyPart(player, bodypart){
    return players[player].body[bodypart];
}

function randomNoRepeating(min, max, last){
    var number;
    do {
        number = Math.floor(Math.random()*(max-min+1)+min);
    } while (number === last);
    return number;
}

function remove(player){
    document.getElementById('j' + player).style.display = 'none';
    players[player] = null;
    left--;
    if(left === 1){
        document.getElementById('endtitle').innerHTML = '🎉🎉🎉🎉🎉<br/>' + languages[lang].end;
        document.getElementById('players').style.display = 'none';
        document.getElementById('roulette').style.display = 'none';
        document.getElementById('end').style.display = 'initial';
        document.getElementById('body').style.background = 'initial';
        document.getElementById('sub').style.color = 'initial';
    }
}

function spin(){
    var bodypart, color;

    if(hasBodyPartsNotPlaced(current)){
        bodypart = getFirstBodyPartNotPlaced(current);
        do{
            color = randomNoRepeating(0, colors.length-1, last[1]);
        } while(!hasFreeDots(color) && color === getBodyPart(current, bodypart));

        setBodyPart(current, bodypart, color);
    } else {
        bodypart = randomNoRepeating(0, bodyparts.length-1, last[0]);
        do{
            color = randomNoRepeating(0, colors.length-1, last[1]);
        } while(!hasFreeDots(color) && color === getBodyPart(current, bodypart));

        setBodyPart(current, bodypart, color);
    }

    console.log("J" + (current+1) + ": " + bodyparts[bodypart] + " (" + bodypart + ")" + ", " + colors[color] + " (" + color + ")");
    last = [bodypart, color];

    document.getElementById('sub').style.color = 'white';
    document.getElementById('player').innerHTML = players[current].name;
    document.getElementById('bodypart').innerHTML = bodyparts[bodypart];
    document.getElementById('color').innerHTML = colors[color][0];
    document.getElementById('bodypart').style.color = colors[color][1];
    document.getElementById('color').style.color = colors[color][1];
    document.getElementById('body').style.background = colors[color][1];

    if(current === players.length-1){
        current = 0;
    } else {
        do{
            current++;
        } while(players[current] === null);
    }
}
