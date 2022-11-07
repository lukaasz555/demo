import React, { FC } from 'react';
import styled from 'styled-components';
import MainAbout from '../../components/molecules/MainAbout/MainAbout';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Main: FC = () => {
	return (
		<Wrapper>
			<MainAbout />
		</Wrapper>
	);
};

export default Main;
