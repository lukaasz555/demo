import React, { FC } from 'react';
import styled from 'styled-components';
import MainAbout from '../../molecules/MainAbout/MainAbout';
import MainChef from '../../molecules/MainChef/MainChef';
import BgDecoration from '../../atoms/BgDecoration/BgDecoration';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: relative;
	margin-bottom: 3em;
`;

const MainTop: FC = () => (
	<Wrapper>
		<MainAbout />
		<MainChef />
		<BgDecoration />
	</Wrapper>
);

export default MainTop;
