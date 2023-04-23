
class ImageCapturer
{
	constructor()
	{
		this.imagesCapturedWithTimes = [];

		this.viewSizeMax = null;
	}

	static Instance()
	{
		if (ImageCapturer._instance == null)
		{
			ImageCapturer._instance = new ImageCapturer();
		}

		return ImageCapturer._instance;
	}

	draw()
	{
		var d = document;
		var divGallery = d.getElementById("divGallery");
		divGallery.innerHTML = "";

		for (var i = 0; i < this.imagesCapturedWithTimes.length; i++)
		{
			var imageCapturedWithTime =
				this.imagesCapturedWithTimes[i];

			var imageCapturedAsDomElement =
				imageCapturedWithTime.toDomElement();

			divGallery.appendChild(imageCapturedAsDomElement);
		}
	}

	imageCapturedWithTimeAddToGallery(imageCapturedWithTime)
	{
		this.imagesCapturedWithTimes.push(imageCapturedWithTime);
	}

	imageGalleryClear()
	{
		this.imagesCapturedWithTimes.length = 0;
	}

	initialize()
	{
		var camera = this;

		navigator.getUserMedia // Formerly "webkitGetUserMedia".
		( 
			{ video: true },
			// success
			(stream) =>
			{
				var cameraCapabilities =
					stream.getVideoTracks()[0].getCapabilities();
				var cameraWidthMax = cameraCapabilities.width.max;
				var cameraHeightMax = cameraCapabilities.height.max;
				camera.viewSizeMax = new Coords
				(
					cameraWidthMax, cameraHeightMax
				);

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
