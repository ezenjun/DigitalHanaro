const constCart = {
	X: 1,
	Y: 2,
	Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

try {
	// throw new Error("some error!!!!"); // 가
	// throw "some string error!!!"; // 나
	throw ["some", "array", "error"]; // 다
} catch (error) {
	console.log(hasMessageError(error) ? error.message : error);

	// console.log((error as Error).message); // (라)
}

function hasMessageError(err: unknown): err is Error {
	return (
		err instanceof Error ||
		(typeof err === "object" && err !== null && "message" in err)
	);
}
