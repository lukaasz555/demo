import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useScroll from '../../../hooks/useScroll';

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

	&.isVisible {
		.two,
		.three {
			transform: scale(1);
			transition: transform 0.7s;
		}
	}

	.one,
	.two,
	.three {
		transition: transform 0.4s;
	}

	.two,
	.three {
		transform: scale(0.8);
	}

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

	@media (min-width: 992px) {
		.two,
		.three {
			transform: scale(1);
		}

		&.isVisible {
			.one {
				transform-origin: left;
				transform: translateX(-0.7em);
			}

			.two,
			.three {
				transform: translateX(0.7em);
				transform-origin: right;
			}
		}
	}
`;

const MainPictures: FC = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.to('#section4', {
			scrollTrigger: {
				trigger: '#section4',
				start: 'top center',
				end: 'bottom center',
				toggleClass: 'isVisible',
			},
		});
	}, []);

	return (
		<ComponentWrapper>
			<Pictures id='section4'>
				<div className='left'>
					<div className='one'></div>
				</div>

				<div className='right'>
					<div className='two imgToAnimate'></div>
					<div className='three imgToAnimate'></div>
				</div>
			</Pictures>
		</ComponentWrapper>
	);
};
export default MainPictures;
