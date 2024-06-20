// const user: (string | number)[] = [1, 'MA'];

let user: [string, number, boolean];
user = ['123', 123, true];

type User = [number, string];
const newUser: User = [12, 'hello'];

newUser.push();

export {};
