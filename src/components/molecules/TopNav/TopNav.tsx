import React, { FC } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import NavItems from '../NavItems/NavItems';

export const ComponentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: transparent;
	min-height: 100px;

	img {
		height: 80px;
	}

	@media (min-width: 768px) {
		max-width: 1200px;
		div.burger {
			display: none;
		}

		img {
			height: 150px;
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
			<a href='/'>
				<img src='/img/logo_white.png' alt='Kardamon Olsztyn' />
			</a>
			<div className='desktopNav'>
				<NavItems visible={visible} />
			</div>
			<div className='burger'>
				<Hamburger color='#fff' toggle={setVisible} toggled={visible} />
			</div>
		</ComponentWrapper>
	);
};

export default TopMobileNav;
