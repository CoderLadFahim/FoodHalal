import './HomeStyles.scss';
import { Link } from 'react-router-dom';
import TweenLite from 'gsap';
import { useEffect } from 'react';

import TableBookBtn from '../components/TableBookBtn';

import picMain from '../assets/images_global/pic-main.png';
import bottomLeft from '../assets/images_global/bottom-left.png';
import bottomRight from '../assets/images_global/bottom-right.png';
import small1 from '../assets/images_global/small1.png';

function Home({ playState, setPlayState }) {
	useEffect(() => {
		// checking if anim has alaready been played, returning out
		if (!playState) return;

		const homePageTL = TweenLite.timeline({
			delay: 8,
			defaults: { ease: 'back.out' },
		});

		if (window.innerWidth < 1280) {
			// the sole small salad anim (only for mobile)
			homePageTL.from(
				'.small-salad',
				{
					duration: 1,
					scale: 0,
				}
				// '-=1'
			);
		} else {
			homePageTL.from('nav.homeNav .route-link', {
				duration: 0.5,
				y: 100,
				rotate: 45,
				stagger: 0.1,
				opacity: 0,
			});
		}

		// app-logo anim
		homePageTL.from('.app-logo', {
			duration: 1,
			yPercent: 100,
			opacity: 0,
		});

		// decoration animation, only for desktop
		if (window.innerWidth >= 1280)
			homePageTL
				.from(
					'.decorations',
					{
						duration: 1,
						xPercent: 100,
					},
					'-=1'
				)
				.from('.decorations img', {
					duration: 1,
					scale: 0,
					stagger: 0.1,
				});

		// the description lines
		homePageTL.from(
			'.desc-line',
			{
				duration: 1,
				yPercent: 300,
				opacity: 0,
				stagger: 0.1,
			},
			'-=1'
		);

		homePageTL.from('.app-btns button', {
			duration: 0.5,
			xPercent: -100,
			opacity: 0,
			stagger: 0.1,
		});

		// AppNav animation, only for tablets
		if (window.innerWidth < 1280 && window.innerWidth > 600)
			homePageTL
				.from('.mobile-hide', {
					duration: 0.5,
					yPercent: -100,
				})
				.from('.mobile-hide .route-link', {
					duration: 0.5,
					y: -100,
					rotate: -45,
					stagger: 0.1,
					opacity: 0,
				});

		// animating the togglers
		homePageTL.from('.toggler', {
			xPercent: 100,
			opacity: 0,
		});

		homePageTL.timeScale(1.5);
		// setting the playState to be false to stop anim from playing everytime user visits the homeview
		setPlayState();
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
