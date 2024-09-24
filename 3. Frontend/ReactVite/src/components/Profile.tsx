import { forwardRef } from 'react';
// import { Session } from '../App';
import { useSession } from '../hooks/session-hook';
// import Button from './atoms/Button';

// type Props = {
// 	session: Session;
// 	logout: () => void;
// };

const Profile = forwardRef<HTMLButtonElement>((_, ref) => {
	const { session, logOut } = useSession();
	return (
		<div>
			<h3>{session.loginUser?.name} Logined</h3>
			<button onClick={logOut} ref={ref} className='btn btn-primary'>
				Profile Sign Out
			</button>

			{/* <Button onClick={logout} text='SignOut' className='btn btn-primary' /> */}
		</div>
	);
});

Profile.displayName = 'Profile';
export default Profile;
