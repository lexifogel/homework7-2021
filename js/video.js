var video = document.querySelector("#player1")

// load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	document.getElementById('volume').innerHTML=video.volume*100+'%';
});

// pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slower
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .05; // how to make this a percent??
	console.log("Video Speed:" + video.playbackRate);
});

// faster
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .05; // how to make this a percent ^^
	console.log("Video Speed:" + video.playbackRate);
});

// skip or restart
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location:" + video.currentTime); 
	if (video.currentTime+15 <= video.duration) {
		video.currentTime += 15; 
	}
	else { //(video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}

	video.play();
	console.log("New location:" + video.currentTime); 
});

// mute and unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// volume slider -- function works but not label ??
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%"
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

// undo style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});

// bonus cuz why not
// playback time (put in console when vid is paused)
// how would i display this on the page (need a new id?)
document.querySelector("#pause").addEventListener("click", function() {
	console.log("(Paused at:" + video.currentTime + ")")
});