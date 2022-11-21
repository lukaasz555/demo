import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SectionContent from '../../atoms/SectionContent/SectionContent';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import CTAwhite from '../../atoms/CTAwhite/CTAwhite';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ComponentWrapper = styled.section`
	background-color: ${({ theme }) => theme.colors.black};
	margin-top: 3em;
	width: 100%;

	#section2.current {
		background-color: red;
	}

	#section2
	/* .contentWrapper */ {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		.picture {
			background-image: url('img/3.jpeg');
			height: 500px;
			overflow: hidden;
			width: 90%;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			margin: 2em 0 0.5em;
		}

		.desc {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 90%;

			h1 {
				color: ${({ theme }) => theme.colors.white};
			}

			a {
				margin: 1.5em 0;
			}
		}
	}

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		padding: 2em 0;
		/* .contentWrapper  */
		#section2 {
			max-width: 1200px;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.picture {
				height: 360px;
				order: 1;
				flex-basis: 40%;
				width: 100%;
				margin: 2em 0;
			}

			.desc {
				align-items: flex-start;
				flex-basis: 40%;
				padding-right: 4em;
				width: 100%;
			}
		}
	}
`;

const MainEvents: FC<{ id: string }> = ({ id }) => {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			'#section2',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 5,
				scrollTrigger: {
					trigger: '#section2',
					start: 'top center',
					end: 'bottom top',
				},
			}
		);
	}, []);

	return (
		<ComponentWrapper>
			<div id={id} ref={ref} className='contentWrapper'>
				<div className='picture'></div>
				<div className='desc'>
					<SectionHeader headerBody='Znamy się na przyjęciach' />
					<SectionContent
						isWhite={true}
						contentBody='Mamy ponad 10. letnie doświadczenie w organizacji imprez. Jesteśmy w stanie spełnić wszystkie wymagania i dostosować się do potrzeb Naszych Gości. Zadzwoń i zapytaj o szczegóły.'
					/>
					<a href='/contact'>
						<CTAwhite buttonBody='kontakt' />
					</a>
				</div>
			</div>
		</ComponentWrapper>
	);
};

export default MainEvents;
