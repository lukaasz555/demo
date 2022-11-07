import React, { FC } from 'react';
import styled from 'styled-components';
import FooterHeader from '../../atoms/FooterHeader/FooterHeader';
import FooterContent from '../../atoms/FooterContent/FooterContent';
import FooterBottom from '../../atoms/FooterBottom/FooterBottom';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.black};
	margin-top: 5em;
	padding-bottom: 2em;

	section {
		margin: 2em 0;
		width: 90%;
		max-width: 420px;
		div:nth-child(2) {
			margin: 5em 0;
		}
	}

	@media (min-width: 992px) {
		margin-top: 3em;
		section {
			display: flex;
			justify-content: center;
			max-width: 1200px;

			div {
				flex-basis: 30%;
				min-width: 350px;
			}
			div:nth-child(2) {
				margin: 0 2em;
			}
		}
	}
`;

const Footer: FC = () => (
	<StyledFooter>
		<section>
			<div>
				<FooterHeader headerBody='Gdzie jesteśmy?' />
				<FooterContent contentBody='Żołnierska 4' />
				<FooterContent contentBody='10-557 Olsztyn' />
				<br />
				<a href='tel: +48 536 848 483'>
					<FooterContent contentBody='+48 536 848 483' />
				</a>
				<a href='mailto:kardamonolsztyn@gmail.com'>
					<FooterContent contentBody='kardamonolsztyn@gmail.com' />{' '}
				</a>
			</div>
			<div>
				<FooterHeader headerBody='Wolny segment' />
				<FooterContent contentBody='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
			</div>
			<div>
				<FooterHeader headerBody='Godziny otwarcia' />
				<FooterContent
					contentBody='poniedziałek: '
					contentExtra='12:00-22:00'
				/>
				<FooterContent contentBody='wtorek: ' contentExtra='12:00-22:00' />
				<FooterContent contentBody='środa: ' contentExtra='12:00-22:00' />
				<FooterContent contentBody='czwartek: ' contentExtra='12:00-22:00' />
				<FooterContent contentBody='piątek: ' contentExtra='12:00-22:00' />
				<FooterContent contentBody='sobota: ' contentExtra='12:00-22:00' />
				<FooterContent contentBody='niedziela: ' contentExtra='12:00-20:00' />
			</div>
		</section>
		<FooterBottom />
	</StyledFooter>
);

export default Footer;
