import React from 'react';

const myList = [
	{ page: 'Головна', class: 'icon-home_icon', activ: 'header__activ icon-home_icon' },
	{ page: 'Про мене', class: 'icon-about_icon', activ: 'header__activ icon-about_icon' },
	{ page: 'Портфоліо', class: 'icon-portfolio_icon', activ: 'header__activ icon-portfolio_icon' },
	{ page: 'Контакти', class: 'icon-address_icon', activ: 'header__activ icon-address_icon' },
];

const Header = ({ valueState }) => {
	const [activPage, setActivPage] = React.useState('Головна');
	const [activManu, setActivMenu] = React.useState(false);
	const [hours, setHours] = React.useState(0);
	const [dey, setDey] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);

	const setValueState = (obj) => {
		setActivPage(obj.page);
		valueState(obj.page);
	};

	const startTimeData = new Date(2022, 1, 24).getTime();
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
				<div className="time-war__displey displey">
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
				<div className="header__logotyp">
					<span>K</span>ondratiev
				</div>
				<ul className="header__myList">
					{myList.map((obj, index) => (
						<li
							className={activPage === obj.page ? obj.activ : obj.class}
							onClick={() => {
								setValueState(obj);
							}}
							key={index}>
							{obj.page}
						</li>
					))}
				</ul>
				<div className={activManu ? 'header__burger-menu burger-menu activ' : 'header__burger-menu burger-menu'}>
					<div className="burger-menu__open-close" onClick={() => setActivMenu(!activManu)}>
						<span></span>
					</div>
					<ul className="burger-menu__burgerList" onClick={() => setActivMenu(false)}>
						{myList.map((obj, index) => (
							<li
								className={activPage === obj.page ? obj.activ : obj.class}
								onClick={() => {
									setValueState(obj);
									setActivMenu(false);
								}}
								key={index}>
								<span>{obj.page}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
