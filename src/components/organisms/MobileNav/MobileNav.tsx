import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from '../../molecules/NavItems/NavItems';
import TopMobileNav from '../../molecules/TopMobileNav/TopMobileNav';

export const ComponentWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

const MobileNav: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<ComponentWrapper>
			<TopMobileNav visible={visible} setVisible={setVisible} />
			<NavItems visible={visible} />
		</ComponentWrapper>
	);
};

export default MobileNav;
