import { contacts } from '../assets/json/information';
import '../scss/contacts.scss';

const Contacts = () => {
	return (
		<section className="contacts__root" id="Контакти">
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
								<div className="contacts__column-linck">
									<a href={obj.link}>
										<div className="contacts__column-icon">
											<img src={obj.icon} alt="contact" />
										</div>
										<div className="contacts__column-title">{obj.title}</div>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
