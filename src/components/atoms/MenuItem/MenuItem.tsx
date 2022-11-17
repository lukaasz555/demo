import React, { FC } from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
	margin: 1em 0;
	display: flex;
	justify-content: space-between;
	padding: 0 0.5em;
	//background-color: #fab;
	width: 350px;

	@media (min-width: 768px) {
		width: 700px;
	}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	h3 {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}

	h4 {
		font-size: 14px;
		font-weight: 300;
	}

	@media (min-width: 768px) {
		h3 {
			font-size: ${({ theme }) => theme.fontSize.m};
		}

		h4 {
			font-size: ${({ theme }) => theme.fontSize.s};
		}
	}
`;

const Right = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex-basis: 20%;
	margin-left: 10px;
`;

export interface MItemProps {
	name: string;
	price: number;
	desc?: string;
	category: string;
	id: string;
}

const MenuItem: FC<MItemProps> = ({ name, price, desc = '', category, id }) => (
	<StyledItem>
		<Left>
			<div>
				<h3>{name}</h3>
			</div>
			<div>
				<h4>{desc}</h4>
			</div>
		</Left>
		<Right>
			<h3>{price}zł</h3>
		</Right>
	</StyledItem>
);

export default MenuItem;
