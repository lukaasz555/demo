import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledMenuButton = styled.a`
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.black};
	margin: 0.5em;
`;

interface MenuButtonProps {
	buttonBody: string;
	target: string;
}

const MenuButton: FC<MenuButtonProps> = ({ buttonBody, target }) => {
	return <StyledMenuButton href={target}>{buttonBody}</StyledMenuButton>;
};

export default MenuButton;
