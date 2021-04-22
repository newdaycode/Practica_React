import React, {Component} from 'react';
import Card from './card';
import './../assets/css/top-card-list.css';

const CarListData = [
	{
		username:'@luz.informatica',
		id:1,
		followers:1483,
		todayFollower:12,
		icon:'images/icon-facebook.svg',
		name: 'facebook',
	},	
	{
		username:'@luz.informatica',
		id:2,
		followers:'28k',
		todayFollower:20,
		icon:'images/icon-twitter.svg',	
		name: 'twitter',	
	},	
	{
		username:'@luz.informatica',
		id:3,
		followers:'6k',
		todayFollower:30,
		icon:'images/icon-instagram.svg',
		name: 'instagram',
	},	
	{
		username:'@luz.informatica',
		id: 4,
		followers:'12k',
		todayFollower:-50,
		icon:'images/icon-youtube.svg',
		name: 'youtube',
	},
]

class TopCardList extends Component{

	render(){

		return (
		<React.Fragment>
			<section className="top-cards">
				<div className="wrapper">
					<div className="grid">

						{
							CarListData.map((cardData) => <Card key={cardData.id} {...cardData}/>)
						}
						
						{/*<article className="card facebook">
							<p className="card-title">
								<img src="images/icon-facebook.svg" alt=""/>
								@luzGalvis
							</p>
							<p className="card-followers">
								<span className="card-followers-number">1987</span>
								<span className="card-followers-title">Followers</span>
							</p>
							<p className="card-today">
								<img src="images/icon-up.svg" alt=""/> 12 Today</p>
						</article>			
						<article className="card twitter">
							<p className="card-title">
								<img src="images/icon-twitter.svg" alt=""/>
								@luzGalvis
							</p>
							<p className="card-followers">
								<span className="card-followers-number">28K</span>
								<span className="card-followers-title">Followers</span>
							</p>
							<p className="card-today">
								<img src="images/icon-up.svg" alt=""/> 12 Today</p>
						</article>			
						<article className="card instagram">
							<p className="card-title">
								<img src="images/icon-instagram.svg" alt=""/>
								@luzGalvis
							</p>
							<p className="card-followers">
								<span className="card-followers-number">6K</span>
								<span className="card-followers-title">Followers</span>
							</p>
							<p className="card-today">
								<img src="images/icon-up.svg" alt=""/> 12 Today</p>
						</article>			
						<article className="card youtube">
							<p className="card-title">
								<img src="images/icon-youtube.svg" alt=""/>
								@luzGalvis
							</p>
							<p className="card-followers">
								<span className="card-followers-number">12k</span>
								<span className="card-followers-title">Followers</span>
							</p>
							<p className="card-today">
								<img src="images/icon-up.svg" alt=""/> 12 Today</p>
						</article>	*/}			
					</div>
				</div>
			</section>
		</React.Fragment>
				
			);
	}
}


export default TopCardList;