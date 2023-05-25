import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Contacts from './components/contacts';
import Education from './components/education';

const App = () => {
	return (
		<div className="wrapper">
			<header className="header">
				<Header />
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
