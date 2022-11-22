import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ToTopButtonAnimation = keyframes`
	0% {transform: scale(1); opacity: 0}
	100% {transform: scale(1); opacity: 1}
`;

const ToTopButton = styled.button`
	position: fixed;
	right: 0;
	bottom: 1em;
	background: ${({ theme }) => theme.colors.black};
	border: none;
	color: ${({ theme }) => theme.colors.white};
	padding: 0.9em 1.5em;
	cursor: pointer;
	animation: 0.5s linear 1 both ${ToTopButtonAnimation};
	box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.2);

	@media (min-width: 576px) {
		right: 1em;
	}
`;

const ToTop: FC = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<ToTopButton onClick={goToTop}>
			<FontAwesomeIcon icon={faArrowUp} size={'2x'} fontWeight={100} />
		</ToTopButton>
	);
};

export default ToTop;
