var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});


document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
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