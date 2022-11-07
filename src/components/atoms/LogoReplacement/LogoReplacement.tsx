import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50px;
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.colors.black};
`;

const LogoReplacement: FC = () => <StyledLogo />;

export default LogoReplacement;
