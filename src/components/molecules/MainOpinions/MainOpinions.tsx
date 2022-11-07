import React, { FC } from 'react';
import styled from 'styled-components';
import Opinion from '../../atoms/Opinion/Opinion';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';

const ComponentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2em;

	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
const MainOpinions: FC = () => {
	return (
		<ComponentWrapper>
			<SectionHeader headerBody='Opinie' />
			<div>
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
