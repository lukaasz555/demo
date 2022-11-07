import React, { FC } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		height: auto;
		width: 120px;
	}

	p {
		color: ${({ theme }) => theme.colors.white};
	}
`;

const FooterBottom: FC = () => {
	return (
		<StyledDiv>
			<img src='/img/logo_white.png' alt='Kardamon Olsztyn' />
			<p>2022 &copy; Restauracja Kardamon Olsztyn</p>
		</StyledDiv>
	);
};

export default FooterBottom;
