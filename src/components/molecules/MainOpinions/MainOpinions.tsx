import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Opinion from '../../atoms/Opinion/Opinion';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ComponentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2em;

	div.opinions_wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
const MainOpinions: FC = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.fromTo(
			'#section5',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: '#section5',
					start: 'top center',
					end: 'bottom',
				},
			}
		);

		gsap.to('.opinionsH1', {
			scrollTrigger: {
				trigger: '#section5',
				start: 'top center',
				end: 'bottom center',
				toggleClass: 'isVisible',
			},
		});
	}, []);

	return (
		<ComponentWrapper id='section5'>
			<SectionHeader headerBody='Opinie' />
			<div className='opinions_wrapper'>
				<Opinion
					author='Monika'
					opinion='Pyszne jedzenie, solidne porcje, miła obsługa. Nowe, świetne miejsce na kulinarnej mapie Olsztyna…'
				/>
				<Opinion
					author='Renata'
					opinion='Nowi właściciele, nowa nazwa ale przede wszystkim nowa fantastyczna jakość!!! Dania w Kardamonie to poezja smaku…'
				/>
				<Opinion
					author='Julia'
					opinion='Menu nastawione na jakość, a nie ilość, jedzenie oraz napoje przepyszne, satysfakcjonujące porcje, a obsługa bardzo profesjonalna i sympatyczna.'
				/>
			</div>
		</ComponentWrapper>
	);
};

export default MainOpinions;
