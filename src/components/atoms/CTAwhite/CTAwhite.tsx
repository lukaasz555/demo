import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize.m};
	border: none;
`;

interface CTAProps {
	buttonBody: string;
}

const CTAwhite: FC<CTAProps> = ({ buttonBody }) => {
	return <StyledButton>{buttonBody}</StyledButton>;
};

export default CTAwhite;
