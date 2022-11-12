import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from '../../molecules/NavItems/NavItems';
import TopNav from '../../molecules/TopNav/TopNav';

export const ComponentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 1em auto;
	min-width: 375px;

	.mobileNav {
		position: absolute;
		left: 0;
		right: 0;
		top: 120px;
		background: ${({ theme }) => theme.colors.white};
	}

	@media (min-width: 768px) {
		min-width: 768px;
		max-width: 1200px;
		.mobileNav {
			display: none;
		}
	}
`;

const MobileNav: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<ComponentWrapper>
			<TopNav visible={visible} setVisible={setVisible} />

			<div className='mobileNav'>
				<NavItems visible={visible} />
			</div>
		</ComponentWrapper>
	);
};

export default MobileNav;
