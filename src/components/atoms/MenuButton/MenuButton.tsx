import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledMenuButton = styled.a`
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.color.black};
`;

interface MenuButtonProps {
	buttonBody: string;
}

const MenuButton: FC<MenuButtonProps> = ({ buttonBody }) => {
	return <StyledMenuButton>{buttonBody}</StyledMenuButton>;
};

export default MenuButton;
