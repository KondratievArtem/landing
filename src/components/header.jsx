import React from 'react';

const myList = [
	{ page: 'Головна', class: 'icon-home_icon', activ: 'header__activ icon-home_icon' },
	{ page: 'Про мене', class: 'icon-about_icon', activ: 'header__activ icon-about_icon' },
	{ page: 'Навички', class: 'icon-education_icon', activ: 'header__activ icon-education_icon' },
	{ page: 'Портфоліо', class: 'icon-portfolio_icon', activ: 'header__activ icon-portfolio_icon' },
	{ page: 'Контакти', class: 'icon-address_icon', activ: 'header__activ icon-address_icon' },
];

const Header = ({ valueState }) => {
	const [activPage, setActivPage] = React.useState('Головна');
	const [activManu, setActivMenu] = React.useState(false);
	const setValueState = (obj) => {
		setActivPage(obj.page);
		valueState(obj.page);
	};
	return (
		<div className="container">
			<div className="header__body">
				<div className="header__logotyp">
					Web Deweloper <span>Kondratiev</span>
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
					<ul className="burger-menu__burgerList">
						{myList.map((obj, index) => (
							<li
								className={activPage === obj.page ? obj.activ : obj.class}
								onClick={() => {
									setValueState(obj);
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
