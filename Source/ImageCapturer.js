
class ImageCapturer
{
	initialize()
	{
		navigator.getUserMedia // Formerly "webkitGetUserMedia".
		( 
			{ video: true },
			// success
			(stream) =>
			{
				var d = document;
				var videoCameraView =
					d.getElementById("videoCameraView");
				videoCameraView.srcObject = stream;
				videoCameraView.play();
			},
			// error
			(err) =>
			{
				alert("Error attempting to initialize video device!");
				throw err;
			}
		);
	}
}
