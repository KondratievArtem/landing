import phone from '../assets/img/icons/contacts/phone.svg';
import telegram from '../assets/img/icons/contacts/telegram.svg';
import email from '../assets/img/icons/contacts/email.svg';
import skype from '../assets/img/icons/contacts/skype.svg';

const contacts = [
	{
		icon: phone,
		title: 'Телефон',
		text: '+38 097 836 36 34',
		linck: 'tel:+380978363634',
	},
	{
		icon: telegram,
		title: 'Телеграм',
		text: 't.me/+380978363634',
		linck: 'https://t.me/+380978363634',
	},
	{
		icon: skype,
		title: 'Skype',
		text: 'join.skype.com/invite/KHSqeiGfNVJj',
		linck: 'https://join.skype.com/invite/KHSqeiGfNVJj',
	},
	{
		icon: email,
		title: 'E-mail',
		text: 'Kondrativ41@gmail.com',
		linck: 'mailto:kondrativ41@gmail.com',
	},
];

const Contacts = ({ statePage }) => {
	return (
		<div className={statePage === 'Контакти' ? 'contacts__root _block activPage' : 'contacts__root _block'}>
			<div className="container">
				<div className="contacts__title title">
					<h2>
						Мої <span>контакти</span>
					</h2>
				</div>
				<div className="contacts__body">
					<div className="contacts__qestions">
						<p>Маєш до мене питання?</p>
						<span>Я до ваших послуг</span>
					</div>
					<div className="contacts__columns">
						{contacts.map((obj, i) => (
							<div className="contacts__column " key={i}>
								<div className="contacts__column-icon">
									<img src={obj.icon} alt="contact" />
								</div>
								<div className="contacts__column-title">{obj.title}</div>
								<div className="contacts__column-linck">
									<a href={obj.linck}>{obj.text}</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
