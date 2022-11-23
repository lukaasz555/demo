import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme/theme';
import GlobalStyle from './assets/styles/GlobalStyle';
import Nav from './components/organisms/Nav/Nav';
import Homepage from './views/Homepage/Homepage';
import Menu from './views/Menu/Menu';
import Events from './views/Events/Events';
import Contact from './views/Contact/Contact';
import Footer from './components/molecules/Footer/Footer';
import ToTop from './components/atoms/ToTop/ToTop';

const AppWrapper = styled.div`
	min-width: 375px;
	width: 100%;
	overflow: hidden;
	position: relative;
	min-height: 100vh;
	margin: 0 auto;
`;

function App() {
	const [showToTop, setShowToTop] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				setShowToTop(true);
			} else {
				setShowToTop(false);
			}
		});
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AppWrapper>
					<Nav />

					<Routes>
						<Route path='/demo/' element={<Homepage />} />
						<Route path='/demo/menu' element={<Menu />} />
						<Route path='/demo/events' element={<Events />} />
						<Route path='/demo/contact' element={<Contact />} />
					</Routes>
					<Footer />
					{showToTop ? <ToTop /> : null}
				</AppWrapper>
			</ThemeProvider>
		</>
	);
}

export default App;
