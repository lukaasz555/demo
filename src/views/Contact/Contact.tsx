import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Contact: FC = () => (
	<Wrapper>
		<div>
			<h1>komponent kontakt</h1>
			<br />
			<h2>kontakt 1</h2>
			<h2>kontakt 2</h2>
		</div>
	</Wrapper>
);

export default Contact;
