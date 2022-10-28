const Portfolio = ({ statePage }) => {
	return (
		<div className={statePage === 'Портфоліо' ? 'portfolio__root _block activPage' : 'portfolio__root _block'}>
			<div className="container">
				<div className="portfolio__body">
					<div className="portfolio__content">Hi, it is page about my Portfolio</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
