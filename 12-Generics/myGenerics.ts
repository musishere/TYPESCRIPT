const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean): boolean {
	return val;
}

function identityTwo(val: any): any {}

function identityThree<Type>(val: Type): Type {
	return val;
}

function getSearchProduct<Type>(products: Type[]): Type {
	return products[3];
}

identityThree('3');
identityThree(2);
