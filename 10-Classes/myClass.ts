class User {
	private readonly city: string = 'Lahore';
	private courseCount: number = 1;

	constructor(public email: string, public name: string) {}

	get getAppleEmail(): string {
		return 'apple';
	}

	get getCourseCount(): number {
		return this.courseCount;
	}

	set CourseCount(courseCount: number) {
		if (courseCount <= 1) {
			throw new Error('Invalid Course Count');
		}
		this.courseCount = courseCount;
	}
}

const Mustafa = new User('212', 'sad');
