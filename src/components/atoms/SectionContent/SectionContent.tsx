import React, { FC } from 'react';
import styled from 'styled-components';

interface SContentProps {
	contentBody: string;
	isWhite: boolean;
}

type ContentColor = {
	isWhite: boolean;
};

export const StyledContent = styled.p<ContentColor>`
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${(p) => (p.isWhite ? '#FFF' : 'black')};
	background-color: ${(p) => (!p.isWhite ? 'transparent' : 'none')};
	font-family: 'Montserrat', sans-serif;
	text-align: center;

	@media (min-width: 768px) {
		text-align: left;
	}
`;

const SectionContent: FC<SContentProps> = ({ contentBody, isWhite }) => {
	return <StyledContent isWhite={isWhite}>{contentBody}</StyledContent>;
};

export default SectionContent;
