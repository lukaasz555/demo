import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledMenuButton = styled.a`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme }) => theme.colors.white};
	margin: 0.5em;
	transition: color 0.25s;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	position: relative;
	padding-bottom: 0.25em;

	&::before {
		position: absolute;
		left: 0;
		width: 100%;
		bottom: 0;
		height: 1px;
		content: '';
		background-color: #fff;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.35s;
	}

	&:hover::before {
		transform: scaleX(1);
	}
`;

interface MenuButtonProps {
	buttonBody: string;
	target: string;
}

const MenuButton: FC<MenuButtonProps> = ({ buttonBody, target }) => {
	return <StyledMenuButton href={target}>{buttonBody}</StyledMenuButton>;
};

export default MenuButton;
