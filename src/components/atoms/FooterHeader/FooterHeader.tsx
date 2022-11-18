import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.l};
	text-align: center;
	margin: 1em 0;
	font-weight: 300;
`;

interface FHeaderProps {
	headerBody: string;
}

const FooterHeader: FC<FHeaderProps> = ({ headerBody }) => (
	<StyledHeader>{headerBody}</StyledHeader>
);

export default FooterHeader;
