//import { BurgerClose as Icon } from 'react-icons-animated';
import { BurgerSwipe as Icon } from 'react-icons-animated';

import React, { useState } from 'react';
import styled from 'styled-components';

export const BurgerIcon = styled.span`
	span {
		background-color: black;
	}
`;

export const Burger = () => {
	const [isClosed, setIsClosed] = useState<boolean>(false);

	return (
		<button
			onClick={() => setIsClosed(!isClosed)}
			style={{
				width: '70px',
				height: '70px',
				display: 'grid',
				placeItems: 'center',
				background: 'transparent',
				border: 'none',
				color: 'black',
			}}>
			<Icon isClosed={isClosed} />
		</button>
	);
};

export default Burger;
