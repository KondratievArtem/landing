import { education, experience } from '../assets/json/information';
//
import '../scss/education.scss';

const Education = () => {
	return (
		<section className="education" id="Освіта">
			<div className="container">
				<div className="portfolio__title title">
					<h1>
						Моя <span>освіта</span>
					</h1>
				</div>
				<div className="education__columns">
					<div className="education__column">
						<h3>Вивчав</h3>
						<div className="education__column-body">
							{education.map((obj, i) => (
								<div className="education__column-icon column-icon" key={i}>
									<div className="column-icon__img">
										<img src={obj.icon} alt="img" />
									</div>
									<div className="column-icon__title">{obj.title}</div>
									<div className="column-icon__body">{obj.text}</div>
								</div>
							))}
						</div>
					</div>
					<div className="education__column">
						<h3>Досвід та практика</h3>
						<div className="education__column-body">
							{experience.map((obj, i) => (
								<div className="education__column-icon column-icon" key={i}>
									<div className="column-icon__img"></div>
									<div className="column-icon__title">{obj.title}</div>
									<div className="column-icon__body">{obj.text}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
