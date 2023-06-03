import { education, experience } from '../assets/json/information';
//style
import '../scss/education.scss';
// component
import ComponentEducation from '../components/education';

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
					<ComponentEducation title={'Вивчав'} data={education} />
					<ComponentEducation title={'Досвід та практика'} data={experience} />
				</div>
			</div>
		</section>
	);
};

export default Education;
