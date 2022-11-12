import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;

	h2 {
		text-align: center;
		font-size: ${({ theme }) => theme.fontSize.l};

		span {
			margin-top: 3em;
			font-size: ${({ theme }) => theme.fontSize.m};
		}
	}

	@media (min-width: 768px) {
		h2 {
			font-size: ${({ theme }) => theme.fontSize.xl};

			span {
				font-size: ${({ theme }) => theme.fontSize.l};
			}
		}
	}
`;

const Error: FC = () => {
	return (
		<Wrapper>
			<h2>
				Przepraszamy, wystąpił błąd.
				<br /> <span>Spróbuj ponownie.</span>
			</h2>
		</Wrapper>
	);
};

export default Error;
