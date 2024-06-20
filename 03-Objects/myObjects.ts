// const user = {
// 	name: 'Mustafa Ahmed',
// 	email: 'mustafabukhari333@gmail.com',
// 	isActive: false,
// };

// function creatCourse({ name: string, email: string }) {
// 	return { name: 'Mustafa', email: 'dsa' };
// }

// let newUser = { name: 'Mustafa', email: 'mus@gmail', isPaid: true };
// creatCourse(newUser);
// function createUser(): {
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// } {
// 	return { name: 'Mustafa', email: 'mus@gmail.com', isActive: true };
// }

// type User = {
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// };

// function createUser(user: User): User {
// 	return user;
// }

// let createdUser = { name: 'Mustafa', email: 'mus33@gmail.com', isActive: true };
// createUser(createdUser);

type User = {
	readonly _id: string; //id can not be changed
	name: string;
	email: string;
	isActive: boolean;
	creaditCard?: number; // ? makes it optional
};

let createUser: User = {
	_id: '1234',
	name: 'Muffi',
	email: 'mufi12@gmail.com',
	isActive: false,
};

// createUser._id = '1234'; readOnly property

export {};
