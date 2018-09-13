//Get URL params
var url_string = window.location.href;
var url = new URL(url_string);
var user = url.searchParams.get("user");
var userid = url.searchParams.get("userid");

//Redirects
if(userid == 1){
    window.location = "index.html?user=SrGMC";
} else if(userid == 2){
    window.location = "index.html?user=Nepe123";
} else if(userid == 3){
    window.location = "index.html?user=Julian3006";
} else if(userid == 4){
    window.location = "index.html?user=PepenilloRosa";
}

if(url_string == 'https://srgmc.github.io/Random-things/things/mientes/index.html' || url_string == 'http://mientes.tk/' || url_string == 'http://mientes.tk/index.html' || url_string == 'http://localhost:8888' || url_string == 'http://localhost:8888/index.html'){
    $('#title').text('¿Buscamos a alguien?');
    $('#start').css('display','none');
    $('#text').append('<input class="input" type="text" name="nickname" id="nickname" value="SrGMC" style="font-size:0.5em;"><br><a class="button green" onclick="searchNickname();" style="font-size:0.5em;">Buscar</a>');
    $('.buttons').css('display','none');
}

//Variables
var total = 25;
var rand = [];
var control = 0;
var numQuestion = total-1, numTrue = 0;

//Create and shuffle question numbers
for(var i = 0; i < total; i++){
    rand[i] = i;
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
rand = shuffle(rand);

//Change name and share url
$("#share").attr("href", url_string);

//Get from JSON
var question, string, result, booleanQ;
//Answers
$.ajax({
     url: 'users/' + user + '.json',
     type: "POST", //type:"GET"
     dataType: "JSON"
})
.done(function(data){
     result = data;
});

//Questions
$.ajax({
     url: "json.json",
     type: "POST", //type:"GET"
     dataType: "JSON"
})
.done(function(data){
     question = data;
});

//Button functions
function True(){
        if(booleanQ == true){
            $('.overlay').css('display','inline');
            $(".popup-text").text('¡Acertaste!');
            numTrue++;
        } else if(booleanQ == false){
            $('.overlay').css('display','inline');
            $(".popup-text").text('¡Te equivocaste!');
        }
    }
function False(){
        if(booleanQ == false){
            $('.overlay').css('display','inline');
            $(".popup-text").text('¡Acertaste!');
            numTrue++;
        } else if(booleanQ == true){
            $('.overlay').css('display','inline');
            $(".popup-text").text('¡Te equivocaste!');
    }
}

//New question
function changeText(){
    if(result === undefined){
        window.location = "404.html";
    }
    if(result.boolean[rand[control]] !== undefined){
        $('.buttons').css('display','inline');
        $("#title").text('¿' + user);
        booleanQ = result.boolean[rand[control]];
        string = question.question[rand[control]] + "?";
        $('#start').css('display','none');
        $("#text").text(string);
        $('.overlay').css('display','none');
        $("#points").text(numTrue + " de " + numQuestion + " correctas");
        control++;
    } else {
        $("#title").text(' ');
        $("#text").text("¡No hay más preguntas!");
        $('.buttons').css('display','none');
        $('.overlay').css('display','none');
        numTrue++;
    }
}

function searchNickname(){
    var value = document.getElementById('nickname').value;
    window.location = "index.html?user=" + value;
}
