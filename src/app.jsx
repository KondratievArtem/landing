import React, { useEffect } from 'react';
// ========
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Contacts from './components/contacts';

const App = () => {
	const [activPage, setActivPage] = React.useState('Головна');

	return (
		<div className="wrapper">
			<header className="header">
				<Header valueState={setActivPage} />
			</header>
			<main className="main">
				<Home statePage={activPage} />
				<About statePage={activPage} />
				<Portfolio statePage={activPage} />
				<Contacts statePage={activPage} />
			</main>
		</div>
	);
};

export default App;
