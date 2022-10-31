
class UiEventHandler
{
	static buttonCaptureImage_Clicked()
	{
		var d = document;

		var videoCameraView = d.getElementById("videoCameraView");
		var canvas = d.createElement("canvas");
		canvas.width = videoCameraView.width;
		canvas.height = videoCameraView.height;
		var graphics = canvas.getContext("2d");
		graphics.drawImage(
			videoCameraView,
			0, 0,
			videoCameraView.width,
			videoCameraView.height
		);

		var now = new Date();

		var imageCaptured =
			new ImageCapturedWithTime(canvas, now);

		var imageCapturer = ImageCapturer.Instance();
		imageCapturer.imageCapturedWithTimeAddToGallery(imageCaptured);
		imageCapturer.draw();
	}

	static buttonImageGalleryClear_Clicked()
	{
		var imageCapturer = ImageCapturer.Instance();
		imageCapturer.imageGalleryClear();
		imageCapturer.draw();
	}

	static buttonResizeCamera_Clicked()
	{
		var d = document;
		var inputImageSizeX = d.getElementById("inputImageSizeX");
		var inputImageSizeY = d.getElementById("inputImageSizeY");
		var sizeInPixels = new Coords
		(
			inputImageSizeX.value, inputImageSizeY.value
		);
		var videoCameraView = d.getElementById("videoCameraView");
		videoCameraView.width = sizeInPixels.x;
		videoCameraView.height = sizeInPixels.y;
	}
}
