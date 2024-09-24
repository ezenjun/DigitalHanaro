import {
	FormEvent,
	ForwardedRef,
	forwardRef,
	useImperativeHandle,
	useRef,
} from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';
import { useSession } from '../hooks/session-hook';

export type LoginHandler = {
	focusIdInput: () => void;
	focusNameInput: () => void;
};

// type Props = {
// 	// session: Session;
// 	// logout: () => void;
// 	// login: (id: number, name: string) => void;
// 	// addItem: (name: string, price: number) => void;
// 	// removeCartItem: (id: number) => void;
// 	ref: ForwardedRef<LoginHandler>;
// };

function Login(_: unknown, ref: ForwardedRef<LoginHandler>) {
	// const [id, setId] = useState(0);
	// const [name, setName] = useState('');
	const { login } = useSession();
	const idRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	// state 사용 방식
	// const signIn = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	if (!id || !name) {
	// 		alert('Input the id & name!!');
	// 		return;
	// 	}
	// 	login(id, name);
	// };

	// ref 사용 방식
	const signIn = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const id = idRef.current?.value;
		const name = nameRef.current?.value;
		if (!id) {
			idRef.current?.focus();
			return;
		}
		if (!name) {
			nameRef.current?.focus();
			return;
		}
		login(Number(idRef.current?.value), nameRef.current?.value ?? '');
	};

	useImperativeHandle(ref, () => ({
		focusIdInput: () => idRef.current?.focus(),
		focusNameInput: () => nameRef.current?.focus(),
	}));

	return (
		<>
			<form onSubmit={signIn} className='border p-4'>
				<LabelInput
					label='ID'
					type='number'
					// onChange={(e) => setId(+e.currentTarget.value)}
					ref={idRef}
				/>
				<input
					id='name'
					type='text'
					autoComplete='off'
					placeholder='Name...'
					className='inp'
					// onChange={changeName}
					ref={nameRef}
				/>

				<Button
					text='Sign In'
					type='submit'
					variant='btn-success'
					classNames='float-end mt-3'
				/>
			</form>
		</>
	);
}

const ImpLogin = forwardRef(Login);
export default ImpLogin;
