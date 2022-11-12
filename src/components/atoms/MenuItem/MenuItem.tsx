import React, { FC } from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
	margin: 2em 0;
	display: flex;
	justify-content: space-between;
	padding: 0 0.5em;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

const Right = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-basis: 20%;
	margin-left: 10px;
`;

interface MItemProps {
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
