import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
	loginUser: { id: 1, name: 'Hong' },
	cart: [
		{ id: 100, name: '라면', price: 3000 },
		{ id: 101, name: '컵라면', price: 2000 },
		{ id: 200, name: '파', price: 5000 },
	],
};

export type LoginUser = typeof SampleSession.loginUser;
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

function App() {
	const [count, setCount] = useState(0);
	const [session, setSession] = useState<Session>(SampleSession);

	const plusCount = () => setCount(count + 1);
	const minusCount = () => setCount(count - 1);

	const login = (id: number, name: string) =>
		setSession({ ...session, loginUser: { id, name } });
	const logout = () => setSession({ ...session, loginUser: null });

	return (
		<div className='flex h-screen w-screen items-center justify-center bg-slate-400'>
			<div className='card min-h-4/5 flex flex-col gap-4'>
				<Hello
					name='홍길동'
					age={33}
					count={count}
					plusCount={plusCount}
					minusCount={minusCount}
				/>
				<My session={session} login={login} logout={logout} />
				<div className='flex justify-center'>
					<button
						onClick={() => setCount((count) => count + 1)}
						className='buttonMedium'
					>
						App.count is {count}
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
