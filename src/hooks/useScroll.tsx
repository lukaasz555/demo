import { useState, useEffect } from 'react';

const useScroll = () => {
	const [currentScrollPos, setCurrentScrollPost] = useState(0);

	useEffect(() => {
		const getCurrentPos = () => setCurrentScrollPost(window.scrollY);
		window.addEventListener('scroll', getCurrentPos);
		getCurrentPos();
		return () => window.removeEventListener('scroll', getCurrentPos);
	}, []);

	return currentScrollPos;
};

export default useScroll;
