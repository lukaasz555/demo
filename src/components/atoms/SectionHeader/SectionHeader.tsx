import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize.xl};
	text-align: center;
	margin: 1em 0;

	@media (min-width: 768px) {
		text-align: left;
	}
`;

interface SHeaderProps {
	headerBody: string;
}

const SectionHeader: FC<SHeaderProps> = ({ headerBody }) => (
	<StyledHeader>{headerBody}</StyledHeader>
);

export default SectionHeader;
