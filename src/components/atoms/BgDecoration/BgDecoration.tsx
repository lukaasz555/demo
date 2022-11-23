import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	top: -2em;
	z-index: -5;
`;

const BgDecoration: FC = () => (
	<Wrapper>
		{/* 		<svg
			width='100%'
			height='100%'
			id='svg'
			viewBox='0 0 1440 700'
			xmlns='http://www.w3.org/2000/svg'
			className='transition duration-300 ease-in-out delay-150'>
			<path
				d='M 0,700 C 0,700 0,233 0,233 C 174.53333333333336,267.5333333333333 349.0666666666667,302.06666666666666 511,317 C 672.9333333333333,331.93333333333334 822.2666666666667,327.26666666666665 975,310 C 1127.7333333333333,292.73333333333335 1283.8666666666668,262.8666666666667 1440,233 C 1440,233 1440,700 1440,700 Z'
				stroke='#000'
				strokeOpacity='0.1'
				stroke-width='1px'
				fill='#ededed'
				fill-opacity='0.0'
				className='transition-all duration-300 ease-in-out delay-150 path-0'
				transform='rotate(-180 720 350)'></path>
		</svg> */}

		{/* 		<svg
			width='100%'
			height='100%'
			id='svg'
			viewBox='0 0 1440 700'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M 0,700 C 0,700 0,280 0,280 C 135.53571428571428,271.7857142857143 271.07142857142856,263.57142857142856 397,274 C 522.9285714285714,284.42857142857144 639.25,313.50000000000006 745,306 C 850.75,298.49999999999994 945.9285714285713,254.42857142857142 1060,244 C 1174.0714285714287,233.57142857142858 1307.0357142857142,256.7857142857143 1440,280 C 1440,280 1440,700 1440,700 Z'
				stroke='none'
				stroke-width='0'
				fill='#000000'
				fill-opacity='0.03'
				transform='rotate(-180 720 350)'></path>
		</svg> */}

		{/* zajebisty stroke */}
		<svg
			width='100%'
			height='100%'
			id='svg'
			viewBox='0 0 1440 700'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M 0,700 C 0,700 0,350 0,350 C 89.97129186602868,348.51674641148327 179.94258373205736,347.0334928229665 264,350 C 348.05741626794264,352.9665071770335 426.2009569377991,360.3827751196172 535,343 C 643.7990430622009,325.6172248803828 783.2535885167464,283.43540669856463 901,290 C 1018.7464114832536,296.56459330143537 1114.7846889952154,351.8755980861244 1201,370 C 1287.2153110047846,388.1244019138756 1363.6076555023924,369.0622009569378 1440,350 C 1440,350 1440,700 1440,700 Z'
				stroke='#000'
				strokeWidth='1px'
				strokeOpacity='0.15'
				fill='transparent'
				fill-opacity='0.00'
				transform='rotate(-180 720 350)'></path>
		</svg>
	</Wrapper>
);

export default BgDecoration;
