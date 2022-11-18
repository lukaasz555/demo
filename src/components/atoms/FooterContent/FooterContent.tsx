import React, { FC } from 'react';
import styled from 'styled-components';

interface FooterProps {
	contentBody: string;
	contentExtra?: string;
}

export const StyledContent = styled.p`
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	font-weight: 300;
	margin: 0.2em;

	span {
		font-weight: 400;
	}
`;

const FooterContent: FC<FooterProps> = ({ contentBody, contentExtra = '' }) => {
	return (
		<StyledContent>
			{contentBody}
			<span>{contentExtra}</span>
		</StyledContent>
	);
};

export default FooterContent;
