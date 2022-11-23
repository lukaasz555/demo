import React, { FC } from 'react';
import styled from 'styled-components';
import MainEvents from '../../components/molecules/MainEvents/MainEvents';
import MainOpinions from '../../components/molecules/MainOpinions/MainOpinions';
import MainPictures from '../../components/molecules/MainPictures/MainPictures';
import MainTop from '../../components/organisms/MainTop/MainTop';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Homepage: FC = () => {
	return (
		<Wrapper>
			<MainTop />
			<MainEvents />
			<MainPictures />
			<MainOpinions />
		</Wrapper>
	);
};

export default Homepage;
