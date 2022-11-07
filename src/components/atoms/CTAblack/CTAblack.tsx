import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.m};
	border: none;
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	text-align: center;
	padding: 0.5em 0.85em;
	text-transform: uppercase;
	cursor: pointer;
`;

interface CTAProps {
	buttonBody: string;
}

const CTAblack: FC<CTAProps> = ({ buttonBody }) => {
	return <StyledButton>{buttonBody}</StyledButton>;
};

export default CTAblack;
