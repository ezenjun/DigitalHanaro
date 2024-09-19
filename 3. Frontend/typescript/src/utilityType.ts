type Change<T, K extends keyof T, U> = {
	[k in keyof T]: k extends K ? U : T[k];
};

interface IUser {
	id: number;
	age: number;
	name: string;
}

interface IDept {
	id: number;
	age: string;
	dname: string;
	captain: string;
}

type Combine<T, U> = {
	[K in keyof T | keyof U]: K extends keyof T & keyof U
		? T[K] | U[K] // 겹치는데 type이 다르면 |
		: K extends keyof T 
		? T[K]
		: K extends keyof U
		? U[K]
		: never;
};

type ICombined = Combine<IUser, IDept>;
