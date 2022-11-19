import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from '../../molecules/NavItems/NavItems';
import TopNav from '../../molecules/TopNav/TopNav';

export const ComponentWrapper = styled.section`
	margin: 0 auto 1em;
	background-color: ${({ theme }) => theme.colors.black};
	box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
	padding: 0.75em 0;
	.mobileNav {
		position: absolute;
		left: 0;
		right: 0;
		top: 120px;
		background: ${({ theme }) => theme.colors.black};
	}

	@media (min-width: 768px) {
		width: 100%;
		.mobileNav {
			display: none;
		}
	}
`;

export const InsideWrapper = styled.div`
	margin: 0 auto;
	min-width: 375px;
	max-width: 1100px;
	padding: 0 1.5em;
`;

const MobileNav: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<ComponentWrapper>
			<InsideWrapper>
				<TopNav visible={visible} setVisible={setVisible} />

				<div className='mobileNav'>
					<NavItems visible={visible} />
				</div>
			</InsideWrapper>
		</ComponentWrapper>
	);
};

export default MobileNav;
