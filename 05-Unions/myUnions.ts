let score: number | string = 33;
score = '55';

type User = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let Mustafa: User | Admin = { name: 'Mustafa', id: 12345 };

Mustafa = { username: 'Mufi', id: 4444 };

const data: (string | number | boolean)[] = [1, 2, 3, '4', true];
