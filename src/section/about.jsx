import React from 'react';
// styli
import '../scss/about.scss';
// component
import Description from '../components/description';
import { myData } from '../assets/json/information';

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

							<em>Мої цінності:</em>

							<p>
								* Відповідальність, висока працездатність, ефективність, продуктивність та результативність, проактивність та ініціативність, для мене
								важливо своєчасно та якісно виконати роботу.
							</p>
							<p>* Постійно вивчаю нові технології та підвищую свою професійну компетентність, вивчаю світові практики в роботі.</p>
							<p>* Порядність, гідність, нульова толерантність до корупції.</p>
							<p>* Високий рівень мотивації та активна громадянська позиція. Мотивація бути причетним до масштабних проєктів.</p>
						</div>
						<div className="about-me__columns">
							{/* <div className="about-me__column">
								<dl>
									<dt>День народження:</dt> <dd>09 серпня 1991р.</dd>
								</dl>
								<dl>
									<dt>Місто:</dt> <dd>Кривий Ріг</dd>
								</dl>
								<dl>
									<dt>Freelance:</dt>
									<dd>
										<a href="https://freelancehunt.com/freelancer/KondratievArtem.html "> Freelancehunt</a>
									</dd>
								</dl>
							</div> */}
							{/* <div className="about-me__column">
								<dl>
									<dt>Вік:</dt> <dd>31</dd>
								</dl>
								<dl>
									<dt>E-mail:</dt>
									<dd>
										<address>
											<a href="mailto:kondrativ41@gmail.com"> kondrativ41@gmail.com</a>
										</address>
									</dd>
								</dl>
								<dl>
									<dt>Телефон:</dt>
									<dd>
										<address>
											<a href="tel:+380978363634"> +38 097 836 36 34</a>
										</address>
									</dd>
								</dl>
							</div> */}
							{/* <div className="about-me__column">
								<img src={} alt="certificate" onClick={() => setIsPopup(true)} />
								{isPopup && (
									<div className="about-me__column_popup">
										<i className="about-me__column_popup-close" onClick={() => setIsPopup(false)}></i>
										<img src={} alt="certificate" />
									</div>
								)}
							</div> */}
							<Description data={myData} isPopup={isPopup} setIsPopup={setIsPopup} />
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
