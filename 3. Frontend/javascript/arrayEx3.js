import assert from 'assert';

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

// addUser
users.addUser = function (newer) {
	return [...this, newer];
};

// removeUser
users.removeUser = function (toRemoveUser) {
	return this.filter((user) => user.id !== toRemoveUser.id);
};

// changeUser

users.changeUser = function (fromUser, toUser) {
	return users.map((user) => (user.id === fromUser.id ? toUser : user));
};

['addUser', 'removeUser', 'changeUser'].forEach((fn) =>
	Object.defineProperty(users, fn, {
		enumerable: false,
	})
);

const r1 = users.addUser(hong); // [kim, lee, park, hong]
console.log('🚀  r1:', r1);

users.removeUser(lee); // [kim, park]
users.changeUser(kim, choi); // [choi, lee, park]

// assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
// assert.deepStrictEqual(users, [kim, lee, park]);

// assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
// assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
// assert.deepStrictEqual(users, [kim, lee, park]);
