import React, { FC } from 'react';
import styled from 'styled-components';
import MainAbout from '../../components/molecules/MainAbout/MainAbout';
import MainChef from '../../components/molecules/MainChef/MainChef';
import MainEvents from '../../components/molecules/MainEvents/MainEvents';
import MainOpinions from '../../components/molecules/MainOpinions/MainOpinions';
import MainPictures from '../../components/molecules/MainPictures/MainPictures';
import Scrollspy from 'react-scrollspy';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Homepage: FC = () => {
	return (
		<Scrollspy
			items={['section1', 'section2', 'section3']}
			currentClassName='current'
			componentTag={'div'}>
			<Wrapper>
				<MainAbout />
				<MainChef />
				<MainEvents id='section2' />
				<MainPictures />
				<MainOpinions />
			</Wrapper>
		</Scrollspy>
	);
};

export default Homepage;
