import { education, experience } from '../assets/json/information';
import certificate from '../assets/img/certificate.png';

const About = ({ statePage }) => {
	return (
		<div className={statePage === 'Про мене' ? 'about__root _block activPage' : 'about__root _block'}>
			<div className="container">
				<div className="about__body">
					<section className="about__about-me about-me">
						<div className="about-me__title title">
							<h1>
								трохи про<span> мене</span>
							</h1>
						</div>
						<div className="about-me__body">
							<div>
								<h1>Привіт, я Артем Кондратьєв.</h1>
								<p>
									Мені 31 рік. Я батько двох дітей. Для мене важливий стабільний дохід. На данний час я працюю в компанії АТБ молодшим приймальником
									товарів по 12 годин 4 через 4. Цей графік надає мені можливість навчатися. Я мотивована людина і прагну стати фахівцем екстра класу.
									Я шукаю компанію яка мені в цьому допоможе. А допоки я в пошуках, продовжую навчання в IT сфері та англійської мови.
								</p>
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
									<img src={certificate} alt="certificate" />
								</div>
							</div>
							<div>
								<a className="title-page__dowlode" href="./cv" download="mycv.txt">
									завантажити cv
								</a>
							</div>
						</div>
					</section>
					<section className="about__informacion informacion">
						<div className="informacion__columns">
							<div className="informacion__column">
								<h3>Вивчав</h3>
								<div className="informacion__column-body">
									{education.map((obj, i) => (
										<div className="informacion__column-icon column-icon" key={i}>
											<div className="column-icon__img">
												<img src={obj.icon} alt="img" />
											</div>
											<div className="column-icon__title">{obj.title}</div>
											<div className="column-icon__body">{obj.text}</div>
										</div>
									))}
								</div>
							</div>
							<div className="informacion__column">
								<h3>Досвід та практика</h3>
								<div className="informacion__column-body">
									{experience.map((obj, i) => (
										<div className="informacion__column-icon column-icon" key={i}>
											<div className="column-icon__img"></div>
											<div className="column-icon__title">{obj.title}</div>
											<div className="column-icon__body">{obj.text}</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default About;
