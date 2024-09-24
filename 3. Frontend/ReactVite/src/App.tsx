import { useRef } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { type LoginHandler } from './components/Login';
import { useCounter } from './hooks/counter-hook';
import { SessionProvider, useSession } from './hooks/session-hook';

// const SampleSession = {
// 	loginUser: { id: 1, name: 'Hong' },
// 	cart: [
// 		{ id: 100, name: '라면', price: 3000 },
// 		{ id: 101, name: '컵라면', price: 2000 },
// 		{ id: 200, name: '파', price: 5000 },
// 	],
// };
type CartItem = { id: number; name: string; price: number };
type LoginUser = Omit<CartItem, 'price'>;
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

function App() {
	const { count, plusCount, minusCount } = useCounter();
	const { session } = useSession();

	const myHandleRef = useRef<MyHandler>(null);
	const loginRef = useRef<LoginHandler>(null);

	return (
		<div className='mt-5 flex flex-col items-center'>
			<Hello
				name='홍길동'
				age={33}
				count={count}
				plusCount={plusCount}
				minusCount={minusCount}
				ref={myHandleRef}
			/>
			<hr />
			<pre>{JSON.stringify(session.loginUser)}</pre>
			<SessionProvider>
				<My
					// session={session}
					// logout={logOut}
					// login={login}
					// addItem={addCartItem}
					// removeCartItem={removeCartItem}
					ref={loginRef}
				/>
			</SessionProvider>

			<div className='card'>
				<button
					onClick={() => {
						// setCount((count) => count + 1);
						plusCount();
						if (session.loginUser) session.loginUser.name = 'XXX' + count;
						console.table(session.loginUser);
						myHandleRef.current?.jumpHelloState();
					}}
					className='btn'
				>
					App.count is {count}
				</button>
			</div>
		</div>
	);
}

export default App;
