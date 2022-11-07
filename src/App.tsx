import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme/theme';
import GlobalStyle from './assets/styles/GlobalStyle';
import Nav from './components/organisms/Nav/Nav';
import Homepage from './views/Homepage/Homepage';
import Menu from './views/Menu/Menu';
import Events from './views/Events/Events';
import Contact from './views/Contact/Contact';
import Footer from './components/molecules/Footer/Footer';

const AppWrapper = styled.div`
	min-width: 375px;
	width: 100%;
	overflow: hidden;
	position: relative;
	min-height: 100vh;
	margin: 0 auto;
`;

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router>
					<AppWrapper>
						<Nav />
						<Routes>
							<Route path='/' element={<Homepage />} />
							<Route path='/menu' element={<Menu />} />
							<Route path='/events' element={<Events />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
						<Footer />
					</AppWrapper>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
