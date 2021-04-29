import './HomeStyles.scss';
import { Link } from 'react-router-dom';
import picMain from '../assets/images_global/pic-main.png';
import bottomLeft from '../assets/images_global/bottom-left.png';
import bottomRight from '../assets/images_global/bottom-right.png';

function Home(props) {
	return (
		<section className="home-page">
			<h1 className="app-logo">FoodHalal</h1>
			<p className="app-description">
				<span className="line1">Enjoy our top-quality</span>
				<span className="line2">professionally cooked meals</span>
				<span className="line3">that are 100% Halal certified</span>
			</p>
			<div className="app-btns">
				<Link to="/book">
					<button className="table-btn">
						BOOK A TABLE
						{/* Arrow here */}
					</button>
				</Link>

				<Link to="/menu">
					<button className="order-btn">ORDER NOW</button>
				</Link>
			</div>
			<div className="decorations">
				<img src={picMain} alt="Large meal on white plate" />
				<img src={bottomLeft} alt="Tacos on serving platter" />
				<img src={bottomRight} alt="Fresh green salad" />
			</div>
		</section>
	);
}

export default Home;
