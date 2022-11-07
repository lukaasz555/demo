import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Menu: FC = () => <Wrapper>Menu komponent</Wrapper>;

export default Menu;
