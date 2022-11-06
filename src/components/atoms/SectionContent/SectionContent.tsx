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
	background-color: ${(p) => (!p.isWhite ? '#FFF' : 'none')};
`;

const SectionContent: FC<SContentProps> = ({ contentBody, isWhite }) => {
	console.log(isWhite);
	return <StyledContent isWhite={isWhite}>{contentBody}</StyledContent>;
};

export default SectionContent;
