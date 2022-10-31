
class ImageCapturedWithTime
{
	constructor(imageAsDomElement, timeCaptured)
	{
		this.imageAsDomElement = imageAsDomElement;
		this.timeCaptured = timeCaptured;
	}

	toDomElement()
	{
		var d = document;
		var div = d.createElement("div");

		var timeCapturedAsString =
			this.timeCaptured.toTimeString();
		var pTimeCaptured = d.createElement("p");
		pTimeCaptured.innerHTML = timeCapturedAsString;
		div.appendChild(pTimeCaptured);

		div.appendChild(this.imageAsDomElement);

		return div;
	}
}
