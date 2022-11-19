import React from 'react';
import styled from 'styled-components';
import NavItem from '../../atoms/MenuButton/MenuButton';

export const StyledNavItems = styled.nav<NavVisible>`
	display: ${(p) => (p.visible ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	margin: 1em 0;
	padding: 1em 0;
	background-color: ${({ theme }) => theme.colors.black};

	@media (min-width: 768px) {
		flex-direction: row;
		display: flex;
	}
`;

interface NavItemsProps {
	visible: boolean;
}

type NavVisible = {
	visible: boolean;
};

const NavItems: React.FC<NavItemsProps> = ({ visible }) => (
	<StyledNavItems visible={visible}>
		<NavItem buttonBody='Główna' target='/demo/' />
		<NavItem buttonBody='Menu' target='/demo/menu' />
		<NavItem buttonBody='Przyjęcia' target='/demo/events' />
		<NavItem buttonBody='Kontakt' target='/demo/contact' />
	</StyledNavItems>
);

export default NavItems;
