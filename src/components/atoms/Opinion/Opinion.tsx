import React, { FC } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.black};
	position: relative;
	margin: 1em 0.5em;
	width: 340px;
	height: 240px;
	padding: 0 2em;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	&::before {
		content: '”';
		font-family: 'Merriweather', serif;
		position: absolute;
		top: 0.1em;
		right: 0.1em;
		font-size: 86px;
		color: ${({ theme }) => theme.colors.lightGray};
	}

	p,
	h3 {
		display: block;
	}

	p {
		margin-top: 1em;
		flex-basis: 55%;
	}
`;

interface OpinionProps {
	opinion: string;
	author: string;
}

const Opinion: FC<OpinionProps> = ({ opinion, author }) => {
	return (
		<StyledDiv>
			<p>{opinion}</p>
			<h3>{author}</h3>
		</StyledDiv>
	);
};

export default Opinion;
