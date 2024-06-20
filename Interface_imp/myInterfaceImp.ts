interface TakePhoto {
	cameraMode: string;
	filter: string;
	burst: number;
}

interface story {
	createStory(): string;
}

class instagram implements TakePhoto, story {
	constructor(public cameraMode: string, public filter: string, public burst: number) {}

	createStory(): string {
		return 'Story created';
	}
}
