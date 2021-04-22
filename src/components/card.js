import React from 'react';
import './../assets/css/card.css';

function Card({username, followers, todayFollower, icon, name}){
	const cardClass = `card ${name}`;
	return (
		<React.Fragment>
			<article className={cardClass}>
				<p className="card-title">
					<img src={icon} alt=""/>
					{username}
				</p>
				<p className="card-followers">
					<span className="card-followers-number">{followers}</span>
					<span className="card-followers-title">Followers</span>
				</p>
				<p className="card-today">
					<img src="" alt=""/> {todayFollower} Today</p>
			</article>	
		</React.Fragment>

	)

}

export default Card