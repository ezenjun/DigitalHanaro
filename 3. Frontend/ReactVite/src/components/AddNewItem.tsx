import { forwardRef, useRef } from 'react';

import Button from './atoms/Button';
import { useSession } from '../hooks/session-hook';

type Props = {
	// addItem: (name: string, price: number) => void;
	closeNewItem: () => void;
};

const AddNewItem = ({ closeNewItem }: Props) => {
	const { addCartItem } = useSession();

	const itemNameRef = useRef<HTMLInputElement>(null);
	const itemPriceRef = useRef<HTMLInputElement>(null);

	return (
		<div className='mb-4 flex'>
			<input
				id='name'
				type='text'
				autoComplete='off'
				placeholder='Name...'
				className='inp'
				// onChange={changeName}
				ref={itemNameRef}
			/>
			<input
				id='price'
				type='number'
				autoComplete='off'
				placeholder='price...'
				className='inp'
				// onChange={changeName}
				ref={itemPriceRef}
			/>
			<Button
				text='확인'
				onClick={() => {
					if (!itemNameRef.current?.value) {
						alert('이름을 입력해주세요.');
						itemNameRef.current?.focus();
						return;
					}
					if (!itemPriceRef.current?.value) {
						alert('가격을 입력해주세요.');
						itemPriceRef.current?.focus();
						return;
					}
					addCartItem(
						itemNameRef.current?.value ?? '',
						Number(itemPriceRef.current?.value)
					);
					closeNewItem();
				}}
			></Button>
		</div>
	);
};

const IMPAddNewItem = forwardRef(AddNewItem);
export default IMPAddNewItem;
