import './HomeStyles.scss';
import { Link } from 'react-router-dom';
import TweenLite from 'gsap';
import { useEffect } from 'react';

import TableBookBtn from '../components/TableBookBtn';

import picMain from '../assets/images_global/pic-main.png';
import bottomLeft from '../assets/images_global/bottom-left.png';
import bottomRight from '../assets/images_global/bottom-right.png';
import small1 from '../assets/images_global/small1.png';

function Home(props) {
	useEffect(() => {
		const homePageTL = TweenLite.timeline({
			defaults: { ease: 'back.out' /*delay: 5 */ },
		});

		if (window.innerWidth < 1280) {
			// the sole small salad anim (only for mobile)
			homePageTL.from(
				'.small-salad',
				{
					duration: 1,
					scale: 0,
					ease: 'back.out',
				}
				// '-=1'
			);
		} else {
			homePageTL.from('.homeNav .route-link', {
				duration: 0.5,
				y: 100,
				rotate: 45,
				stagger: 0.1,
				opacity: 0,
				ease: 'power1.out',
			});
		}

		// app-logo anim
		homePageTL.from('.app-logo', {
			duration: 1,
			yPercent: 100,
			opacity: 0,
		});

		// the description lines
		homePageTL.from('.desc-line', {
			duration: 1,
			yPercent: 300,
			opacity: 0,
			stagger: 0.1,
		});

		homePageTL.from('.app-btns button', {
			duration: 0.5,
			xPercent: -100,
			opacity: 0,
			stagger: 0.1,
		});
	}, []);

	return (
		<section className="home-page">
			<div className="decorations">
				<img
					className="small-salad"
					src={bottomRight}
					alt="Fresh green salad"
				/>
				<img
					className="platter-tacos"
					src={bottomLeft}
					alt="Tacos on serving platter"
				/>
				<img className="fish-grill" src={small1} alt="Fish Grill with Salad" />
				<img
					className="large-meal"
					src={picMain}
					alt="Large meal on white plate"
				/>
			</div>

			<div className="page-content wrapper">
				<h1 className="app-logo logo-grad">FoodHalal</h1>
				<p className="app-description">
					<span className="desc-line line1">Enjoy our top-quality</span>
					<span className="desc-line line2">professionally cooked meals</span>
					<span className="desc-line line3">that are 100% Halal certified</span>
				</p>
				<div className="app-btns">
					<TableBookBtn />

					<Link to="/menu">
						<button className="btn btn-secondary">ORDER NOW</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Home;
