import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.xs};
	border: 1px solid ${({ theme }) => theme.colors.black};
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	text-align: center;
	padding: 0.5em 0.85em;
	text-transform: uppercase;
	cursor: pointer;
	transition: color 0.25s, background 0.25s;

	&:hover {
		color: ${({ theme }) => theme.colors.black};
		background-color: #fff;
	}
`;

interface CTAProps {
	buttonBody: string;
}

const CTAblack: FC<CTAProps> = ({ buttonBody }) => {
	return <StyledButton>{buttonBody}</StyledButton>;
};

export default CTAblack;
