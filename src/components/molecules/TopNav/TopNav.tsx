import React, { FC } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import LogoReplacement from '../../atoms/LogoReplacement/LogoReplacement';
import NavItems from '../NavItems/NavItems';

export const ComponentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5em;
	background: transparent;
	min-height: 100px;
	@media (min-width: 768px) {
		div.burger {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.desktopNav {
			display: none;
		}
	}
`;

interface TMNProps {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopMobileNav: FC<TMNProps> = ({ visible, setVisible }) => {
	return (
		<ComponentWrapper>
			<LogoReplacement />
			<div className='desktopNav'>
				<NavItems visible={visible} />
			</div>
			<div className='burger'>
				<Hamburger color='#211C1E' toggle={setVisible} toggled={visible} />
			</div>
		</ComponentWrapper>
	);
};

export default TopMobileNav;
