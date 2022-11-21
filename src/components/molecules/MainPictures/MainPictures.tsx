import React, { FC } from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.section`
	margin-top: 3em;
	width: 100%;
	display: flex;
	justify-content: center;
	height: 700px;
`;

const Pictures = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1000px;
	.left,
	.right {
		flex-basis: 50%;
	}

	.right {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.one {
		background-image: url('./img/gal1.jpeg');
		height: 100%;
		min-width: 400px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		margin: 0 1em 0 0;
	}

	.two {
		background-image: url('./img/gal2.jpeg');
		height: 49%;
		min-width: 500px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.three {
		background-image: url('./img/gal3.jpeg');
		height: 49%;
		min-width: 500px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		align-self: flex-end;
	}

	@media (max-width: 992px) {
		justify-content: center;
		.left {
			display: none;
		}
	}

	@media (max-width: 576px) {
		.three,
		.two {
			min-width: 350px;
		}
	}
`;

const MainPictures: FC = () => {
	return (
		<ComponentWrapper>
			<Pictures>
				<div className='left'>
					<div className='one'></div>
				</div>

				<div className='right'>
					<div className='two'></div>
					<div className='three'></div>
				</div>
			</Pictures>
		</ComponentWrapper>
	);
};
export default MainPictures;
