import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

interface SHeaderProps {
	headerBody: string;
}

const SectionHeader: FC<SHeaderProps> = ({ headerBody }) => (
	<StyledHeader>{headerBody}</StyledHeader>
);

export default SectionHeader;
