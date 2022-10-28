const About = ({ statePage }) => {
	return (
		<div className={statePage === 'Про мене' ? 'about__root _block activPage' : 'about__root _block'}>
			<div className="container">
				<div className="about__body">
					<div className="about__content">hi it is page about me</div>
				</div>
			</div>
		</div>
	);
};

export default About;
