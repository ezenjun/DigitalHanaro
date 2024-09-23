// src/components/My.tsx
import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
	session: Session;
	login: (id: number, name: string) => void;
	logout: () => void;
};

const My = ({ session: { loginUser, cart }, login, logout }: Props) => {
	console.log('@@@My');
	return (
		<div className='card flex gap-4'>
			{loginUser ? (
				<Profile loginUser={loginUser} logout={logout} />
			) : (
				<Login login={login} />
			)}
			<ul className='card flex flex-col items-center justify-center'>
				{cart.map(({ id, name, price }) => (
					<li key={id}>
						{name}({price})
					</li>
				))}
			</ul>
		</div>
	);
};
export default My;
