(function (){
var interval;
var offset = 0;

// pour récupérer nos éléments de la div
var elHours = document.querySelector('#hours'); 
var elMinutes = document.querySelector('#minutes');
var elSeconds = document.querySelector('#seconds');

document.querySelectorAll('.changeOffset').forEach(function(button){
	button.onclick = changeOffset;
})

document.querySelector('#reset').onclick = reset;

document.querySelector('#toggleClock').onclick = toggleClock;

showtime();
toggleClock();

function showtime(){
var date = new Date(); // renvoie la date à l'instant T
date.setSeconds(date.getSeconds() + offset);
// affichage dans le HTML
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// tu écris dans chaque <span> dédiés les éléments suivants :
elHours.innerText = hours < 10 ? '0' + hours : hours + " :"; // condit° ternaire : si hours est inf à 10 alors(?) tu écris 0+hours sinon(:) tu écris hours
elMinutes.innerText = minutes < 10 ? '0' + minutes : minutes + " :";
elSeconds.innerText = seconds < 10 ? '0' + seconds : seconds;
}

function toggleClock(){
	document.querySelector('#toggleClock').innerText = interval ? 'Play' : 'Pause';
	if(interval){
		clearInterval(interval);
		interval=null;
	} else {
		interval = setInterval(function() {
		showtime();
		}, 1000);
	}
}

function changeOffset(){
	offset += parseInt(this.getAttribute('data-offset'));
	showtime();
}

function reset(){
	offset = 0;
	showtime();
}
})()




