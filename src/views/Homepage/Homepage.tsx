import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MainAbout from '../../components/molecules/MainAbout/MainAbout';
import MainChef from '../../components/molecules/MainChef/MainChef';
import MainEvents from '../../components/molecules/MainEvents/MainEvents';
import MainOpinions from '../../components/molecules/MainOpinions/MainOpinions';
import MainPictures from '../../components/molecules/MainPictures/MainPictures';
import Scrollspy from 'react-scrollspy';
import { gsap } from 'gsap';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Homepage: FC = () => {
	/* 	const ref = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			'#section2',
			{ backgroundColor: '#fab' },
			{ backgroundColor: 'red' }
		);
	}, []); */

	return (
		/* 		<Scrollspy
			items={['section1', 'section2', 'section3']}
			currentClassName='current'
			componentTag={'div'}> */
		<Wrapper>
			<MainAbout />
			<MainChef />
			<MainEvents /* ref={ref} */ id='section2' />
			<MainPictures />
			<MainOpinions />
		</Wrapper>
		/* 		</Scrollspy> */
	);
};

export default Homepage;
