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
	max-width: 560px;

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
			margin: 1.5em;
		}
	}

	@media (min-width: 768px) {
		flex-wrap: nowrap;
		max-width: 100%;
		padding: 0 5%;

		.picture {
			height: 360px;
			order: 1;
		}

		.desc {
			align-items: flex-start;
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
