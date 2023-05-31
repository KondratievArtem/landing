import React from 'react';

const Description = ({ data, isPopup, setIsPopup }) => {
	const add = () => {
		setIsPopup(true);
		document.querySelector('body').classList.add('none');
	};
	const remove = () => {
		setIsPopup(false);
		document.querySelector('body').classList.remove('none');
	};

	return (
		<>
			{data.map((obj, i) =>
				obj.text ? (
					<dl key={i}>
						<dt>{obj.name}</dt>
						<dd>{obj.text}</dd>
					</dl>
				) : obj.link ? (
					<dl key={i}>
						<dt>{obj.type}</dt>
						<dd>
							<a href={obj.link} id={obj.id && obj.id}>
								{obj.name}
							</a>
						</dd>
					</dl>
				) : (
					<div className="img" key={i}>
						<img src={obj.img} alt={obj.name} onClick={() => add()} />
						{isPopup && (
							<div className="about-me__popup">
								<i
									className="about-me__popup-close"
									onClick={() => {
										remove();
									}}></i>
								<img src={obj.img} alt={obj.name} />
							</div>
						)}
					</div>
				)
			)}
		</>
	);
};

export default Description;
