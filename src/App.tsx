import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme/theme';
import GlobalStyle from './assets/styles/GlobalStyle';
import MobileNav from './components/organisms/MobileNav/MobileNav';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<div>
					{/* <SectionContent isWhite={false} contentBody='lorem lorem' /> */}
					<MobileNav />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
