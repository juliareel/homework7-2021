var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});


document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	output.innerHTML = slider.value+"%"
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate-=(0.05 * video.playbackRate)
	console.log("Speed currently is "+ video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate+=(0.05 * video.playbackRate)
	console.log("Speed currently is "+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	};
	video.play();
	console.log("Location in video: "+ video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	} 
	else {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

var slider = document.getElementById("slider");
var output = document.getElementById("volume");


slider.oninput = function() {
	output.innerHTML = this.value+"%";
	video.volume = this.value/100;
}

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector("Video").className='oldSchool';
});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("Video").classList.remove("oldSchool");
});