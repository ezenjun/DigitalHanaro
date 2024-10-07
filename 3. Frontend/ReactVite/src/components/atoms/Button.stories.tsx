import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Button Atomic',
	tags: ['autodocs'],
};

export const Primary: StoryObj<typeof meta> = {
	args: {
		variant: 'primary',
		children: 'xxx',
		className: 'p-7',
	},
};

export const Success: StoryObj<typeof meta> = {
	args: {
		variant: 'success',
	},
	render: (args) => (
		<Button {...args} style={{ borderRadius: '20px' }}>
			Success
		</Button>
	),
};

export default meta;
