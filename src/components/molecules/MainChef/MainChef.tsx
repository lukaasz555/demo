import React, { FC } from 'react';
import styled from 'styled-components';
import SectionContent from '../../atoms/SectionContent/SectionContent';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';

const ComponentWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 560px;
	margin-top: 3em;

	.picture {
		background-image: url('img/2.jpeg');
		height: 500px;
		overflow: hidden;
		width: 90%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		margin-bottom: 1em;
	}

	.desc {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;

		h1 {
			margin-bottom: 0;
		}

		h2 {
			font-size: ${({ theme }) => theme.fontSize.m};
			font-family: 'Montserrat', sans-serif;
			color: ${({ theme }) => theme.colors.gray};
			font-weight: 300;
			margin-bottom: 1em;
		}

		img {
			height: 120px;
			margin-bottom: 2em;
		}
	}

	@media (min-width: 768px) {
		flex-wrap: nowrap;
		margin-top: 5em;

		max-width: 1200px;
		justify-content: center;

		.picture {
			height: 500px;
			flex-basis: 40%;
		}

		.desc {
			align-items: flex-start;
			justify-content: center;
			flex-basis: 40%;
			padding-left: 4em;
			order: 1;

			img {
				margin-bottom: 1em;
			}
		}
	}
`;

const MainChef: FC = () => {
	return (
		<ComponentWrapper>
			<div className='picture'></div>
			<div className='desc'>
				<SectionContent
					isWhite={false}
					contentBody='Kuchnia to pasja. Pyszne potrawy nie biorą się znikąd. Mamy to szczęście, że u nas gotują właśnie tacy pasjonaci.'
				/>
				<SectionHeader headerBody='Rafał Dykty' />
				<h2>NASZ SZEF KUCHNI</h2>
				<img src='./img/signature.jpeg' alt='' />
				<SectionContent
					isWhite={false}
					contentBody='Zajrzyj na Żołnierską 4 i sprawdź co pysznego może dla Ciebie przygotować nasz szalony Szef Kuchni. Rafał zawsze dodaje do potraw coś „extra”. To coś – to talent!'
				/>
			</div>
		</ComponentWrapper>
	);
};

export default MainChef;
