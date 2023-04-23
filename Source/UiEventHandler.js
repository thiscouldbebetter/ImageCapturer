
class UiEventHandler
{
	static buttonCameraViewSizeHalve_Clicked()
	{
		var d = document;
		var inputImageSizeX = d.getElementById("inputImageSizeX");
		var inputImageSizeY = d.getElementById("inputImageSizeY");

		var viewSizeHalf = new Coords
		(
			Math.round(parseInt(inputImageSizeX.value) / 2),
			Math.round(parseInt(inputImageSizeY.value) / 2)
		);

		inputImageSizeX.value = viewSizeHalf.x;
		inputImageSizeY.value = viewSizeHalf.y;

		UiEventHandler.resizeCameraView();
	}

	static buttonCameraViewSizeMax_Clicked()
	{
		var imageCapturer = ImageCapturer.Instance();
		var viewSizeMax = imageCapturer.viewSizeMax;

		var d = document;
		var inputImageSizeX = d.getElementById("inputImageSizeX");
		var inputImageSizeY = d.getElementById("inputImageSizeY");

		inputImageSizeX.value = viewSizeMax.x;
		inputImageSizeY.value = viewSizeMax.y;

		UiEventHandler.resizeCameraView();
	}

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

	static inputImageSizeX_Changed()
	{
		UiEventHandler.preserveAspectRatio(true);
		UiEventHandler.resizeCameraView();
	}

	static inputImageSizeY_Changed()
	{
		UiEventHandler.preserveAspectRatio(false);
		UiEventHandler.resizeCameraView();
	}

	// Helper methods.

	static preserveAspectRatio(dimensionChangedWasXNotY)
	{
		var d = document;
		var inputImageSizeX = d.getElementById("inputImageSizeX");
		var inputImageSizeY = d.getElementById("inputImageSizeY");

		var imageSizeX = parseInt(inputImageSizeX.value);
		var imageSizeY = parseInt(inputImageSizeY.value);

		var imageCapturer = ImageCapturer.Instance();
		var viewSizeMax = imageCapturer.viewSizeMax;

		if (imageSizeX > viewSizeMax.x)
		{
			imageSizeX = viewSizeMax.x;
		}

		else if (imageSizeY > viewSizeMax.y)
		{
			imageSizeY = viewSizeMax.y;
		}

		if (dimensionChangedWasXNotY)
		{
			imageSizeY = (imageSizeX / viewSizeMax.x * viewSizeMax.y);
		}
		else
		{
			imageSizeX = (imageSizeY / viewSizeMax.y * viewSizeMax.x);
		}

		imageSizeX = Math.round(imageSizeX);
		imageSizeY = Math.round(imageSizeY);

		inputImageSizeX.value = imageSizeX;
		inputImageSizeY.value = imageSizeY;
	}

	static resizeCameraView()
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
