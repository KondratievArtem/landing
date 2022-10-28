const Skill = ({ statePage }) => {
	return (
		<div className={statePage === 'Навички' ? 'skill__root _block activPage' : 'skill__root _block'}>
			<div className="container">
				<div className="skill__body">
					<div className="skill__content">Hi, it is page about my Skill</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
