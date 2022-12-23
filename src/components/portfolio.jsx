import portfolio from '../assets/json/portfolio';

const Portfolio = ({ statePage }) => {
	return (
		<div className={statePage === 'Портфоліо' ? 'portfolio__root _block activPage' : 'portfolio__root _block'}>
			<div className="container">
				<div className="portfolio__body">
					<div className="portfolio__title title">
						<h1>
							Мої <span>роботи</span>
						</h1>
					</div>
					<div className="portfolio__content">
						{portfolio.map((obj, i) => (
							<div className="portfolio__item portfolio-item" key={i}>
								<div className="portfolio-item__img">
									<img src={obj.img} alt="img" />
								</div>
								<div className="portfolio-item__title"></div>
								<div className="portfolio-item__disckription"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
