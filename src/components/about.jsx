import certificate from '../assets/img/certificate.png';
//
import React from 'react';
import '../scss/about.scss';

const About = () => {
	const [isPopup, setIsPopup] = React.useState(false);
	return (
		<section className="about__root" id="Про мене">
			<div className="container">
				<div className="about__about-me about-me">
					<div className="about-me__title title">
						<h1>
							трохи про<span> мене</span>
						</h1>
					</div>
					<div className="about-me__body">
						<div>
							<h1>Привіт, я Артем Кондратьєв.</h1>

							<span>Мої цінності:</span>

							<p>
								* Відповідальність, висока працездатність, ефективність, продуктивність та результативність, проактивність та ініціативність, для мене
								важливо своєчасно та якісно виконати роботу.
							</p>
							<p>* Постійно вивчаю нові технології та підвищую свою професійну компетентність, вивчаю світові практики в роботі.</p>
							<p>* Порядність, гідність, нульова толерантність до корупції.</p>
							<p>* Високий рівень мотивації та активна громадянська позиція. Мотивація бути причетним до масштабних проєктів.</p>
						</div>
						<div className="about-me__columns">
							<div className="about-me__column">
								<div>
									День народження: <span>09 серпня 1991р.</span>
								</div>
								<div>
									Місто : <span>Кривий Ріг</span>
								</div>
								<div>
									Freelance:
									<span>
										<a href="https://freelancehunt.com/freelancer/KondratievArtem.html "> Freelancehunt</a>
									</span>
								</div>
							</div>
							<div className="about-me__column">
								<div>
									Вік: <span>31</span>
								</div>
								<div>
									E-mail:
									<span>
										<a href="mailto:kondrativ41@gmail.com"> kondrativ41@gmail.com</a>
									</span>
								</div>
								<div>
									Телефон:
									<span>
										<a href="tel:+380978363634"> +38 097 836 36 34</a>
									</span>
								</div>
							</div>
							<div className="about-me__column">
								<img src={certificate} alt="certificate" onClick={() => setIsPopup(true)} />
								{isPopup && (
									<div className="about-me__column_popup">
										<i className="about-me__column_popup-close" onClick={() => setIsPopup(false)}></i>
										<img src={certificate} alt="certificate" />
									</div>
								)}
							</div>
						</div>
						{/* <div>
								<a className="title-page__downloaded" href="./cv" download="mycv.txt">
									завантажити cv
								</a>
							</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
