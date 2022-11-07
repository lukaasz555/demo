import React, { FC } from 'react';
import styled from 'styled-components';
import SectionContent from '../../atoms/SectionContent/SectionContent';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import CTAblack from '../../atoms/CTAblack/CTAblack';

const ComponentWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2em auto;

	.picture {
		background-image: url('img/1.jpeg');
		height: 500px;
		overflow: hidden;
		width: 90%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.desc {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;

		a {
			margin: 1.5em 0;
		}
	}

	@media (min-width: 768px) {
		flex-wrap: nowrap;
		margin-top: 2em;
		max-width: 1200px;
		justify-content: center;

		.picture {
			height: 360px;
			order: 1;
			flex-basis: 40%;
			width: 100%;
		}

		.desc {
			align-items: flex-start;
			flex-basis: 40%;
			padding-right: 4em;
			width: 100%;
		}
	}
`;

const MainAbout: FC = () => {
	return (
		<ComponentWrapper>
			<div className='picture'></div>
			<div className='desc'>
				<SectionHeader headerBody='Restauracja Kardamon' />
				<SectionContent
					isWhite={false}
					contentBody='Pyszna elegancja smaków. Położona w centrum restauracja Kardamon jest blisko Ciebie. Znajdujemy się w Hotelu Villa Pallas i zapraszamy do nas zaczynając od śniadania na pysznej kolacji kończąc.'
				/>
				<a href='/menu'>
					<CTAblack buttonBody='sprawdź menu' />
				</a>
			</div>
		</ComponentWrapper>
	);
};

export default MainAbout;
