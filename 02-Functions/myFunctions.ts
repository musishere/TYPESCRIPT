//Functions:""
function addTwo(num: number): number {
	return num + 2;
}

function valueToUpperCase(value: string) {
	return value.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

//Arrow Function:
let logginUser = (name: string, email: string, isPaid: boolean = false): string => {
	return name;
};

const heros = ['Thor', 'Itachi', 'sasuke'];
heros.map((hero): string => {
	return `hero is ${hero}`;
});

function consoleError(errorMsg: string): void {
	console.log(errorMsg);
}

function handleError(errormsg: string): never {
	throw new Error(errormsg);
}

consoleError('404');
let name: string = valueToUpperCase('mustafa');
addTwo(6);
signUp(name, 'Mustafabukhari33@gmail.com', false);
logginUser(name, 'mustafa');

export {};
