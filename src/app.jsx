import React from 'react';

import About from './section/about';
import Header from './components/header';
import Home from './section/home';
import Portfolio from './section/portfolio';
import Contacts from './section/contacts';
import Education from './section/education';

const App = () => {
	const [distance, setDistance] = React.useState(0);
	const handlerScroll = (e) => {
		setDistance(e.target.documentElement.scrollTop);
	};

	React.useEffect(() => {
		document.addEventListener('scroll', handlerScroll);

		return () => {
			document.removeEventListener('scroll', handlerScroll);
		};
	}, []);

	return (
		<div className="wrapper">
			<header className="header">
				<Header distance={distance} />
			</header>
			<main className="main">
				<Home />
				<About />
				<Education />
				<Portfolio />
				<Contacts />
			</main>
		</div>
	);
};

export default App;
