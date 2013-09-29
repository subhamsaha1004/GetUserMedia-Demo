window.addEventListener('DOMContentLoaded', function(e) {
	var video = document.getElementById('video'),
			snap = document.getElementById('snap'),
			videoObj = { "video": true },
			canvas = document.createElement('canvas'),
			context = canvas.getContext('2d'),
			img = new Image();

	canvas.width = video.width;
	canvas.height = video.height;

	var errBack = function(error){
		console.log("Video Capture error", error.code);
	};

	if(navigator.getUserMedia) {
		navigator.getUserMedia(videoObj, function(stream){
			video.src = stream;
			video.play();
		}, errBack);
	} else if(navigator.webkitGetUserMedia) {
		navigator.webkitGetUserMedia(videoObj, function(stream){
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

	snap.addEventListener('click', function(e){
		context.drawImage(video, 0, 0, 640, 480);
		img.src = canvas.toDataURL("image/png");
		img.className = 'floatR';
		document.getElementById('content').appendChild(img);
	}, false);

}, false);