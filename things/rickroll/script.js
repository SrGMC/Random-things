var rand = Math.floor((Math.random() * 100) + 1);
var num = 0;
var audio = new Audio('rr.mp3');

var w = window.innerWidth - 1;
var h = window.innerHeight - 68;

console.log(rand);

if (rand == 0){
	var rand = Math.floor((Math.random() * 100) + 1);
	console.log("rand was 0. Changed to: " + rand);
}

function button(){
	num = num + 1
	console.log(num);
	if (num == rand){
		if(Math.floor((Math.random() * 50) + 1) != Math.floor((Math.random() * 50) + 1)){
			//audio.play();
			console.log("Video played");
			document.getElementById("btn-big-red").style.display = "none";
			document.getElementById("reset").style.display = "inline";
			document.getElementById("local").innerHTML = '<video width="' + w + '" height="' + h + '" autoplay><source src="movie.mp4" type="video/mp4"></video>';
			//window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		} else {
			console.log("Easter Egg played");
			document.getElementById("btn-big-red").style.display = "none";
			document.getElementById("reset").style.display = "inline";
			document.getElementById("local").innerHTML = '<video width="' + w + '" height="' + h + '" autoplay><source src="movie2.mp4" type="video/mp4"></video>';
		}
	}
}

function reset(){
	location.reload();
}