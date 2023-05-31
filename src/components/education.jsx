const Education = ({ title, data }) => {
	return (
		<div className="education__column">
			<h3>{title}</h3>
			<div className="education__column-body">
				{data.map((obj, i) => (
					<div className="education__column-icon column-icon" key={i}>
						{obj.icon && (
							<div className="column-icon__img">
								<img src={obj.icon} alt="img" />
							</div>
						)}
						<div className="column-icon__title">{obj.title}</div>
						<div className="column-icon__body">{obj.text}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
