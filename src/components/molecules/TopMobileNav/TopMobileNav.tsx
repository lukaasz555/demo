import React, { FC } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import LogoReplacement from '../../atoms/LogoReplacement/LogoReplacement';

export const ComponentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25em 0.5em;
	margin: 0.25em 0;
	background: transparent;
`;

interface TMNProps {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopMobileNav: FC<TMNProps> = ({ visible, setVisible }) => {
	return (
		<ComponentWrapper>
			<LogoReplacement />
			<Hamburger color='#211C1E' toggle={setVisible} toggled={visible} />
		</ComponentWrapper>
	);
};

export default TopMobileNav;
