import './HomeStyles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import picMain from '../assets/images_global/pic-main.png';
import bottomLeft from '../assets/images_global/bottom-left.png';
import bottomRight from '../assets/images_global/bottom-right.png';
import small1 from '../assets/images_global/small1.png';

function Home(props) {
	return (
		<section className="home-page">
			<div className="decorations">
				<img src={picMain} alt="Large meal on white plate" />
				<img src={bottomLeft} alt="Tacos on serving platter" />
				<img src={bottomRight} alt="Fresh green salad" />
				<img src={small1} alt="Fish Grill with Salad" />
			</div>

			<div className="page-content">
				<h1 className="app-logo">FoodHalal</h1>
				<p className="app-description">
					<span className="line1">Enjoy our top-quality</span>
					<span className="line2">professionally cooked meals</span>
					<span className="line3">that are 100% Halal certified</span>
				</p>
				<div className="app-btns">
					<Link to="/book">
						<button className="btn">
							BOOK A TABLE
							<FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
							{/* Arrow here */}
						</button>
					</Link>

					<Link to="/menu">
						<button className="btn btn-secondary">ORDER NOW</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Home;
