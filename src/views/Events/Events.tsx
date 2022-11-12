import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 30vh;
`;

const Events: FC = () => <Wrapper>komonents Events</Wrapper>;

export default Events;
