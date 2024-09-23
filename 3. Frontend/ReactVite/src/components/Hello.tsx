import { ReactNode, useState } from 'react';

type TitleProps = {
	text: string;
	name: string;
};

const Title = ({ text, name }: TitleProps) => {
	// console.log('Titttttttttttttt!!');
	return (
		<h1>
			{text} {name}
		</h1>
	);
};

const Body = ({ children }: { children: ReactNode }) => {
	// console.log('bodddddddd!!!');
	return <div className='flex'>{children}</div>;
};

type Props = {
	name: string;
	age: number;
	count: number;
	plusCount: () => void;
	minusCount: () => void;
};

export default function Hello({
	name,
	age,
	count,
	plusCount,
	minusCount,
}: Props) {
	// const [myState, setMyState] = useState(() => new Date().getTime());
	const [myState, setMyState] = useState(0);
	let v = 1;
	console.debug('********', v, myState, count);

	return (
		<div className='card flex flex-col items-center gap-6 border p-4'>
			<Title text='Hi~' name={name} />
			<Body>
				This is Hello Body Component. {v} - {myState} - {age}
			</Body>
			<div className='flex gap-6'>
				<button
					className='buttonMedium'
					onClick={() => {
						v++;
						setMyState(myState + 1);
						plusCount();
						// console.log('v/myState=', v, myState);
					}}
				>
					Hello
				</button>
				<strong>{count}</strong>
				<button className='buttonMedium' onClick={() => minusCount()}>
					Minus
				</button>
			</div>
		</div>
	);
}
