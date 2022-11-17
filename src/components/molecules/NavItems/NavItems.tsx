import React from 'react';
import styled from 'styled-components';
import NavItem from '../../atoms/MenuButton/MenuButton';

export const StyledNavItems = styled.nav<NavVisible>`
	display: ${(p) => (p.visible ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	margin: -10px 0 1em;
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
		<NavItem buttonBody='Główna' target='/' />
		<NavItem buttonBody='Menu' target='/menu' />
		<NavItem buttonBody='Przyjęcia' target='/events' />
		<NavItem buttonBody='Kontakt' target='/contact' />
	</StyledNavItems>
);

export default NavItems;
