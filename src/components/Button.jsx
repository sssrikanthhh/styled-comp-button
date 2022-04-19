import styled from 'styled-components';

const Button = styled.button`
	border: none;
	background-color: ${({ varient, color }) =>
		varient === 'contained' && color === 'primary'
			? '#2490fe'
			: varient === 'contained' && color === 'red'
			? 'red'
			: varient === 'contained' && color === 'warning'
			? 'yellow'
			: varient === 'default' || varient === 'dashed'
			? 'white'
			: varient === 'text' || varient === 'link'
			? 'white'
			: 'none'};
	color: ${({ varient, color }) =>
		varient === 'contained' && color === 'warning'
			? 'black'
			: varient === 'contained'
			? 'white'
			: varient === 'default'
			? 'black'
			: varient === 'link'
			? '#2490fe'
			: 'none'};
	padding: 0.5rem 1rem;
	margin: 1rem;
	border-radius: 0.2rem;
	border: ${({ varient }) =>
		varient === 'contained'
			? 'none'
			: varient === 'default'
			? '1px solid black'
			: varient === 'dashed'
			? '1px dashed black'
			: 'none'};
	font-weight: 600;
	cursor: pointer;
`;

export default Button;
