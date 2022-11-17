import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	background: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize.xs};
	border: 1px solid ${({ theme }) => theme.colors.white};
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	text-align: center;
	padding: 0.5em 0.85em;
	text-transform: uppercase;
	cursor: pointer;
	transition: color 0.25s, background 0.25s;

	&:hover {
		color: ${({ theme }) => theme.colors.white};
		background: transparent;
	}
`;

interface CTAProps {
	buttonBody: string;
}

const CTAwhite: FC<CTAProps> = ({ buttonBody }) => {
	return <StyledButton>{buttonBody}</StyledButton>;
};

export default CTAwhite;
