interface User {
	readonly dbId: number;
	email: string;
	username: string;
	googleId?: null;
	startTrail(): string;
	getCoupoun(coupunname: string): number;
}

interface User {
	githubId: string;
}

interface Admin extends User {
	role: string;
}

const newUser: User = {
	dbId: 1234,
	email: 'M@mub',
	username: 'Mustafa',
	startTrail: () => {
		return 'ok';
	},
	getCoupoun: (name: 'Mustafa') => {
		return 2;
	},
	githubId: '12345',
};
