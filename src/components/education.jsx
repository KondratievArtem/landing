import { education, experience } from '../assets/json/information';
//styli
import '../scss/education.scss';
// component
import Description from './description';

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
					<Description title={'Вивчав'} data={education} />
					<Description title={'Досвід та практика'} data={experience} />
				</div>
			</div>
		</section>
	);
};

export default Education;
