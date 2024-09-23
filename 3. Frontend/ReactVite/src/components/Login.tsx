import { useState } from 'react';

// src/components/Login.tsx
type Props = {
	login: (_id: number, _name: string) => void;
};

const Login = ({ login }: Props) => {
	const [id, setId] = useState<number | ''>('');
	const [name, setName] = useState('');

	const handleLogin = () => {
		if (id && name) {
			login(Number(id), String(name)); //실행
		}
	};
	return (
		<form onSubmit={handleLogin} className='flex flex-col gap-2'>
			<div>
				Login ID(숫자):{' '}
				<input
					type='number'
					value={id}
					className='input text-black'
					onChange={(e) => setId(e.target.value ? Number(e.target.value) : '')}
				/>
			</div>
			<div>
				Login Name:{' '}
				<input
					type='text'
					value={name}
					className='input'
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<button type='submit' className='buttonMedium'>
				Login
			</button>
		</form>
	);
};
export default Login;
