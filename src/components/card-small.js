import React from 'react';
import './../assets/css/card-small.css';

function CardSmall({icon, pageViews, growth}){

	return (
		<div className="card-small">
			<div className="card-small-view">Page Views</div>
			<div className="card-small-icon">
				<img src={icon} alt=""/>
			</div>
			<div className="card-small-number">{pageViews}</div>
			<div className="card-small-percentage">
				<span>
					<img src="images/icon-up.svg" alt=""/>{growth}%
				</span>
			</div>
		</div>
	)

}

export default CardSmall