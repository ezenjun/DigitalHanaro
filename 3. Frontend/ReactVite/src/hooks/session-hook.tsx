import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Session } from '../App';

const SampleSession = {
	loginUser: { id: 1, name: 'Hong' },
	cart: [
		{ id: 100, name: '라면', price: 3000 },
		{ id: 101, name: '컵라면', price: 2000 },
		{ id: 200, name: '파', price: 5000 },
	],
};

type SessionContextProps = {
	session: Session;
	login: (id: number, name: string) => void;
	logOut: () => void;
	removeCartItem: (toRemoveId: number) => void;
	addCartItem: (name: string, price: number) => void;
};

const SessionContext = createContext<SessionContextProps>({
	session: SampleSession,
	login: () => {},
	logOut: () => {},
	removeCartItem: () => {},
	addCartItem: () => {},
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
	const [session, setSession] = useState<Session>({
		loginUser: { id: 1, name: 'Hong' },
		cart: [
			{ id: 100, name: '라면', price: 3000 },
			{ id: 101, name: '컵라면', price: 2000 },
			{ id: 200, name: '파', price: 5000 },
		],
	});
	const login = (id: number, name: string) => {
		// if (!name) {
		// 	alert('이름을 입력해주세요.');
		// 	loginRef.current?.focusNameInput();
		// 	return;
		// }
		setSession({
			...session,
			loginUser: { id, name },
		});
	};
	const logOut = () => setSession({ ...session, loginUser: null });
	const addCartItem = (name: string, price: number) => {
		const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
		setSession({
			...session,
			cart: [...session.cart, { id, name, price }],
		});
	};

	const removeCartItem = (toRemoveId: number) => {
		// patten 1)
		// session.cart = session.cart.filter(({ id }) => id !== toRemoveId);
		// setSession({ ...session });

		// patten 2)
		setSession({
			...session,
			cart: session.cart.filter(({ id }) => id !== toRemoveId),
		});
	};

	return (
		<SessionContext.Provider
			value={{ session, login, logOut, removeCartItem, addCartItem }}
		>
			{children}
		</SessionContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
