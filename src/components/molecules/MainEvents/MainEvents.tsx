import React, { FC } from 'react';
import styled from 'styled-components';
import SectionContent from '../../atoms/SectionContent/SectionContent';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import CTAwhite from '../../atoms/CTAwhite/CTAwhite';

const ComponentWrapper = styled.section`
	background-color: ${({ theme }) => theme.colors.black};
	margin-top: 3em;
	width: 100%;

	.contentWrapper {
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
		.contentWrapper {
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

const MainEvents: FC = () => {
	return (
		<ComponentWrapper>
			<div className='contentWrapper'>
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