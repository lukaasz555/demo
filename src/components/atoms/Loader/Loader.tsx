import React, { FC } from 'react';
import { Oval } from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/Bars';
import '../../../../node_modules/react-loader-spinner/dist/loader/Oval';

const Loader: FC = () => (
	<Oval
		height={60}
		width={60}
		color='#211C1E'
		wrapperStyle={{}}
		wrapperClass=''
		visible={true}
		ariaLabel='oval-loading'
		secondaryColor='#211C1E'
		strokeWidth={2}
		strokeWidthSecondary={2}
	/>
);

export default Loader;
