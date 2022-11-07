import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from '../../molecules/NavItems/NavItems';
import TopNav from '../../molecules/TopNav/TopNav';

export const ComponentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 1em;
	min-height: 80px;
	background-color: #fab;
	@media (min-width: 768px) {
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
