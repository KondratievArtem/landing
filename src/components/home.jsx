import React from 'react';
import myImg from '../assets/img/9.jpg';

const about = ['Web Developer', 'Freelancer', 'Frontend'];
let indexArr = 1;

const Home = ({ statePage }) => {
	const [myList, setMyList] = React.useState('Web Developer');

	const textReplace = () => {
		setTimeout(time, 5000);

		function time() {
			if (indexArr < about.length) {
				setMyList(about[indexArr]);
				indexArr++;
			} else {
				indexArr = 0;
				setMyList(about[indexArr]);
				indexArr++;
			}
			textReplace();
		}
	};

	React.useEffect(() => {
		textReplace();
	}, []);

	return (
		<div className={statePage === 'Головна' ? 'home__root _block activPage' : 'home__root _block'}>
			<section className="home__title-page title-page">
				<div className="title-page__container container">
					<div className="title-page__content">
						<p className="title-page__sub-title">привіт, мене звати</p>
						<h1>
							артем <span>кондратьєв</span>
						</h1>
						<div className="title-page__im">
							<p className="title-page__im-about">Я займаюсь: </p>
							<div className="title-page__im-text">{myList}</div>
						</div>
						<div className="title-page__content-text">
							<p>Якщо Вам потрібно зробити сайт, верстку . Я це зроблю!!! Якщо Вам потрібний цінний працівник, то це я.</p>
						</div>
						<a className="title-page__dowlode" href="./cv" download="mycv.txt">
							завантажити cv
						</a>
						<div className="title-page__social social">
							<a className="social__githab" href="https://github.com/KondratievArtem">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="github coding dev developer" id="github_coding_dev_developer">
										<path d="M16,3a13,13,0,0,0-3.46,25.53,1,1,0,1,0,.53-1.92,11,11,0,1,1,7-.4,15.85,15.85,0,0,0-.3-3.92A6.27,6.27,0,0,0,24.68,16a6.42,6.42,0,0,0-1.05-3.87,7.09,7.09,0,0,0-.4-3.36,1,1,0,0,0-1.1-.67,8,8,0,0,0-3.37,1.28A11.35,11.35,0,0,0,16,9a13.09,13.09,0,0,0-3,.43A5.74,5.74,0,0,0,9.62,8.25a1,1,0,0,0-1,.66,7.06,7.06,0,0,0-.37,3.19A7.15,7.15,0,0,0,7.2,16a6.66,6.66,0,0,0,5,6.28,7.43,7.43,0,0,0-.15.79c-1,.06-1.58-.55-2.32-1.48a3.45,3.45,0,0,0-1.94-1.53,1,1,0,0,0-1.15.76A1,1,0,0,0,7.35,22c.16,0,.55.52.77.81a4.74,4.74,0,0,0,3.75,2.25,4.83,4.83,0,0,0,1.3-.18h0a1,1,0,0,0,.29-.14l0,0a.72.72,0,0,0,.18-.21.34.34,0,0,0,.08-.09.85.85,0,0,0,.06-.17,1.52,1.52,0,0,0,.06-.2v0a4.11,4.11,0,0,1,.46-1.91,1,1,0,0,0-.76-1.65A4.6,4.6,0,0,1,9.2,16a4.84,4.84,0,0,1,.87-3,1,1,0,0,0,.24-.83,5,5,0,0,1,0-1.85,3.59,3.59,0,0,1,1.74.92,1,1,0,0,0,1,.23A12.49,12.49,0,0,1,16,11a9.91,9.91,0,0,1,2.65.43,1,1,0,0,0,1-.18,5,5,0,0,1,2-1,4.11,4.11,0,0,1,0,1.91,1.05,1.05,0,0,0,.32,1A4,4,0,0,1,22.68,16a4.29,4.29,0,0,1-4.41,4.46,1,1,0,0,0-.94.65,1,1,0,0,0,.28,1.11c.59.51.5,4,.47,5.36a1,1,0,0,0,.38.81,1,1,0,0,0,.62.21,1.07,1.07,0,0,0,.25,0A13,13,0,0,0,16,3Z" />
									</g>
								</svg>
							</a>
							<a className="social__telegram" href="https://t.me/+380978363634">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="telegram social media network chat" id="telegram_social_media_network_chat">
										<path d="M28.59,4.29a2.23,2.23,0,0,0-2.27-.36L3.41,13.1a1.83,1.83,0,0,0,0,3.38l1.48.61a1,1,0,0,0,1.31-.53,1,1,0,0,0-.54-1.31L4.56,14.8l22.51-9a.22.22,0,0,1,.23,0,.24.24,0,0,1,.08.23L23.27,25.21a.4.4,0,0,1-.26.3.39.39,0,0,1-.39-.06l-8-6.24,7.83-7.91a1,1,0,0,0-1.22-1.56L9.75,16.54a1,1,0,1,0,1,1.72l4.83-2.85L13.23,17.8a2,2,0,0,0,.2,3.08l8,6.15a2.4,2.4,0,0,0,1.47.5,2.47,2.47,0,0,0,.83-.15,2.37,2.37,0,0,0,1.52-1.75L29.33,6.47A2.23,2.23,0,0,0,28.59,4.29Z" />
									</g>
								</svg>
							</a>
							<a className="social__skipe" href="https://join.skype.com/invite/KHSqeiGfNVJj">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="skype conference video call" id="skype_conference_video_call">
										<path d="M14.52,11.34a4.37,4.37,0,0,1,4.22.22,1,1,0,0,0,1.18-1.62,6.36,6.36,0,0,0-6.3-.38,3.56,3.56,0,0,0-2.15,3.17c0,2.62,2.29,3.49,3.66,4,.17.06.34.12.49.19l.43.16c1.42.55,2.28,1,2.28,2.31a1.27,1.27,0,0,1-.81,1.18A4.87,4.87,0,0,1,13,20.3,1,1,0,1,0,11.93,22a6.87,6.87,0,0,0,3.68,1,6,6,0,0,0,2.87-.67,3.27,3.27,0,0,0,1.85-2.93c0-2.8-2.23-3.66-3.56-4.17l-.39-.16-.54-.2c-1.43-.54-2.37-1-2.37-2.14A1.65,1.65,0,0,1,14.52,11.34Z" />
										<path d="M28.85,17.9a12.92,12.92,0,0,0-9.6-14.49,1,1,0,0,0-.5,1.94A11,11,0,0,1,27,16a10.52,10.52,0,0,1-.17,1.91.27.27,0,0,0,0,.09,1,1,0,0,0,0,.3,1.14,1.14,0,0,0,.15.36A5.92,5.92,0,0,1,28,22a6,6,0,0,1-6,6,5.92,5.92,0,0,1-3.34-1l-.11,0a1.12,1.12,0,0,0-.25-.11,1,1,0,0,0-.35,0h0A10.6,10.6,0,0,1,16,27,11,11,0,0,1,5,16a10.52,10.52,0,0,1,.17-1.91.21.21,0,0,0,0-.08,1.07,1.07,0,0,0,0-.31A1.14,1.14,0,0,0,5,13.34,5.92,5.92,0,0,1,4,10a6,6,0,0,1,6-6,5.92,5.92,0,0,1,3.34,1,1,1,0,0,0,1.12-1.66A8,8,0,0,0,3.15,14.1,12.93,12.93,0,0,0,17.9,28.85a8,8,0,0,0,11-11Z" />
									</g>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>

			<div className="home__img _bg">
				<img src={myImg} alt="fon" />
			</div>
		</div>
	);
};

export default Home;
