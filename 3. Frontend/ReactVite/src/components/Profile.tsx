// src/components/Profile.tsx
import { LoginUser } from '../App';

type Props = {
	loginUser: LoginUser;
	logout: () => void;
};

const Profile = ({ loginUser, logout }: Props) => {
	return (
		<div className='card flex flex-col gap-2'>
			<div>User Id: {loginUser.id}</div>
			<div>User Name: {loginUser.name}</div>
			<button onClick={logout} className='buttonMedium'>
				Logout
			</button>
		</div>
	);
};
export default Profile;
