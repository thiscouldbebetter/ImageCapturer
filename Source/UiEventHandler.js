
class UiEventHandler
{
	static buttonCaptureImage_Clicked()
	{
		var d = document;
		var videoCameraView = d.getElementById("videoCameraView");
		videoCameraView.width = sizeInPixels.x;
		videoCameraView.height = sizeInPixels.y;
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
