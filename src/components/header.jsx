import React from 'react';
// =======
import '../scss/header.scss';
// ========
import { myList, startTimeData } from '../assets/json/information';

const Header = () => {
	const [activePage, setActivePage] = React.useState(myList[0].page);
	const [activeMenu, setActiveMenu] = React.useState(false);
	// =======
	const [hours, setHours] = React.useState(0);
	const [dey, setDey] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);
	// timer war

	setTimeout(function request() {
		const getCurrentData = new Date().getTime();
		let differenceData = getCurrentData - startTimeData;
		setMinutes(Math.floor((differenceData % (1000 * 60 * 60)) / (1000 * 60)));
		setHours(Math.floor((differenceData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		setDey(Math.floor(differenceData / (1000 * 60 * 60 * 24)));
		setTimeout(request, 1000);
	}, 1000);

	return (
		<div className="container">
			<div className="header__time-war time-war">
				<div>Війна триває:</div>
				<div className="time-war__display display">
					<div className="time-war__dey-body">
						<div className="time-war__dey">
							<div className="time-war__dey-decor"></div>
							<span>{dey}</span>
						</div>
						<span className="time-war__dey-text">днів</span>
					</div>

					<div className="time-war__clock">
						<div className="time-war__hours">
							<div>{hours < 10 ? '0' + hours : hours}</div>
							<span>:</span>
							<div>{minutes < 10 ? '0' + minutes : minutes}</div>
						</div>
						<div className="time-war__clock-text">
							<span>годин</span>
						</div>
					</div>
				</div>
				<div className="time-war__text">
					<p>росія напала на Україну!!! Але ми переможемо! Слава Україні!!!</p>
				</div>
			</div>
			<div className="header__body">
				<div className="header__logo">
					<a href="#">
						<span>K</span>ondratiev
					</a>
				</div>
				<nav className="header__myList">
					{myList.map((obj, index) => (
						<a href={`#${obj.page}`} key={index}>
							{obj.page}
						</a>
					))}
				</nav>
				<div className={`header__burger-menu burger-menu ${activeMenu ? 'active' : ''} `}>
					<div className="burger-menu__open-close" onClick={() => setActiveMenu(!activeMenu)}>
						<span></span>
					</div>
					<nav className="burger-menu__burgerList" onClick={() => setActiveMenu(false)}>
						{myList.map((obj, index) => (
							<a
								href={`#${obj.page}`}
								onClick={() => {
									setActivePage(obj.page);
									setActiveMenu(false);
								}}
								key={index}>
								<i className={activePage === obj.page ? obj.active : obj.class}></i>
								<span>{obj.page}</span>
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
