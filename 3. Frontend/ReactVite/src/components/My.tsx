import { forwardRef, useRef, useState } from 'react';
// import { Session } from '../App.tsx';
import Button from './atoms/Button.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import { HiOutlineTrash } from 'react-icons/hi';
import AddNewItem from './AddNewItem.tsx';
import { useSession } from '../hooks/session-hook.tsx';

// type Props = {
// 	// session: Session;
// 	// logout: () => void;
// 	// login: (id: number, name: string) => void;
// 	// addItem: (name: string, price: number) => void;
// 	// removeCartItem: (id: number) => void;
// 	ref: ForwardedRef<LoginHandler>;
// };

function My() {
	const { session, removeCartItem } = useSession();
	const logoutButtonRef = useRef<HTMLButtonElement>(null);
	const removeItem = (id: number) => {
		if (confirm('Are you sure?')) {
			removeCartItem(id);
		}
	};
	const [addNewItem, setAddNewItem] = useState<boolean>(false);
	const closeNewItem = () => {
		setAddNewItem(!addNewItem);
	};

	console.log(session.cart);

	return (
		<>
			{session.loginUser ? (
				<>
					<Profile ref={logoutButtonRef} />
					<Button
						onClick={() => logoutButtonRef.current?.focus()}
						text='My SignOut'
						className='btn btn-primary'
					/>
				</>
			) : (
				<Login />
			)}
			<ul className='my-3 flex flex-col items-center border p-3'>
				{session.cart?.length ? (
					session.cart?.map(({ id, name, price }) => (
						<li key={id} className='mb-4 flex w-full justify-between'>
							<span>{name}</span>
							<div className='flex gap-4'>
								<small>({price.toLocaleString()})</small>
								<HiOutlineTrash
									onClick={() => removeItem(id)}
									className='hover:cursor-pointer'
								/>
							</div>
						</li>
					))
				) : (
					<li className='text-gray-400'>Cart is Empty</li>
				)}
				{addNewItem && <AddNewItem closeNewItem={closeNewItem}></AddNewItem>}
				<Button
					text='새로운 아이템 추가하기'
					className='btn btn-primary m-4'
					onClick={() => setAddNewItem(!addNewItem)}
				></Button>
			</ul>
		</>
	);
}

const ImpMy = forwardRef(My);
export default ImpMy;
